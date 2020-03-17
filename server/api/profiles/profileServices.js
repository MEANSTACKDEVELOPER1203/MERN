const Profile = require('./profileModel');
const ObjectId = require('mongodb').ObjectId;

const createProfile = (body) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("createProfile Body", body);
            Profile.findOne({ memberId: ObjectId(body.memberId) })
                .then(profileObj => {
                    if (profileObj) { //update

                    } else { //create
                        const profileInfo = new Profile({
                            memberId: body.memberId,
                            company: body.company,
                            website: body.website,
                            status: 'Active',
                            bio: body.bio,
                        })
                        Profile.create(profileInfo)
                            .then(profileObj => resolve(profileObj))
                    }
                })
                .catch(err => reject(err))
        }, 100)
    })
)

const FindAllProfiles = () => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            Profile.find().sort({ createdAt: -1 })
                .then(profileObj => resolve(profileObj))
                .catch(err => reject(err))
        }, 100)
    })
)









const profileService = {
    createProfile: createProfile,
    FindAllProfiles: FindAllProfiles
}
module.exports = profileService