var formidable = require('formidable');
var mkdirp = require('mkdirp');
var config = require('../../config');

module.exports = {
    createUserFolder: function (userID) {
        return new Promise((resolve, reject) => {
            var musicPath = config.path.music;
            console.log(musicPath)
            var userPath = musicPath + "/" + userID;

            try {
                mkdirp(userPath, function (err) {
                    if (err) {
                        reject("User Folder Creation Error: " + err);
                    } else {
                        resolve();
                    }
                });
            } catch (e) {
                reject("User Folder Error: " + e.message);
            }
        });
    },
    createMusicFolder: function (userPath, musicName) {
        return new Promise((resolve, reject) => {
            var musicPath = config.path.music;
            console.log(musicPath)
            var userPath = musicPath + "/" + userID;

            try {
                mkdirp(userPath, function (err) {
                    if (err) {
                        reject("User Folder Creation Error: " + err);
                    } else {
                        resolve();
                    }
                });
            } catch (e) {
                reject("User Folder Error: " + e.message);
            }
        });
    },
    uploadMusic: function (musicPath, files) {

        // capture incoming forms
        var form = new formidable.IncomingForm();
    }
};