// Syntax

const express = require('express')   // Express Import

const path = require('path')    // Path Import (HTML,CSS,JS,ReactJS)

const app = express();  // Call Express

const port = 3000;  // As you wish  (3000, 4000, 5000)

app.get('/Himanshu', function(req,res){   // 

    res.sendFile(path.join(__dirname,'Himanshu.html'))  // Html file Send With the help of expressJs



})

app.get('/Service', function(req,res){   // 

    res.sendFile(path.join(__dirname,'Service.html'))  // Html file Send With the help of expressJs



})

app.get('/About', function(req,res){   // 

    res.sendFile(path.join(__dirname,'About.html'))  // Html file Send With the help of expressJs



})

app.listen(port,()=>{    // PORT Start

    console.log(`Server toh chal pada ${port}`)
})