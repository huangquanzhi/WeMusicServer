const express = require('express');
const router = express.Router();

// get jwt middleware
const jwtMiddleware = require('../../../middleware/jwt');
const api = require('./api');
// verify jwt
router.use(jwtMiddleware);

router.post('/', (req, res) => {
    api.uploadMusic(req.decoded.userID, files).then((data) => {
        res.send({data});
    });
});

module.exports = router;