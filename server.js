const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();

const config = require('./config');
const routes = require('./routes/v1');

app.use(cors());

// parse  JSON
// app.use(bodyParser.json());

// use routes V1
app.use('/api/v1', routes);

// start listen to port
app.listen(config.server.port, () => {
    console.log('Server started on port', config.server.port);
});

module.exports = app;