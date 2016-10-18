// api file

var config = require('../../../config');
var song = require('../../../utilities/song');


module.exports = {
    uploadMusic: function (req) {
        return new Promise((resolve) => {
            const userID = req.userID;
            console.log(userID);
           // song.createUserFolder(userID);


            resolve({success: true, message: userID, a: "Music upload successful!"});
        });
    },
    uploadCovers: function (userID, covers) {

    },
    insertFields: function (userID, fields) {

    }
};