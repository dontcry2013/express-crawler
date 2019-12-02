const cheerio = require('cheerio');
const queryOrder = require('../utility/http');
const utility = require('../utility/utility');
const testdata=require('../testdata.js');
var $=cheerio.load(testdata);
var provinceMap={
    '安徽': 1,
    '澳门': 2,
    '北京': 3,
    '重庆': 4,
    '福建': 5,
    '甘肃': 6,
    '广东': 7,
    '广西': 8,
    '贵州': 9,
    '海南': 10,
    '河北': 11,
    '黑龙江': 12,
    '河南': 13,
    '湖北': 14,
    '湖南': 15,
    '江苏': 16,
    '江西': 17,
    '吉林': 18,
    '辽宁': 19,
    '内蒙古': 20,
    '宁夏': 21,
    '青海': 22,
    '陕西': 23,
    '山东': 24,
    '上海': 25,
    '山西': 26,
    '四川': 28,
    '台湾': 29,
    '天津': 30,
    '香港': 31,
    '新疆': 32,
    '西藏': 33,
    '云南': 34,
    '浙江': 35
  }

const host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
test.skip('test http get', () => {
    expect.assertions(1);
    return queryOrder(host).then(data => {
        var $ = cheerio.load(data[0]);
        var len = $('body > div.fsx > div.center > div.fsshow.clearfix>div>div.tline > div > table').length;
        expect(len > 0).toEqual(true);
    });
});

test('test the function for get year',()=>{
    var year = utility.getYear($, 1);
    expect(year==2019).toEqual(true);
});

test('test the function for getting province ID',()=>{
    var provinceID = utility.getProvinceId('北京', provinceMap);
    expect(provinceID==3).toEqual(true);
});

test('test the function for getting the data which no liberal arts and science subdivisons',()=>{
    var record = [];
    var expectRecord=[25, 2019, 503, 'all', 17];
    record=utility.specialRecord(25, 2019, 17, '503');
    expect(record[3]==expectRecord[3]).toEqual(true);//上海 2019 自主招生控制分数线（在数据库中查ID） 
});

test('test the function for getting the data which has liberal arts and science subdivisons',()=>{
    var record = [];
    var expectRecord=[3, 2019, 423, 'science', 1];
    record=utility.recordScore(3, 2019, 1, 2, '423');//3：北京 1:批次 2：index（以为是一个tr中的第三个td） 
    expect(record[0]==expectRecord[0] && record[2]==expectRecord[2] && record[4]==expectRecord[4]).toEqual(true);//北京 2019  理科 423 本科批（在数据库中查ID）
});

test('test the function for pushing the recived data into an array',()=>{
    var result=[[3, 2019, 423, 'science', 1], [25, 2019, 503, 'all', 17]];
    var expectRecord=[[3, 2019, 423, 'science', 1], [25, 2019, 503, 'all', 17], [ 4, 2019, 545, 'art', 6 ]];
    result=utility.pushDataIntoArray(1, 4, 2019, 6, 1, '545', result);//1：j（意为找的是2018年相对应的表） 4:重庆  6：一批  1：index（以为是一个tr中的第二个td） 
    expect(result[1][2]==expectRecord[1][2] && result[2][2]==expectRecord[2][2] && result[1][4]==expectRecord[1][4]).toEqual(true);
});

test('test the function for flitering the data',()=>{
    var array=[[3, 2019, 423, 'science', 1], [25, 2019, 503, 'all', 17]];
    var result1;
    var result2;
    var expectRecord=[[3, 2019, 423, 'science', 1], [25, 2019, 503, 'all', 17], [ 4, 2019, 545, 'art', 6 ]];
    result1=utility.getFiltteringData(1, 24, 2019, 51, 1, '-', array); //测试输入值包括‘-’时的结果
    result2=utility.getFiltteringData(1, 4, 2019, 6, 1, '545', array);
    expect(result1==1).toEqual(true);
    expect(result2[1][1]==expectRecord[1][1] && result2[2][2]==expectRecord[2][2]).toEqual(true);

});


/*test('test the remove duplicate public function', ()=>{
    var arr = utility.removeDuplicate([1,1,2,2,3]);
    var arr1 = utility.removeDuplicate(12);
    expect(arr.length == 3).toEqual(true);
    expect(arr1 == -1).toEqual(true);
});

test('test the remove duplicate public function', ()=>{
    var arr = utility.removeDuplicate([1,1,2,2,3]);
    var arr1 = utility.removeDuplicate(12);
    expect(arr.length == 3).toEqual(true);
    expect(arr1 == -1).toEqual(true);
});

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
*/
