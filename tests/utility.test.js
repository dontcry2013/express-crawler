const cheerio = require('cheerio');
const queryOrder = require('../utility/http');
const host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
test.skip('test http get', () => {
    expect.assertions(1);
    return queryOrder(host).then(data => {
        var $ = cheerio.load(data[0]);
        var len = $('body > div.fsx > div.center > div.fsshow.clearfix>div>div.tline > div > table').length;
        expect(len > 0).toEqual(true);
    });
});
test('test the getProvObj public function',()=>{
var obj=utility.getProvObj();
expect(arr.length == 3).toEqual(true);
});

test('test the getProvID public function',()=>{
    var obj= utility.getProvID();
    expect(arr.length == 3).toEqual(true);
    });