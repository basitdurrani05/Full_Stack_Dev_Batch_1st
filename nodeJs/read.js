var http = require('http')   // http must server

var fs = require('fs')  // read file opearion

http.createServer(function(req,res){

    fs.readFile('index.html',function(err,data){

        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        res.end()
    })

}).listen(5000)