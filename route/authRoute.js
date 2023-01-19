const express = require('express');
const nodemon = require('nodemon');
const router = express.Router();
const{signup,login} = require('../logic/auth_Logic')
router.post('/signup',signup);
router.post('/login',login);
module.exports = router;
