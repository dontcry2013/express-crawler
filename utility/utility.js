var cheerio = require('cheerio');
const data = require('../testdata.js');

class Utility{
    
    //获取省份ID
    static getProvinceId(provinceName, map){
        var cityValue = /市/;
        var provinceValue = /省/;
        if(cityValue.test(provinceName) || provinceValue.test(provinceName)){
            throw new Error('format error');
        }
        return map[provinceName];
    }
    
    //获取年份
    static getYear($, j){
        var year = $('#bj>div.sline.clearfix > div:nth-child('+j+')').text();
        year = parseInt(year.substr(0,year.length-1));
        
        return year;
    }

    //获取没有文理分科的数据
    static specialRecord(provinceID, year, level, tdsValue){
        var record = [];
        var score = parseInt(tdsValue.substr(0,3));
        record.push(provinceID);
        record.push(year);         
        record.push(score);
        record.push('all');//如果td在tr中的第二列，则为文科，并将这两项放入record数组中                                          
        record.push(level);
        return record;   
    }

    //获取分科的数据
    static  recordScore(provinceID, year, level, iii, tdsValue){
        var score = parseInt(tdsValue.substr(0,3));
        var record = [];
        record.push(provinceID);
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

    //将获取的数据分别插入result数组中
    static pushDataIntoArray(j, provinceID, year, level, iii, tdsValue, result){//获取每一条记录
        if(j < 4 && (provinceID=='25'|| provinceID=='35')){//特殊处理2019-2017上海和浙江的分数
            if(tdsValue!='分数线' && tdsValue!='综合'){//清理上海和浙江表中的无用数据
                result.push(this.specialRecord(provinceID, year, level, tdsValue));//将一个得到的每一条数据存入数组中
            }
        }
        else{//获取分了文理科的城市的年份的分数和文（理）科     
            result.push(this.recordScore(provinceID, year, level, iii, tdsValue));//将一个得到的每一条数据存入数组中                      
        }
       return result;
    }

    //过滤分数格式不正确的记录
    static getFiltteringData(j, provinceID, year, level, iii, tdsValue, result){
        var test=1;
        if(tdsValue!='-' && tdsValue!='' && tdsValue!=' ' && /点击查看/.test(tdsValue)==false){                                             
                return(this.pushDataIntoArray(j, provinceID, year, level, iii, tdsValue, result));
        }
        else
            return test;
    }
    
}



module.exports = Utility;