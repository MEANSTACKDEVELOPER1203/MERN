const express = require('express');
const router = express.Router();
const usersController = require('./usersController');

//@desc User registration
//@method POST
//@access Public
router.post('/userRegister', usersController.usersRegister);

//@desc Login User
//@method POST
//@access Public
router.post('/login', usersController.login)










module.exports = router