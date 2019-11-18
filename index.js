var http = require('http');
var cheerio = require('cheerio');
var mysql = require('mysql');
// var logger = require('dailylog').getlog({logdir:require('os').homedir()+'/Desktop/log', name:'logjsj'});
var dbConfig = require('./db_config.js');
console.log(dbConfig);


var host = 'http://www.eol.cn/e_html/gk/fsx/index.shtml';

var queryOrder = function(){
    var arg = arguments;
    return new Promise(function(resolve){
        http.get(arg[0], function(res) {
            var chunks = [];
            res.on('data', function(chunk) {
                chunks.push(chunk);
            });
            res.on('end', function() {
                var buffer = Buffer.concat(chunks);
                console.log('**********************'+arg[0]+'**********************');
                resolve([buffer.toString(), arg[1]]);
            });
        });
    })
}

var connection = mysql.createConnection(
    dbConfig
);
    
connection.connect(function(){
    _db_insert();
});


var _db_insert = function(err){
    if (err) throw err;
    console.log('Connected!');
    connection.query("SELECT * FROM admission_level", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
    });
    
}


var privince={
    安徽:1,
    澳门:2,
    北京:3,
    重庆:4,
    福建:5,
    甘肃:6,
    广东:7,
    广西:8,
    贵州:9,
    海南:10,
    河北:11,
    黑龙江:12,
    河南:13,
    湖北:14,
    湖南:15,
    江苏:16,
    江西:17,
    吉林:18,
    辽宁:19,
    内蒙古:20,
    宁夏:21,
    青海:22,
    陕西:23,
    山东:24,
    上海:25,	
    山西:26,   
    四川:28,
    台湾:29,
    天津:30,
    香港:31,
    新疆:32,
    西藏:33,
    云南:34,
    浙江:35};
/*var level={
    '本科批':1,
    '自主招生线':2,
    '艺术类本科':3,
    '体育类本科':4,
    '专科提前批面试线':5,
    '一批':6,
    '二批':7,
    '体育':8,
    '专科':9,
    '艺术':10,
    '三批':11,
    '艺术类':12,
    '体育类':13,
    '自主招生参考线':14,
    '高职':15,
    '批次':16,
    '自主招生控制分数线':17,
    '本科录取控制分数线':18,
    '体育类本科文化控制分数线':19,
    '艺术类本科文化控制分数线':20,
    '高职(专科)':21,
    '自主招生':22,
    '本科':23,
    '艺术类本科':24,
    '农村专项计划':25,
    '体育类文化本科':26,
    '专科一段':27,
    '专科二段':28,
    '专科一批':29,
    '专科二批':30,
    '艺术类一批':31,
    '艺术类二批':32,
    '体育类一批':33,
    '体育类二批':34,
    '蒙授本科一批':35,
    '蒙授本科二批':36,
    '蒙授高职高专':37,
    '普通本科一批':38,
    '普通本科二批':39,
    '普通高职高专':40,
    '体育类本专科':41,
    '艺术类普通本科':42,
    '艺术类高职高专':43,
    '体育类本、专科':44,
    '高职专科':45,
    '高水平运动队':46,
    '体育类本、专科':47,
    '体育类普通本科':48,
    '本科三批':49,
    '高水平运动员':50,
    '体育专业':51,
    '本科普通批':52,
    '军检线':53,
    '第一段':54,
    '第二段':55,
    '第三段':56,
    '体育类一段':57,
    '体育类二段':58,
    '第二批':59,
    '第三批':60,
    '第一批文化线体育特招生':61,
    '艺术类第一、二批文化线美术类':62,
    '体育类第一批文化线体育类':63,
    '军校军检线':64,
    '军校':65,
    '艺、体本科':66,
    '艺、体专科':67,
    '艺术本科':68,
    '艺术体育专科':69,
    '艺术体育本科':70,
    '艺术A类本科':71,
    '专项计划本科批':72,
    '三批A':73,
    '三批B':74,
    '本科一批':75,
    '本科二批':76,
    '高职高专一批':77,
    '高职高专二批':78,
    '本科A批':79,
    '国家专项计划':80,
    '体育本科A批':81,
    '国家专项计划本科一批':82,
    '国家专项计划本科二批':83,
    '专科提前批':84,
    '高分优先投档线':85,
    '高职专科A':86,
    '高职专科B':87,
    '二批A':88,
    '二批B':89,
    '专科A':90,
    '专科B':91,
    '艺术本':92,
    '艺术专':93,
    '艺术类专科':94,
    '彝文专业本科':95,
    '藏文专业本科':96,
    '重点本科汉族':97,
    '普通本科汉族':98,
    '重点本少数民族':99,
    '普通本少数民族':100,
    '专科汉族':101,
    '专科少数民族':102,
    '重点本科少数民族':103,
    '普通本科少数民族':104,
    '高职专科汉族':105,
    '民族院校民族班':106,
    '民族班':107,
    '藏汉双语':108,
    '体育本科':109,
    '体育类专科':110,
    '汉语言本科一批':111,
    '汉语言本科二批':112,
    '汉语言专科':113,
    '汉语本科一批':114,
    '汉语本科二批':115,
    '汉语本科三批':116,
    '汉语言高职':117,
    '民语言本科一批':118,
    '民语言本科二批':119,
    '汉语言本科三批':120,
    '汉语言专科':121,
    '汉语言专科一批':122

}*/
var level=[];
        
var result=[];
queryOrder(host, 11).then(function(arr){
    // console.log(arr[0], arr[1]);
    var $ = cheerio.load(arr[0]);

    
    $('body > div.fsx > div.center > div.fsshow.clearfix>div').each(function(index, div){
        
        
        var eleID=6;
        for(var i=1;i<=eleID;i++)
        {     
            var record=[];
            var pri=$(div).find('div.topline>div.city').text();
            $.each(privince,function(key,value){
                if (key==pri)
                    record.push(value);
            })

            var year=$('div.sline.clearfix > div:nth-child('+i+')').text();
            record.push(year);

            var count=0;
            $('div.tline > div> table > tbody > tr').each(function(index, div){
                count++;
            })

            for(var j=1;j<=count;j++){

                for(var k=2;k<=3;k++){
                    var score=$(div).find('div.tline > div:nth-child('+i+') > table > tbody > tr:nth-child('+j+') > td:nth-child('+k+')').text();
                    record.push(score);
                }

                if($('div.tline > div> table > tbody > tr.tr-head > td').text()=='文科')
                   		{record.push('art');	}
                else if($('div.tline > div> table > tbody > tr.tr-head > td').text()=='理科')
                   		{record.push('science');}
                else{
                    	record.push('general');}
						
                var lev=$(div).find('div.tline > div:nth-child('+i+') > table > tbody > tr:nth-child('+j+')>td:nth-child(1)').text();

                $.each(level,function(key,value){
                    if (key==lev)
           					record.push(value);			
				
                })
                record.push('Unknown');
                record.push('750');				
            }
            result.push(record);

        }
    })
   
    console.log(result);
     

});


// connection.end()
// process.exit()

