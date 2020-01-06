const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usersService = require('./usersService');


// Load Input Validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const usersRegister = async (req, res) => {

    try {
        const { errors, isValid } = validateRegisterInput(req.body);
        // Check Validation
        if (!isValid) {
            return res.status(200).json({ success: 0, errors: errors });
        }
        if (req.body.email == "" || req.body.email == undefined) {
            return res.json({ success: 1, message: `${req.body.email} Enter valid email Id..` })
        }
        let isUserRegister = await usersService.findUserByEmailId(req.body);
        if (isUserRegister) {
            return res.status(400).json({ success: 0, message: `${req.body.email} already exist!!` })
        } else {
            let registeredObj = await usersService.saveUsers(req.body);
            return res.status(200).json({ success: 1, message: "Registered successfully!!", data: registeredObj })
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({ success: 0, message: `${error}` })
    }
}

const login = async (req, res) => {

    try {
        console.log("Body == ", req.body)
        const { errors, isValid } = validateLoginInput(req.body);
        // Check Validation
        if (!isValid) {
            return res.status(200).json({ success: 0, errors: errors });
        }
        const email = req.body.email;
        const password = req.body.password;
        let userObj = await usersService.findUserByEmailId(req.body);
        if (!userObj) {
            errors.email = "User not found"
            return res.status(200).json({ success: 0, errors })
        }
        bcryptjs.compare(password, userObj.password)
            .then(isMatch => {
                if (isMatch) {
                    const payload = { id: userObj.id, email: userObj.email, } //create JWT payload
                    //Sign Token
                    jwt.sign(payload, 'secretOrKey', { expiresIn: 3600 }, (err, token) => {
                        return res.status(200).json({ success: 1, token: 'Bearer' + token })
                    })
                } else {
                    errors.password = "Incorrect password!!!"
                    return res.status(200).json({ success: 0, errors })
                }
            })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ success: 0, message: `${error}` })
    }
}

const usersController = {
    usersRegister: usersRegister,
    login: login
}

module.exports = usersController