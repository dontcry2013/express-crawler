var cheerio = require('cheerio');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
var queryOrder = require('./utility/http');
var utility = require('./utility/utility.js');


queryOrder(host, 11).then(function(arr){
    var $ = cheerio.load(arr[0]);
    var result=[];
for(var j=1;j<7;j++){//每一个省份都有六年的数据，并且六个表的其实selector是从1开始的，所以循环六次
 $('.fsshowli').each((i, v)=>{//第二层循环 遍历每一个省份的六个表，并获得其中一个省份的表
        
        var PriID=utility.getPriId(v);
        var year=utility.getYear(j);// 调用函数获得省份和年份
        var trs =$(v).find('div.tline > div:nth-child('+j+')>table .tr-cont')//得到六个表中其中一个的所有tr
        var level=0;
        trs.each((ii, vv)=>{  //第三层循环遍历（除了表头）tr(每一行)
            $(vv).find('td').each((iii, vvv)=>{ //第四层循环遍历一行中的每一个td
            if(iii==0){//如果索引为0则值为批次存进变量level中
                level=utility.getLevel(iii,vvv);
            }
            if(iii>0){ //当iii不为0是则将前面所得的数据存入一个数组中
            var record=[];  
            record.push(PriID);
            record.push(year);  
            utility.pushScoreAndDivision(iii,vvv,record);//获取分数和文（理）科
            record.push(level);
            result.push(record);//将一个得到的每一条数据存入数组中
            }
                
            })
         }) 
        })
        
    }
    console.log(result);//获得所有的数据（一个二维数组）
})

// process.exit()