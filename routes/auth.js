const express = require('express');
const asyncHandler = require('../middlewares/async-handler');
const validationResult = require('../middlewares/validationResult')
const validationResultAuth = require('../middlewares/validationResult-auth')
const { loginController, registerController, logoutController } = require('../controllers/auth');
const { bodyRegister, bodyLogin } = require('../middlewares/validationBody');
const router = express.Router();

router.post('/login', bodyLogin, validationResultAuth, asyncHandler(loginController))
router.post('/register', bodyRegister, validationResult, asyncHandler(registerController))
router.get('/logout', asyncHandler(logoutController))

module.exports = router;