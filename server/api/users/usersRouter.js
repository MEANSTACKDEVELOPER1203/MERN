const express = require('express');
const router = express.Router();
const usersController = require('./usersController');

//@desc User registration
//@method POST
//@access Public
router.post('/userRegister', usersController.usersRegister);










module.exports = router