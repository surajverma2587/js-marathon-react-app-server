const express = require('express');

const photos = require('./photos');

const routes = express.Router();

routes.use('/photos', photos);

module.exports = routes;