class Utility{
<<<<<<< HEAD
   static getPriId(){
    
        var pri=$(div).find('.city').text();
      //  $.each(privince,function(key,value){
		//if (key==pri)
      //  record.push(value);

       // })
       return pri;
    }

   static getYear(){
        var year=$('div.sline.clearfix > div').text();
        return year;
    }
    static getLevelAndScore(record,iii,vvv){
                if(iii == 0){
                    var level = $(vvv).text()
                    record.push(level);
                    return;
                } else if(iii==1){
                    var arr = []
                    arr.push('art')
                    arr.push($(vvv).text())
                } else{
                    var arr = []
                    arr.push('science')
                    arr.push($(vvv).text())
                }         
        return arr;
            
    }

      static  PushScoreAndLevel(record,reslut){
            var trs =$(v).find('table .tr-cont')
            trs.each((ii, vv)=>{
                $(vv).find('td').each((iii, vvv)=>{
                   record.push(this.getLevelAndScore(record,iii,vvv));
                   reslut.push(record);
                })
                
            })

    }

}
=======

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

}

>>>>>>> 2542c26d13baaf3fca59b7bf419d24b220353e42
module.exports = Utility;