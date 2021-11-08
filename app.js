// Global Require
const express = require('express');
const bodyParser = require('body-parser');
global.config = require('./config').config;

// Definition
global.app = express();

// Config for POST
global.app.use(bodyParser.json());
global.app.use(bodyParser.urlencoded({ extended: true }));

// Local Require
require('./routes/routes');

// Views
global.app.use('/', express.static(`${__dirname}/views`));

// App listening
global.app.listen(global.config.port, () => {
  console.log(`Server running in port ${global.config.port}`);
});
