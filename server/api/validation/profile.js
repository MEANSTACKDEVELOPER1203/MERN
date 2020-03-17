const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInputs(data) {
    let errors = {};
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';

    if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle needs to betwwn 2 to 4 character';
    }

}