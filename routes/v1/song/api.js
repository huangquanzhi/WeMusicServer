// api file

var config = require('../../../config');
var song = require('../../../utilities/song');


module.exports = {
    uploadMusic: function (req) {
        return new Promise((resolve) => {
            // it contains unique ID
            var subID = req.decoded.sub;
            // extracted user ID
            var userID = subID.split("|")[1];
            
            song.createUserFolder()


            resolve({success: true, message: userID, a: "Music upload successful!"});
        });
    },
    uploadCovers: function (userID, covers) {

    },
    insertFields: function (userID, fields) {

    }
};