var path = require('path');
global.appRoot = path.resolve(__dirname);
var cheerio = require('cheerio');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
var queryOrder = require(global.appRoot + '/utility/http');
const DatabaseUtility = require(global.appRoot + '/utility/db');

var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 


event.on('some_event', function() { 
    console.log('数据准备完成，可以进行下一步操作'); 
    //some code from Rachel
    process.exit()
}); 

(async ()=>{
    console.log('我正在读取数据库，准备需要的数据');
    var db = new DatabaseUtility();
    var admissionLevelPromise = db.getPromiseOfAdmissionLevel();
    await db.handleGetPromiseOfAdmissionLevel(admissionLevelPromise);    
    var provincesPromise = db.getPromiseOfProvinces();
    await db.handleGetPromiseOfProvinces(provincesPromise);
    console.log(db.admissionLevelMap, db.provincesMap);
    event.emit('some_event'); 
})();

