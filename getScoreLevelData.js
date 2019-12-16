/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable linebreak-style */
const path = require('path');
const Crawler = require('crawler');

global.appRoot = path.resolve(__dirname);
const utility = require(`${global.appRoot}/utility/utility`);

global.appRoot = path.resolve(__dirname);

const provincePageMap = {};
const result = [];

// Get a map for recording the page number of each province.
const localUri = [];
for (let i = 1; i < 33; i++) {
  localUri.push(`http://kaoshi.edu.sina.com.cn/college/scorelist?tab=file&wl=&local=${i}`);
}

const c = new Crawler({
  maxConnections: 40,
  callback(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      const { $ } = res;
      const pageDom = $('.pageNumWrap');
      const content = pageDom.attr();
      const page = parseInt(content.totalpage, 10);
      let cityNo;
      if (res.request.uri.query.indexOf('local=') >= 0) {
        const cityNoArr = res.request.uri.query.split('local=');
        // eslint-disable-next-line prefer-destructuring
        cityNo = parseInt(cityNoArr[1], 10);
      }
      provincePageMap[cityNo] = page;
    }
    done();
  },
});

c.queue(localUri);
c.on('drain', () => {
  console.log(provincePageMap);
  // Get the length of the provincePageMap
  const keyArr = Object.keys(provincePageMap);
  // Use a loop to get data of each province.
  const dataCrawler = new Crawler({
    maxConnections: 30,
    timeout: 1000000,
    callback(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        const { $ } = res;
        utility.getDataOfOneTable($, result);
      }
      done();
    },
  });
  dataCrawler.on('drain', () => {
    console.log(result);
  });
  for (let j = 1; j <= keyArr.length; j++) {
  // Divide the different pages' url into a queue
    for (let queueNumber = 0; queueNumber < Math.ceil(provincePageMap[j] / 30); queueNumber++) {
      const Urls = [];
      for (let l = queueNumber * 30 + 1; l <= (queueNumber + 1) * 30 && l <= provincePageMap[j]; l++) {
        Urls.push(`http://kaoshi.edu.sina.com.cn/college/scorelist?tab=file&wl=&local=${j}&page=${l}`);
      }
      dataCrawler.queue(Urls);
    }
  }
});
