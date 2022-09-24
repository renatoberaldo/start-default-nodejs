const express = require('express');
const exempleMiddleware = require('../middlewares');
const Controllers = require('../controllers');

const router = express.Router();

router.get('/test', Controllers.test);
router.get('/test2', exempleMiddleware, Controllers.test2);

module.exports = router;
