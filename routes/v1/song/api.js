// api file
var formidable = require('formidable');
var config = require('../../../config');
var song = require('../../../utilities/song');


module.exports = {
    uploadMusic: function (req) {
        const userID = req.userID;
        return song.createUserFolder(userID).then((userPath) => {
            return new Promise((resolve, reject) => {
                console.log("User Folder Created or exist");
                // capture incoming
                var form = new formidable.IncomingForm();
                var coverNames = [];

                // allow multiple files
                form.multiples = true;
                // keep the extension of the file
                form.keepExtensions = true;

                // parse request
                form.parse(req);

                form.on('file', function (name, file) {
                    console.log("===========File received===========");
                    // create folder for each music
                    song.createMusicFolders(userPath + "/" + file.name.split('.')[0]).then(() => {
                        console.log("Music Folders Created or exist");
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