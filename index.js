var http = require('http');
var cheerio = require('cheerio');
var mysql = require('mysql');
var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});

// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://kaoshi.edu.sina.com.cn/college/scorelist?tab=major&majorid=&wl=&local=19&provid=4&batch=11&syear=2017';

var queryOrder = function(){
    var arg = arguments;
    return new Promise(function(resolve, reject){
        http.get(arg[0], function(res) {
            var chunks = [];
            res.on('data', function(chunk) {
                chunks.push(chunk);
            });
            res.on('end', function() {
                var buffer = Buffer.concat(chunks);
                console.log("**********************"+arg[0]+"**********************");
                resolve([buffer.toString(), arg[1]]);
            });
        });
    })
}


var obj = {};
queryOrder(host, 11).then(function(arr){
    // console.log(arr[0], arr[1]);
    const $ = cheerio.load(arr[0]);

    $('.tbL2 tbody>tr').each(function(idx1, mTr){
        if(idx1 == 0){
            return;
        }
        var uni = $(mTr).find('td:nth-child(2)').text();
   		if(!obj[uni]){
                obj[uni] = [];
         }
        $(mTr).find('td').each(function(idx2, mTd){
            var txt = $(mTd).text();
            obj[uni].push(txt);
        })
    })
    console.log(obj);
});
