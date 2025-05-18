// Node Js - 1).It's a Open Server Environment
// 2). Javascript On the server 
// 3). Asynchronous Programming




// Create a Server

// Most Of the Common Server Name : 3000, 5000, 8000, 8080

var http = require('http')   // http - hyper text transfer protocol

http.createServer(function(req,res){

    res.writeHead(200,{'content-type':'text/html'})
    res.end('Hello World');
}).listen(9000)



