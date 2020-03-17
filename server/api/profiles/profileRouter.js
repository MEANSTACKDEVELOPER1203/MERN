const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

//load Profile Controller
const profileController = require('./profileController');

//@route api/profile 
//@desc Create Profile 
//@access Public
router.post('/createProfile', profileController.createProfile);

//@route api/profile
//@desc Get profile list
//@access Public
router.get('/getAll', profileController.getAll);

module.exports = router

