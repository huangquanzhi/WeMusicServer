var formidable = require('formidable');
var mkdirp = require('mkdirp');
var config = require('../../config');

module.exports = {
    createUserFolder: function (userID) {
        return new Promise((resolve, reject) => {
            var musicPath = config.path.music;
            // user path to create
            var userPath = musicPath + "/" + userID;

            try {
                // try to create folder
                mkdirp(userPath, function (err) {
                    if (err) {
                        reject("User Folder Creation Error: " + err);
                    } else {
                        resolve(userPath);
                    }
                });
            } catch (e) {
                reject("User Folder Error: " + e.message);
            }
        });
    },
    createMusicFolders: function (musicPath) {
        return new Promise((resolve, reject) => {
            console.log("Paht:" + musicPath)
            console.log("Creating music folder")
            try {
                mkdirp(musicPath, function (err) {
                    if (err) {
                        reject("Music Folder Creation Error: " + err);
                    } else {
                        resolve();
                    }
                });
            } catch (e) {
                reject("Music Folder Error: " + e.message);
            }
        });
    },
    uploadMusic: function (musicPath, files) {

        // capture incoming forms
        var form = new formidable.IncomingForm();
    }
};