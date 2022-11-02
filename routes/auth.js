var express = require('express');
const asyncHandler = require('../middlewares/async-handler');
const validationResult = require('../middlewares/validationResult')
const { loginController, registerController, logoutController } = require('../controllers/auth');
const { bodyRegister } = require('../middlewares/validationBody');
var router = express.Router();

router.post('/login', asyncHandler(loginController))
router.post('/register', bodyRegister, validationResult, asyncHandler(registerController))
router.post('/logout', asyncHandler(logoutController))

module.exports = router;