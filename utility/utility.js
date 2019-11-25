var cheerio = require('cheerio');
const data = require('../testdata.js');

class Utility{
    
    //查找省份  输入：V= <div class="fsshowli" id="bj">...</div> 输出（返回）：北京
   static getPriId(v){
        var $ = cheerio.load(data);
        var pri=$(v).find('.city').text();
      //  $.each(privince,function(key,value){
		//if (key==pri)
      //  record.push(value);//与map连接

       // })
       return pri;
    }
    
    //获取年份 例：输入：j=1 输出（返回）：2019
   static getYear(j){
        var $ = cheerio.load(data);
        var year=$('#bj>div.sline.clearfix > div:nth-child('+j+')').text();
        year=year.substr(0,year.length-1);//除去‘年’字
        return year;
    }

    //获取批次 例：输入：iii=0; vvv= 本科批 输出（返回）：本科批
    static getLevel(iii,vvv){
        var $ = cheerio.load(data);                   
        var level = $(vvv).text();
        return level;
    }

    //获取分数及文科或者理科 例：输入： iii=1,vvv=480，record={北京，2019} 输出：record{北京，2019,480，art}
    static  pushScoreAndDivision(iii,vvv,record){
        var $ = cheerio.load(data);
        if(iii==1){
            record.push($(vvv).text());
            record.push('art');//如果td在tr中的第二列，则为文科，并将这两项放入record数组中                                          
        } else{
            record.push($(vvv).text());
            record.push('science');   //如果td在tr中的第三列，则为理科，并将这两项放入record数组中                       
        }   
        return record;                  
    }

}
module.exports = Utility;