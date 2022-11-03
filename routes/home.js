const express = require('express');
const { index, register, home } = require('../controllers/home');
const loginUser = require('../middlewares/loginUser')
const asyncHandler = require('../middlewares/async-handler');
const router = express.Router();

router.get('/', asyncHandler(index))
router.get('/register', loginUser, asyncHandler(register))
router.get('/home', loginUser, asyncHandler(home))

module.exports = router;