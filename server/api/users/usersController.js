const usersService = require('./usersService');

const usersRegister = async (req, res) => {
    try {
        let isUserRegister = await usersService.findUserByEmailId(req.body);
        if (isUserRegister) {
            return res.status(400).json({ success: 1, message: `${req.body.email} already exist!!` })
        } else {
            let registeredObj = await usersService.saveUsers(req.body);
            return res.status(200).json({ success: 1, message: "Registered successfully!!", data: registeredObj })
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({ success: 0, message: `${error}` })
    }
}

const usersController = {
    usersRegister: usersRegister
}

module.exports = usersController