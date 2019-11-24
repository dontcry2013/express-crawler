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
