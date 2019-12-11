const path = require('path');

global.appRoot = path.resolve(__dirname);
const cheerio = require('cheerio');

const queryOrder = require(`${global.appRoot}/utility/http`);
// const DatabaseUtility = require(`${global.appRoot}/utility/db`);
const utility = require(`${global.appRoot}/utility/utility`);
//  const { EventEmitter } = require('events');
// const event = new EventEmitter();
// const db = new DatabaseUtility();
// let provinceMap = {};
// event.on('DB data prepared', () => {
// console.log('The data is ready for the next step');
const host = 'http://kaoshi.edu.sina.com.cn/college/scorelist?tab=file&wl=&local=1&syear=';
queryOrder(host, 11).then((arr) => {
  const $ = cheerio.load(arr[0]);
  const pageNumber = $('#score > div.tabsContainer > div.pageNumWrap > span').text();
  console.log(pageNumber);
});