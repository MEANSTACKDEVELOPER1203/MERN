//Load profile Services
const profileService = require('./profileServices');

//Load Validation
const validProfileInput = require('../validation/profile');

const createProfile = async (req, res) => {
    try {
        console.log("Body == ", req.body)
        // const { errors, isValid } = validProfileInput(req.body);
        // //check validation
        // console.log("errors == ", errors)
        // console.log("isvalid == ", isValid)
        // if (!isValid) {
        //     //return any errors with 400 status
        //     return res.status(400).json({ errors })
        // }
        const profileObj = await profileService.createProfile(req.body);
        if (profileObj) {
            //return success message
            return res.status(200).json({ success: 1, message: "Profile has been created successfully.", data: profileObj })
        }

    } catch (error) {
        return res.status(404).json({ success: 0, message: `${error}` })
    }
}

const getAll = async (req, res) => {
    try {
        const listOfProfiles = await profileService.FindAllProfiles();
        if (listOfProfiles) {
            return res.status(200).json({ success: 1, data: listOfProfiles });
        } else {
            return req.status(200).json({ success: 0, data: [] })
        }
    } catch (error) {
        //return error message
        return res.status(404).json({ success: 0, message: `Error while fetch all profile ${error}` })
    }
}

const profileController = {
    createProfile: createProfile,
    getAll: getAll
}
module.exports = profileController