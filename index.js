var http = require('http');
var cheerio = require('cheerio');
var mysql = require('mysql');
var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});

var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';

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


queryOrder(host, 11).then(function(arr){
    console.log(arr[0], arr[1]);
});





