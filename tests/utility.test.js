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
<<<<<<< HEAD
=======

test('test the isset function', ()=>{
    utility.isset(() => some); // false

    // Defining objects
    let some = { nested: { value: 'hello' } };

    // More tests that never throw an error
    expect(utility.isset(() => some)).toBe(true); // true
    expect(utility.isset(() => some.nested)).toBe(true); // true
    expect(utility.isset(() => some.nested.value)).toBe(true); // true
    expect(utility.isset(() => some.nested.deeper.value)).toBe(false); // false

    // Less compact but still viable except when trying to use `this` context
    expect(utility.isset(function () { return some.nested.deeper.value })).toBe(false); // false
});
<<<<<<< HEAD
>>>>>>> 8656577c3c8cbef57fedeb08cb5e6013064375b2
=======

>>>>>>> 993c0eaa04d4dcfe220a077da3d720296e7b3d98
