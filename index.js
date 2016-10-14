var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
var mkdirp = require('mkdirp');
var formidable = require('formidable');
var fs = require('fs');

app.set('port', 8888 || 3000);
app.use(cors());

app.post('/upload', function (req, res) {
    res.send("Incoming request")
    // create an incoming form object
    var form = new formidable.IncomingForm();
    // setting user path
    var userPath = 'abc';
    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/uploads', userPath);

    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function (field, file) {

        mkdirp(path.join(form.uploadDir), function (err) {
            if (!err) {
                console.log("Folder Exist, no need to create!");
            } else {
                console.log(err);
            }
        });
    });

    // log any errors that occur
    form.on('error', function (err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function () {
        res.send(200);
    });

    // parse the incoming request containing the form data
    form.parse(req);

});

var server = app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});