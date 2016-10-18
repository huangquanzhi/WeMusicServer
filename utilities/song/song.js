var formidable = require('formidable');

module.exports = {
    createUserFolder: function (userID) {

        var musicPath = config.path.music;

        mkdirp(userPath, function (err) {
            if (err) {
                console.log("Error at creating folder: " + err);
            } else {
                console.log("Folder -  Next ...")
            }
        });
    },
    createMusicFolder: function (userPath, musicName) {

    },
    uploadMusic: function (musicPath, files) {

        // capture incoming forms
        var form = new formidable.IncomingForm();
    }
};