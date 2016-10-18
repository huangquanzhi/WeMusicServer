const express = require('express');
const router = express.Router();

// get jwt middleware
const jwtMiddleware = require('../../../middleware/jwt');
const userMiddleware = require('../../../middleware/user');
const api = require('./api');
// verify jwt
router.use(jwtMiddleware);
router.use(userMiddleware);

router.post('/upload', (req, res) => {
    api.uploadMusic(req).then((data) => {
        res.send({success: data.success, message: data.message});
    });
});


module.exports = router;