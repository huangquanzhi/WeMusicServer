const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = (req, res, next) => {
    // grab authorization header
    const authHeader = req.headers['authorization'];

    // check header
    if (authHeader) {
        // get token
        const token = authHeader.split(' ')[1];

        // verify token 64BYTE ENCODE SECRET
        jwt.verify(token, new Buffer(config.secret, 'base64'), {}, (err, decoded) => {
            // token invalid
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