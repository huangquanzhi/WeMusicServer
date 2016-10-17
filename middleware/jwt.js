const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = (req, res, next) => {
    // grab authorization header
    const authHeader = req.headers['authorization'];
    // check header
    if (authHeader) {
        // get token
        const token = authHeader.split(' ')[1];
        // verify token
        jwt.verify(token, config.secret, (err, decoded) => {
            // token not legit
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Invalid token.'
                });
            } else {
                // decoded token
                req.decoded = decoded;
                // pass
                next();
            }
        });
    } else {
        // no token found
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
};