// Create Operation


// CRUD Opeartion - CREATE READ UPDATE DELETE

var fs = require('fs')

fs.appendFile('arbaj.txt','Hello I am ArbaJ.How are You ?', function(err){


    if(err){

        throw err;
    }

    else{

        console.log("Your File Creted Successfully")
    }
});