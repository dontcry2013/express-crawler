var cheerio = require('cheerio');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
var queryOrder = require('./utility/http');
var DatabaseUtility  =  require('./utility/db.js');


/*queryOrder(host, 11).then(function(arr){
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
});*/

// process.exit()


var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 


event.on('some_event', function() { 
    console.log('数据准备完成，可以进行下一步操作'); 
    //some code from Rachel
    



}); 

console.log('我正在读取数据库，准备需要的数据');
var db = new DatabaseUtility();
admissionLevelPromise = db.getPromiseOfAdmissionLevel();
db.handleGetPromiseOfAdmissionLevel(admissionLevelPromise);

provincesPromise = db.getPromiseOfProvinces();
db.handleGetPromiseOfProvinces(provincesPromise);

event.emit('some_event'); 


