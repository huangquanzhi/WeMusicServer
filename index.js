var express = require('express');
var app = express();
var formidable = require('formidable');
var cors = require('cors');
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');

app.set('port', 8888 || 3000);
app.use(cors());

app.post('/upload', function (req, res) {
    console.log("Incoming request")
    // create an incoming form object
    var form = new formidable.IncomingForm();
    // setting user path
    var userID = 'abc';
    var userPath = path.join(__dirname, '/uploads' + '/' + userID);
    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // keep the extension of the file
    form.keepExtensions = true;
        console.log(req.headers['authorization']);
    // make folder for new user
    mkdirp(userPath, function (err) {
        if (err) {
            console.log("Error at creating folder: " + err);
        } else {
            console.log("Folder -  Next ...")
        }
    });
    // store all uploads in the /uploads directory
    form.uploadDir = userPath;

    // file received
    form.on('file', function (name, file) {
        console.log("===========File received===========");
        console.log("Name: " + name + " File: " + file);
    });

    // field values received
    form.on('field', function(name, value) {
        console.log("===========Field received===========");
        console.log("Name: " + name + " Value: " + value);
    });

    // log any errors that occur
    form.on('error', function (err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function () {
        console.log("Upload completed!");
        res.sendStatus(200);
    });

    // parse the incoming request containing the form data
    form.parse(req);

});

var server = app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});