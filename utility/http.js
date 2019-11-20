var http = require('http');
var queryOrder = function getUrlContentWithHttpGet(){
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
    });
};

module.exports = queryOrder;