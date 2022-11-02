const express = require('express');
const { index, register, home } = require('../controllers/home');
const asyncHandler = require('../middlewares/async-handler');
const router = express.Router();

router.get('/', asyncHandler(index))
router.get('/register', asyncHandler(register))
router.get('/home', asyncHandler(home))

module.exports = router;