class Utility{
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
module.exports = Utility;