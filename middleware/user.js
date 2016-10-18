const config = require('../config');

module.exports = (req, res, next) => {
    // it contains unique ID
    const subID = req.decoded.sub;


    // check sub ID
    if (subID) {
        // extracted user ID
        const userID = subID.split("|")[1];

        if (!userID) {
            return res.status(403).json({
                success: false,
                message: 'Failed to extract user ID.'
            });
        } else {
            // extracted user ID
            req.userID = userID;
            // pass
            next();
        }
    } else {
        // no token found
        return res.status(403).send({
            success: false,
            message: 'Invalid subject header for token!'
        });
    }
};