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

    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function (field, file) {
        console.log("File incoming")
    });

    // log any errors that occur
    form.on('error', function (err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function () {
        console.log("Upload completed!");
        //res.writeHead(200, {'content-type': 'text/plain'});
    });

    // parse the incoming request containing the form data
    form.parse(req);

});

var server = app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});