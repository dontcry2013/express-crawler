/* eslint-disable no-plusplus */
const Crawler = require('crawler');
const utility = require('../utility/utility');

describe('Crawler test', () => {
  let crawler = null;

  beforeAll(() => {
    crawler = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback(error, res, done) {
        if (error) {
          console.log(error);
        } else {
          const { $ } = res;
          // $ is Cheerio by default
          // a lean implementation of core jQuery designed specifically for the server
          console.log($('title').text());
        }
        done();
      },
    });
  });

  test('should crawl one request', (done) => {
    const callback = (error, res) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Grabbed', res.body.length, 'bytes');
        expect(res.body.length > 0).toEqual(true);
      }
      done();
    };

    crawler.queue({
      uri: 'http://www.google.com.au',
      callback,
    });
  });

  test('should crawl 10 request', (done) => {
    const result = [];
    const dataCrawler = new Crawler({
      maxConnections: 10,
      timeout: 100000,
      callback(error, res, finish) {
        if (error) {
          console.log(error);
        } else {
          const { $ } = res;
          utility.getDataOfOneTable($, result);
        }
        finish();
      },
    });
    const Urls = [];
    for (let l = 1; l <= 10; l++) {
      Urls.push(`http://kaoshi.edu.sina.com.cn/college/scorelist?tab=file&wl=&local=1&page=${l}`);
    }
    dataCrawler.queue(Urls);
    dataCrawler.on('drain', () => {
      console.log('dfsdf', result.length);
      console.log(result);
      expect(result.length === 200).toEqual(true);
      done();
    });
  });

  test('should crawl 157 request', (done) => {
    const result = [];
    const dataCrawler = new Crawler({
      maxConnections: 10,
      timeout: 100000,
      callback(error, res, finish) {
        if (error) {
          console.log(error);
        } else {
          const { $ } = res;
          utility.getDataOfOneTable($, result);
        }
        finish();
      },
    });
    // Divide the different pages' url into a queue
    for (let queueNumber = 0; queueNumber < Math.ceil(157 / 10); queueNumber++) {
      const Urls = [];
      for (let l = queueNumber * 10 + 1; l <= (queueNumber + 1) * 10 && l <= 157; l++) {
        Urls.push(`http://kaoshi.edu.sina.com.cn/college/scorelist?tab=file&wl=&local=1&page=${l}`);
      }
      dataCrawler.queue(Urls);
    }

    dataCrawler.on('drain', () => {
      console.log(result.length);
      expect(result.length === 3125).toEqual(true);
      done();
    });
  });
});
