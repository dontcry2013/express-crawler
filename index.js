var cheerio = require('cheerio');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
var queryOrder = require('./utility/http');

queryOrder(host, 11).then(function(arr){
    var $ = cheerio.load(arr[0]);
    var obj=[];
    $('body > div.fsx > div.center > div.fsshow.clearfix>div>div.tline > div > table > tbody > tr.tr-cont').each(function(index, div){
        var level = $(div).find('td:nth-child(1)').text();
        obj.push(level);
    });
    var set = new Set(obj);   
    var ar = [...set];
    ar = ar.filter(function(item){
        return (item != '-' && item != '' & item != ' ');
    });
    console.log(ar);
});

// process.exit()


//step1: 遍历数据库中provience表，返回对象，包含各省ID和名称。

//step2: 遍历每个省每一年下的所有行。遍历各省，输入各省的dom, 比对网页中的省份名称和step1对象，输出省份ID。
  //遍历各年，输出年份。遍历每一行，push proID and year into record, 拆分出批次、文理科成绩，push into record. 
  //Store records into two-dimension array.

//step3: 二位数组一次性插入数据库。输入二维数组。没有返回值。
