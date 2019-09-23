const express = require('express');
const { getData } = require('./photos');
const { getResponse, sendResponse } = require('../../util/middleware');

const router = express.Router();

router.get('/', getResponse(getData), sendResponse);

module.exports = router;