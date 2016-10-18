// api file

var config = require('../../../config');
var song = require('../../../utilities/song');


module.exports = {
    uploadMusic: function (req) {
        const userID = req.userID;
        return song.createUserFolder(userID).then((data) => {
            console.log("Created or exist");
            resolve({success: true, message: userID, a: "Music upload successful!"});
        });
    },
    uploadCovers: function (userID, covers) {

    },
    insertFields: function (userID, fields) {

    }
};