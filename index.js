const path = require('path');

global.appRoot = path.resolve(__dirname);

const cheerio = require('cheerio');

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
  console.log('数据准备完成，可以进行下一步操作');
  // some code from Rachel
  queryOrder(host, 11).then((arr) => {
    const $ = cheerio.load(arr[0]);
    const result = [];
    for (var j = 1; j < 7; j++) { // 每一个省份都有六年的数据，并且六个表的其实selector是从1开始的，所以循环六次
      $('.fsshowli').each((_i, v) => { // 第二层循环 遍历每一个省份的六个表，并获得其中一个省份的表
        try {
          var provinceID = utility.getProvinceId($(v).find('.city').text(), provinceMap);
        } catch (error) {
          console.error('The format of privince is not expected');
        }
        let year = utility.getYear($, j);
        let trs = $(v).find(`div.tline > div:nth-child(${j})>table .tr-cont`);// 得到六个表中其中一个的所有tr
        let level;
        trs.each((ii, vv) => { // 第三层循环遍历（除了表头）tr(每一行)
          $(vv).find('td').each((iii, vvv) => { // 第四层循环遍历一行中的每一个td
            // 过滤所有的无用数据
            let tdsValue = $(vvv).text();
            if (iii == 0) { // 如果索引为0则值为批次存进变量level中
              level = levelMap[tdsValue];
            }
            if (iii > 0) {
              utility.getFiltteringData(j, provinceID, year, level, iii, tdsValue, result, levelMap);
            }
          });
        // eslint-disable-next-line linebreak-style
        });
      });
    }
    console.log(result);// 获得所有的数据（一个二维数组）
  });
});

(async () => {
  console.log('我正在读取数据库，准备需要的数据');
  const admissionLevelPromise = db.getPromiseOfAdmissionLevel();
  await db.handleGetPromiseOfAdmissionLevel(admissionLevelPromise);
  const provincesPromise = db.getPromiseOfProvinces();
  await db.handleGetPromiseOfProvinces(provincesPromise);
  provinceMap = db.provincesMap;
  levelMap = db.admissionLevelMap;
  event.emit('DB data prepared');
})();
// step1: 遍历数据库中provience表，返回对象，包含各省ID和名称。
// step2: 遍历每个省每一年下的所有行。遍历各省，输入各省的dom, 比对网页中的省份名称和step1对象，输出省份ID。
// 遍历各年，输出年份。遍历每一行，push proID and year into record, 拆分出批次、文理科成绩，push into record.
// Store records into two-dimension array.
// step3: 二位数组一次性插入数据库。输入二维数组。没有返回值。
