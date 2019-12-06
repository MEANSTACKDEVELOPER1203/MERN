const User = require('./usersModel');
const gravatar = require('gravatar');
const bcryptjs = require('bcryptjs');

const findUserByEmailId = body =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let email = body.email.toLowerCase();
            User.findOne({ email: email })
                .then(userObj => resolve(userObj))
                .catch(err => reject(err))
        }, 100)
    });

const saveUsers = body =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const avatar = gravatar.url(body.email, {
                s: '200', // Size
                r: 'pg', // Rating
                d: 'mm' // Default
            });
            let userInfo = new User({
                name: body.name,
                email: body.email,
                avatar,
                password: body.password,
                passwordRef: body.password
            });
            bcryptjs.genSalt(10, (err, salt) => {
                bcryptjs.hash(userInfo.password, salt, (err, hash) => {
                    if (err)
                        reject(err);
                    userInfo.password = hash;
                    userInfo.save()
                        .then(userObj => resolve(userObj))
                        .catch(err => reject(err))
                })
            })

        }, 100)
    })




const userServices = {
    findUserByEmailId: findUserByEmailId,
    saveUsers: saveUsers
}
module.exports = userServices