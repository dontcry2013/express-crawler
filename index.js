var http = require('http');
var cheerio = require('cheerio');
var mysql = require('mysql');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
var dbConfig = require('./db_config.js');
console.log(dbConfig);

// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';

var queryOrder = function(){
    var arg = arguments;
    return new Promise(function(resolve){
        http.get(arg[0], function(res) {
            var chunks = [];
            res.on('data', function(chunk) {
                chunks.push(chunk);
            });
            res.on('end', function() {
                var buffer = Buffer.concat(chunks);
                console.log('**********************'+arg[0]+'**********************');
                resolve([buffer.toString(), arg[1]]);
            });
        });
    })
}

var connection = mysql.createConnection(
    dbConfig
);
    
connection.connect();

var _db_select = function(sql){
    // sql is like this: "SELECT 1 + 1 AS solution";
    connection.query(sql, function (error, results, fields = null) {
        if (error) throw error;
        //in here you can output the results by console.log
        console.log('The solution is: ', results[0].solution);
    });
}

var _db_insert = function(data){
    // data is like this; {title: 'test'}
    connection.query('INSERT INTO posts SET ?', data, function (error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });
}

    
var obj = {};
queryOrder(host, 11).then(function(arr){
    // console.log(arr[0], arr[1]);
    var $ = cheerio.load(arr[0]);
    var obj=[]
    $('body > div.fsx > div.center > div.fsshow.clearfix>div>div.tline > div > table > tbody > tr.tr-cont').each(function(index, div){
         var level = $(div).find('td:nth-child(1)').text();
        obj.push(level)

    })
    var set = new Set(obj);   
    var ar = [...set];
    ar = ar.filter(function(item){
        return (item != '-' && item != '' & item != ' ')
    })
    console.log(ar);
     

});


// connection.end()
// process.exit()