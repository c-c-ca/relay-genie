const { Router } = require('express');
const router = Router();

const { addAuthzRoutesTo } = require('./utils');
const strategies = require('../strategies');

strategies.forEach(addAuthzRoutesTo(router));

module.exports = router;
