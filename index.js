var cheerio = require('cheerio');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
var queryOrder = require('./utility/http');
var DatabaseUtility  =  require('./utility/db.js');


var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 


event.on('some_event', function() { 
    console.log('数据准备完成，可以进行下一步操作'); 
    //some code from Rachel
    



}); 

console.log('我正在读取数据库，准备需要的数据');
var db = new DatabaseUtility();
var admissionLevelPromise = db.getPromiseOfAdmissionLevel();
db.handleGetPromiseOfAdmissionLevel(admissionLevelPromise);

var provincesPromise = db.getPromiseOfProvinces();
db.handleGetPromiseOfProvinces(provincesPromise);

event.emit('some_event'); 


