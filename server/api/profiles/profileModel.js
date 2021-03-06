const mongoose = require('mongoose')
const schema = mongoose.Schema;

//Create Schema
const profileSchema = new schema({
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        // required: true,
        max: 40
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'active'
    },
    skills: {
        type: [String],
        // required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: {
        title: {
            type: String,
            // required: true
        },
        company: {
            type: String,
            // required: true
        },
        location: {
            type: String,
            // required: true
        },
        from: {
            type: Date,
            // required: true
        },
        to: {
            type: Date,
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    },
    education: [
        {
            school: {
                type: String,
                // required: true
            },
            degree: {
                type: String,
                // required: true
            },
            fieldofstudy: {
                type: String,
                // required: true
            },
            from: {
                type: Date,
                // required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
},{
    versionKey:false
})

const collName = "profile";
const Profile = mongoose.model('Profile', profileSchema, collName);
module.exports = Profile;