const cheerio = require('cheerio');
const queryOrder = require('../utility/http');
const utility = require('../utility/utility');
const testdata = require('../testdata.js');

const $ = cheerio.load(testdata);
const provinceMap = {
  安徽: 1,
  澳门: 2,
  北京: 3,
  重庆: 4,
  福建: 5,
  甘肃: 6,
  广东: 7,
  广西: 8,
  贵州: 9,
  海南: 10,
  河北: 11,
  黑龙江: 12,
  河南: 13,
  湖北: 14,
  湖南: 15,
  江苏: 16,
  江西: 17,
  吉林: 18,
  辽宁: 19,
  内蒙古: 20,
  宁夏: 21,
  青海: 22,
  陕西: 23,
  山东: 24,
  上海: 25,
  山西: 26,
  四川: 28,
  台湾: 29,
  天津: 30,
  香港: 31,
  新疆: 32,
  西藏: 33,
  云南: 34,
  浙江: 35,
};

const host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
test.skip('test http get', () => {
  expect.assertions(1);
  return queryOrder(host).then((data) => {
    const $$ = cheerio.load(data[0]);
    const len = $$('body > div.fsx > div.center > div.fsshow.clearfix>div>div.tline > div > table').length;
    expect(len > 0).toEqual(true);
  });
});
test('test the function for count the number of year', () => {
  const yearCount = utility.getYearCount($);
  let expectYearcount = 1;
  $('#bj > div.sline.clearfix>div').each(() => {
    expectYearcount += 1;
  });
  expect(yearCount === expectYearcount).toEqual(true);
});

test('test the function for get year', () => {
  const year = utility.getYear($, 1);
  expect(year === 2019).toEqual(true);
});

test('test the function for getting province ID', () => {
  const provinceID = utility.getProvinceId('北京', provinceMap);
  expect(provinceID === 3).toEqual(true);
});

test('test the function for getting the data which no liberal arts and science subdivisons', () => {
  let record = [];
  const expectRecord = [25, 2019, 503, 'all', 17];
  record = utility.specialRecord(25, 2019, 17, '503');
  expect(record[3] === expectRecord[3]).toEqual(true);
});

test('test the function for getting the data which has liberal arts and science subdivisons', () => {
  let record = [];
  record = utility.recordScore(3, 2019, 1, 2, '423');
  expect(record[0] === 3 && record[2] === 423 && record[4] === 1).toEqual(true);
});

test('test the function for pushing the recived data into an array', () => {
  let result = [[3, 2019, 423, 'science', 1], [25, 2019, 503, 'all', 17]];
  const expectRecord = [[3, 2019, 423, 'science', 1], [25, 2019, 503, 'all', 17], [4, 2019, 545, 'art', 6]];
  result = utility.pushDataIntoArray(1, 4, 2019, 6, 1, '545', result);
  expect(result[1][2] === expectRecord[1][2] && result[2][2] === expectRecord[2][2]).toEqual(true);
});

test('test the function for flitering the data', () => {
  const array = [[3, 2019, 423, 'science', 1], [25, 2019, 503, 'all', 17]];
  let result2 = [];
  let result1 = 1;
  result1 = utility.getFiltterData(true, 24, 2019, 51, 1, '-', array);
  result2 = utility.getFiltterData(true, 4, 2019, 6, 1, '545', array);
  expect(result1 === 1).toEqual(true);
  expect(result2[1][1] === 2019 && result2[2][2] === 545).toEqual(true);
});
