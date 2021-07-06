const { Router } = require('express');
const router = Router();

const { addAuthRoutesTo } = require('./utils');
const strategies = require('./strategies');

strategies.forEach(addAuthRoutesTo(router));

module.exports = router;
