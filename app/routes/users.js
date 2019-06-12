var express = require('express');
var router = express.Router();
var user = require('../controller/users_controller');

/* GET users listing. */
router.get('/sign_in', user.signIn);

module.exports = router;
