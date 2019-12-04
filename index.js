/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable linebreak-style */
const path = require('path');

global.appRoot = path.resolve(__dirname);
const cheerio = require('cheerio');
/* const dailylog = require('dailylog');
const homeDir = require('os').homedir();

const logger = dailylog.getlog({ logdir: `${homeDir}/Desktop/log`, name: 'logjsj' }); */
// const host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
const host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
const queryOrder = require(`${global.appRoot}/utility/http`);
const DatabaseUtility = require(`${global.appRoot}/utility/db`);
const utility = require(`${global.appRoot}/utility/utility`);

const { EventEmitter } = require('events');

const event = new EventEmitter();
const db = new DatabaseUtility();
let provinceMap = {};
let levelMap = {};
event.on('DB data prepared', () => {
  console.log('The data is ready for the next step');
  // some code from Rachel
  queryOrder(host, 11).then((arr) => {
    const $ = cheerio.load(arr[0]);
    const result = [];
    const lastyear = 2019;
    const yearCount = utility.getYearCount($, lastyear);
    console.log(yearCount);
    // Each province has six years of data, use a loop to get data of each year.
    // eslint-disable-next-line no-plusplus
    for (let j = 1; j < yearCount; j++) {
      $('.fsshowli').each((_i, v) => {
        // The second layer loops get one of six tables for each province
        let provinceID;
        try {
          provinceID = utility.getProvinceId($(v).find('.city').text(), provinceMap);
        } catch (error) {
          console.error('The format of privince is not expected');
        }
        const year = utility.getYear($, j);
        const trs = $(v).find(`div.tline > div:nth-child(${j})>table .tr-cont`);
        // Get all trs for one of the six tables
        let level;
        trs.each((_ii, vv) => { // Layer 3 loop through (except header) tr(each line)
          $(vv).find('td').each((iii, vvv) => { // The fourth layer loops through each td in a row
            // filter all useless data
            const tdsValue = $(vvv).text();
            // If the index is 0, the value is stored in the variable level for the batch
            if (iii === 0) {
              level = levelMap[tdsValue];
            }
            if (iii > 0) {
              // If it is not zero, all the obtained data are sequentially inserted into an array
              utility.getFiltterData(j, provinceID, year, level, iii, tdsValue, result, levelMap);
              // In this function we'll get a array called result to record all the information
            }
          });
        });
      });
    }
    console.log(result);// Get all the data (a two-dimensional array)
    // db.dbInsert();
    db.dbClose();
  });
});

// Get the levelMap and provinceMap from data base.
(async () => {
  console.log('I am reading the database, preparing the data I need');
  const admissionLevelPromise = db.getPromiseOfAdmissionLevel();
  await db.handleGetPromiseOfAdmissionLevel(admissionLevelPromise);
  const provincesPromise = db.getPromiseOfProvinces();
  await db.handleGetPromiseOfProvinces(provincesPromise);
  provinceMap = db.provincesMap;
  levelMap = db.admissionLevelMap;
  console.log(levelMap);
  event.emit('DB data prepared');
})();

// process.exit()
