var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

app.get('/', function(req,res){
   res.send("GFettt");
});

app.post('/upload', function(req, res){
    res.send("Incomeing request")
    // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join('/uploads');

    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(field, file) {
        console.log("File added");
        fs.rename(file.path, path.join(form.uploadDir, file.name));
    });

    // log any errors that occur
    form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
        console.log("Done")
        res.end(200);
    });

    // parse the incoming request containing the form data
    form.parse(req);

});

var server = app.listen(6666, function(){
    console.log('Server listening on port 6666');
});