var express = require('express');
const { userController } = require('../controllers/user');
var router = express.Router();

router.get('/', userController)

module.exports = router;