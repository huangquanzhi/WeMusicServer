const express = require('express');
const router = express.Router();

const song = require('./song');

// route
router.use('/song', song);

module.exports = router;