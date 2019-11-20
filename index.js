var cheerio = require('cheerio');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
// var host = 'http://www.crs.jsj.edu.cn/aproval/localdetail/1535';
var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';
var queryOrder = require('./utility/http');

queryOrder(host, 11).then(function(arr){
<<<<<<< HEAD
    // console.log(arr[0], arr[1]);
    const $ = cheerio.load(arr[0]);

    $('.tbL2 tbody>tr').each(function(idx1, mTr){
        if(idx1 == 0){
            return;
        }
        var uni = $(mTr).find('td:nth-child(2)').text();
        
        if(!obj[uni]){
             obj[uni] = [];
      }
    /* $(mTr).find('td').each(function(idx2, mTd){
        
        var major = $(mTr).find('td:nth-child(1)').text();
        if(!obj[major]){
            obj[major] = [];
     }*/
     $(mTr).find('td').each(function(idx2, mTd){
        var txt = $(mTd).text();
         obj[major].push(txt);
     })
     
   
    /* $('.tbL2 tbody>tr>td:nth-child(1)').each(function(idx1, mTd){
        var txt = $('.tbL2 tbody>tr>td:nth-child(1)').text();
        obj[uni].push(txt);
    })*/
     $(mTr).find('td').each(function(idx2, mTd){
        var txt = $(mTd).text();
         obj[uni].push(obj[major],txt);
     })
 })
 console.log(obj);
})
=======
    var $ = cheerio.load(arr[0]);
    var obj=[];
    $('body > div.fsx > div.center > div.fsshow.clearfix>div>div.tline > div > table > tbody > tr.tr-cont').each(function(index, div){
        var level = $(div).find('td:nth-child(1)').text();
        obj.push(level);
    });
    var set = new Set(obj);   
    var ar = [...set];
    ar = ar.filter(function(item){
        return (item != '-' && item != '' & item != ' ');
    });
    console.log(ar);
});

// process.exit()
>>>>>>> master
