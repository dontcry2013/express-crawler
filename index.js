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
