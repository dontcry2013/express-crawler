var path = require('path');
global.appRoot = path.resolve(__dirname);
var cheerio = require('cheerio');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
var queryOrder = require(global.appRoot + '/utility/http');
const DatabaseUtility = require(global.appRoot + '/utility/db');
const utility = require(global.appRoot + '/utility/utility');

var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
var db = new DatabaseUtility();

var provinceMap={};
var levelMap={};

event.on('DB data prepared', function() { 
    console.log('数据准备完成，可以进行下一步操作'); 
    //some code from Rachel
    queryOrder(host, 11).then(function(arr){
        var $ = cheerio.load(arr[0]);
        var result=[];
        //console.log(priMap);
        for(var j = 1;j < 7;j++){//每一个省份都有六年的数据，并且六个表的其实selector是从1开始的，所以循环六次
            $('.fsshowli').each((i, v)=>{//第二层循环 遍历每一个省份的六个表，并获得其中一个省份的表                
                try{  
                    var provinceID = utility.getProvinceId($(v).find('.city').text(), provinceMap);  
                }catch (error){
                    console.error('The format of privince is not expected');
                }
                var year = utility.getYear($,j);
                var trs = $(v).find('div.tline > div:nth-child('+j+')>table .tr-cont')//得到六个表中其中一个的所有tr
                var level;
                trs.each((ii, vv)=>{  //第三层循环遍历（除了表头）tr(每一行)                    
                    $(vv).find('td').each((iii, vvv)=>{ //第四层循环遍历一行中的每一个td
                        //过滤所有的无用数据
                        var tdsValue = $(vvv).text();                
                        if(iii==0){//如果索引为0则值为批次存进变量level中
                            level = levelMap[tdsValue];    
                        }
                        if(iii>0){
                            utility.getFiltteringData(j, provinceID, year, level, iii, tdsValue, result,levelMap);
                        }   
                    });
                }); 

            });  
        }
        console.log(result);//获得所有的数据（一个二维数组）
    });
    
}); 

(async ()=>{
    console.log('我正在读取数据库，准备需要的数据');
    
    var admissionLevelPromise = db.getPromiseOfAdmissionLevel();
    await db.handleGetPromiseOfAdmissionLevel(admissionLevelPromise);    
    var provincesPromise = db.getPromiseOfProvinces();
    await db.handleGetPromiseOfProvinces(provincesPromise);
    provinceMap=db.provincesMap;
    levelMap=db.admissionLevelMap;
    //console.log(db.admissionLevelMap, db.provincesMap);
    event.emit('DB data prepared'); 
})();

// process.exit()


//step1: 遍历数据库中provience表，返回对象，包含各省ID和名称。

//step2: 遍历每个省每一年下的所有行。遍历各省，输入各省的dom, 比对网页中的省份名称和step1对象，输出省份ID。
//遍历各年，输出年份。遍历每一行，push proID and year into record, 拆分出批次、文理科成绩，push into record. 
//Store records into two-dimension array.

//step3: 二位数组一次性插入数据库。输入二维数组。没有返回值。
