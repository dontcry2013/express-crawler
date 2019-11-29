var cheerio = require('cheerio');
const data = require('../testdata.js');

class Utility{
    
    //查找省份  输入：V= <div class="fsshowli" id="bj">...</div> 输出（返回）：北京
    static getPriId(v,map){
        var $ = cheerio.load(data);
        var pri=$(v).find('.city').text();
        try{
            var cityValue=/市/;
            var priValue=/省/;
            if(cityValue.test(pri)||priValue.test(pri)){
                throw new Error('format error');
            }
        }catch (error){
            console.error('The format of privince is not expected');
        }
        for(var i in map) {
            if (i==pri){
                return parseInt(map[i]); 
            }    
       }
        
    }
    
    //获取年份 例：输入：j=1 输出（返回）：2019
    static getYear(j){
        var $ = cheerio.load(data);
        var year=$('#bj>div.sline.clearfix > div:nth-child('+j+')').text();
        year=parseInt(year.substr(0,year.length-1));//除去‘年’字
        return year;
    }
    //传入批次名以及储存批次的对象，获取该批次的ID 例：输入：本科批，map 输出：1（number类型）
    static getLevel(map,levelValue){
        for(var i in map) {
            if (i==levelValue){
                return parseInt(map[i]);   
            }  
       }
    }
    //处理没有文理分科的表
    static specialPush(PriID,year,level,vvv){
        var $ = cheerio.load(data);
        var record=[];
        var score=parseInt($(vvv).text().substr(0,3));
        record.push(PriID);
        record.push(year);         
        record.push(score);
        record.push('all');//如果td在tr中的第二列，则为文科，并将这两项放入record数组中                                          
        record.push(level);
        return record;   
    }

    //获取分数及文科或者理科 例：输入： iii=1,vvv=480，record={北京，2019} 输出：record{北京，2019,480，art}
    static  pushScoreAndDivision(PriID,year,level,iii,vvv){
        var $ = cheerio.load(data);
        var score=$(vvv).text().substr(0,3);
        var record=[];
        record.push(PriID);
        record.push(year);  
        record.push(score);
        if(iii==1){          
            record.push('art');//如果td在tr中的第二列，则为文科，并将这两项放入record数组中                                          
        }else{
            record.push('science');   //如果td在tr中的第三列，则为理科，并将这两项放入record数组中                       
        }   
        record.push(level);
        return record;                  
    }
    
    static getCategory(age) {  
        var category = '';  
        switch (true) {  
        case isNaN(age):  
            category = 'not an age';  
            break;  
        case (age >= 50):  
            category = 'Old';  
            break;  
        case (age <= 20):  
            category = 'Baby';  
            break;  
        default:  
            category = 'Young';  
            break;  
        }
        return category;  
    }  

    static escapeHTML(text) {  
        var replacements= {'<': '&lt;', '>': '&gt;','&': '&amp;', '"': '&quot;'};                      
        return text.replace(/[<>&"]/g, function(character) {  
            return replacements[character];  
        });
    }
}



module.exports = Utility;