class Utility{

    static removeDuplicate(arr){
        if(!Array.isArray(arr)){
            return -1;
        }
        var set = new Set(arr);
        return [...set];
    }

    /**
     * Checks to see if a value is set.
     *
     * @param {Function} accessor Function that returns our value
     */
    static isset (accessor) {
        try {
            // Note we're seeing if the returned value of our function is not
            // undefined
            return typeof accessor() !== 'undefined';
        } catch (e) {
            // And we're able to catch the Error it would normally throw for
            // referencing a property of undefined
            return false;
        }
    }

    //获取分数及文科或者理科 例：输入： iii=1,vvv=480，record={北京，2019} 输出：record{北京，2019,480，art}
    static  pushScoreAndDivision(PriID,year,level,iii,vvv){
        var $ = cheerio.load(data);
        var record=[];
        record.push(PriID);
        record.push(year);  
        if(iii==1){
            record.push($(vvv).text());
            record.push('art');//如果td在tr中的第二列，则为文科，并将这两项放入record数组中                                          
        } else{
            record.push($(vvv).text());
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