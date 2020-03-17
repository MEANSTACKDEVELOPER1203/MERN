import axios from 'axios';
import {
    GET_PROFILE,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    GET_ERRORS
} from './types';

const BASE_URL = 'http://localhost:5000';

// Get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(`${BASE_URL}/api/profile/getAll`)
        .then(res => {
            console.log("Profile Result  = ", res)
            if (res.data.success === 0) {
                console.log("ProfileResult  Success = ", res.data.success)
                dispatch({
                    type: GET_ERRORS,
                    payload: res.data.errors
                })
            } else if (res.data.success === 1) {
                dispatch({
                    type:GET_PROFILE,
                    payload:res.data.data
                })
            }
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

// // Create Profile
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profile', profileData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};



// export const getCurrentProfile = () => dispatch => {
//     dispatch(setProfileLoading())
//     axios.get(`${BASE_URL}/api/profile`)
//         .then(res => {
//             if (res.data.success === 0) {
//                 console.log("Register Result  Success = ", res.data.success)
//                 dispatch({
//                     type: GET_ERRORS,
//                     payload: {}
//                 })
//             } else if (res.data.success === 1) {
//                 dispatch({
//                     type: GET_PROFILE,
//                     payload: res.data
//                 })
//             }
//         })
//         .catch(err => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: {}
//             })
//         })
// }

//profile loading 
// export const setProfileLoading = () => {
//     return {
//         type: PROFILE_LOADING
//     }
// }