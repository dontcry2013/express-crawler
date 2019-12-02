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

var priMap={};
var levelMap={};

event.on('DB data prepared', function() { 
    console.log('数据准备完成，可以进行下一步操作'); 
    //some code from Rachel
    queryOrder(host, 11).then(function(arr){
        var $ = cheerio.load(arr[0]);
        var result=[];
        //console.log(priMap);
        for(var j=1;j<7;j++){//每一个省份都有六年的数据，并且六个表的其实selector是从1开始的，所以循环六次
            $('.fsshowli').each((i, v)=>{//第二层循环 遍历每一个省份的六个表，并获得其中一个省份的表    
                var PriID=utility.getPriId(v,priMap);
                var year=utility.getYear(j);// 调用函数获得省份和年份
                var trs =$(v).find('div.tline > div:nth-child('+j+')>table .tr-cont');//得到六个表中其中一个的所有tr
                var level;
                trs.each((ii, vv)=>{  //第三层循环遍历（除了表头）tr(每一行)
                    $(vv).find('td').each((iii, vvv)=>{ //第四层循环遍历一行中的每一个td
                        //过滤所有的无用数据
                        if($(vvv).text()!='-'&&$(vvv).text()!=''&&$(vvv).text()!=' '&&/点击查看/.test($(vvv).text())==false){
                            if(iii==0){//如果索引为0则值为批次存进变量level中
                                var levelValue=$(vvv).text(); 
                                level=utility.getLevel(levelMap,levelValue);            
                            }
                            if(j<4&&(PriID=='25'||PriID=='35')){//特殊处理2019-2017上海和浙江的分数
                                if(iii>0){
                                    if($(vvv).text()!='分数线'&&$(vvv).text()!='综合'){
                                        result.push(utility.specialPush(PriID,year,level,vvv));//将一个得到的每一条数据存入数组中
                                    }
                                }
                            }else{//处理文理分科的表
                                if(iii>0){//当iii不为0是则将前面所得的数据存入一个数组中            
                                    //获取分数和文（理）科
                                    result.push(utility.pushScoreAndDivision(PriID,year,level,iii,vvv));//将一个得到的每一条数据存入数组中                      
                                }
                            }
                        }
                    });
                }); 
            });  
        }
        console.log(result);
        //获得所有的数据（一个二维数组）
        db.dbInsert(result);
    });
    
}); 

(async ()=>{
    console.log('我正在读取数据库，准备需要的数据');
    
    var admissionLevelPromise = db.getPromiseOfAdmissionLevel();
    await db.handleGetPromiseOfAdmissionLevel(admissionLevelPromise);    
    var provincesPromise = db.getPromiseOfProvinces();
    await db.handleGetPromiseOfProvinces(provincesPromise);
    priMap=db.provincesMap;
    levelMap=db.admissionLevelMap;
    console.log(db.admissionLevelMap, db.provincesMap);
    event.emit('DB data prepared'); 
})();

// process.exit()


//step1: 遍历数据库中provience表，返回对象，包含各省ID和名称。

//step2: 遍历每个省每一年下的所有行。遍历各省，输入各省的dom, 比对网页中的省份名称和step1对象，输出省份ID。
//遍历各年，输出年份。遍历每一行，push proID and year into record, 拆分出批次、文理科成绩，push into record. 
//Store records into two-dimension array.

//step3: 二位数组一次性插入数据库。输入二维数组。没有返回值。
