const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const homeRouter = require('./home');
const userRouter = require('./users');

router.use('/auth', authRouter);
router.use('/', homeRouter);
router.use('/user', userRouter);

module.exports = router;
