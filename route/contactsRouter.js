const express = require('express');
const nodemon = require('nodemon');
const router = express.Router();
const {insertContacts,getContacts} = require('../logic/contactsLogic');
router.post('/',insertContacts);
router.get('/',getContacts);
module.exports = router;
