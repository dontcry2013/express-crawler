var cheerio = require('cheerio');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
var queryOrder = require('./utility/http');
var utility = require('./utility/utility.js');
console.log(utility)
// process.exit();
queryOrder(host, 11).then(function(arr){
    var $ = cheerio.load(arr[0]);
    var result=[];
    $('.fsshowli').each((i, v)=>{

        var record=[];
        record.push(utility.getPriId());
        record.push(utility.getYear());
        utility.PushScoreAndLevel(record,result);     
})
    console.log(result);
})

// process.exit()