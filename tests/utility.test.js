const cheerio = require('cheerio');
const queryOrder = require('../utility/http');
const utility = require('../utility/utility');
const host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
test.skip('test http get', () => {
    expect.assertions(1);
    return queryOrder(host).then(data => {
        var $ = cheerio.load(data[0]);
        var len = $('body > div.fsx > div.center > div.fsshow.clearfix>div>div.tline > div > table').length;
        expect(len > 0).toEqual(true);
    });
});

test('test the remove duplicate public function', ()=>{
    var arr = utility.removeDuplicate([1,1,2,2,3]);
    var arr1 = utility.removeDuplicate(12);
    expect(arr.length == 3).toEqual(true);
    expect(arr1 == -1).toEqual(true);
});
