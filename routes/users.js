var express = require('express');
const asyncHandler = require('../middlewares/async-handler');
const { userController } = require('../controllers/user');
var router = express.Router();

router.get('/', asyncHandler(userController))

module.exports = router;