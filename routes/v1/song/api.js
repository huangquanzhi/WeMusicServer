// api file
var formidable = require('formidable');
var config = require('../../../config');
var song = require('../../../utilities/song');
var path = require('path');
var fs = require('fs');

module.exports = {
    uploadMusic: function (req) {
        const userID = req.userID;
        return song.createUserFolder(userID).then((userPath) => {
            return new Promise((resolve, reject) => {
                console.log("User Folder Created or exist");
                // capture incoming
                var form = new formidable.IncomingForm();
                // allow multiple files
                form.multiples = true;
                // keep the extension of the file
                form.keepExtensions = true;
                // upload folder
                form.uploadDir = config.path.temp;
                // parse request
                form.parse(req);

                // every file received
                form.on('file', function (name, file) {
                    console.log("===========File received===========");
                    // create folder for each music

                    // extract temp file name from file path
                    var musicFileName = file.path.split("\\")[2];
                    // get music name
                    var musicName = musicFileName.split(".")[0];
                    // get music extension
                    var musicExt = musicFileName.split(".")[1];

                    var musicPath = userPath + "/" + musicName;
                    // try to create music folder
                    song.createMusicFolders(musicPath).then(() => {
                        console.log("Music Folders Created or exist");
                        // move music from temp folder to music folder
                        // rename to song.Extension
                        fs.rename(file.path, path.join(musicPath, "song" + "." + musicExt));
                    }).catch((err) => {
                        reject({success: false, message: err});
                    })
                });

            })
        }).catch((err) => {
            throw {success: false, message: err};
        });
    },
    uploadCovers: function (userID, covers) {

    },
    insertFields: function (userID, fields) {

    }
};