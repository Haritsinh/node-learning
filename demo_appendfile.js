var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.appendFile('newfile.html',"Hello Content",function(err){
        if(err) throw err;
    console.log("saved");
    });
}).listen(8080);