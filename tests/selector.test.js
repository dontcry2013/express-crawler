const cheerio = require('cheerio');
const data = require('../testdata.js');
const $ = cheerio.load(data);
test('get the main table', () => {
    var len = $('div.fsshow.clearfix').length;
    expect(len > 0).toEqual(true);
});
test('get province ammount', () => {
    var len1 = $('div.fsshow.clearfix').find('.fsshowli').length;
    var len2 = $('div.fsshow.clearfix > .fsshowli').length;
    expect(len1 == len2).toEqual(true);
});
//step1: get province dom
test('get province dom', () => {
    var getProvSelectorStr = '';
    var len1 = $(getProvSelectorStr).length;
    expect(len1 > 0).toEqual(true);
});

//step1: get province amount
test('get province amount', () => {
    var getProvAmountSelectorStr = '';
    var len1 = $(getProvAmountSelectorStr).length;
    expect(len1 > 0).toEqual(true);
});

//step2: getPriID(v), input: v = <div class="fsshowli" id="bj">...</div>, output: proID
//Test case: getPriID(v), input: <div class="fsshowli" id="bj">...</div>, output: 3
test('get province id', () => {
    var v = '';
    var map = {};
    var name = getPriId(v, map);
    expect(name).toEqual(3);
});
//Test case: getPriID(v), input: <div class="fsshowli" id="nmg">...</div>, output: 20

//step2: getYear(j), input: j=1, output: year=2019
//Test case: getYear(j), input: 2, output: 2018
//Test case: getYear(j), input: 4, output: 2016

//step2: pushScoreAndDivision(proID, year, level, iii, vvv); input: ProID=3, year =2019, level=1,  iii=1, vvv=dom; output: record={3,2019,480,art,1}
//Test case: pushScoreAndDivision(proID, year, level, iii, vvv), input(4,2016,6,2,dom), output: {4,2016,525,science,6}
//Test case: pushScoreAndDivision(proID, year, level, iii, vvv), input(25,2017,17,all,dom), output: {25,2017,501,all,17}
//Test case: pushScoreAndDivision(proID, year, level, iii, vvv), input(35,2019,54,all,dom), output: {35,2019,595,all,54}
//Test case: pushScoreAndDivision(proID, year, level, iii, vvv), input(10,2018,81,all,dom), output: {4,2018,439/77,all,81}
