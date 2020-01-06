import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../utils/setAuthToken';
const BASE_URL = 'http://localhost:5000';

//registration
export const registerUser = (userData, history) => dispatch => {
    axios.post(`${BASE_URL}/api/users/userRegister`, userData)
        .then(res => {
            console.log("Register Result  = ", res)
            if (res.data.success === 0) {
                console.log("Register Result  Success = ", res.data.success)
                dispatch({
                    type: GET_ERRORS,
                    payload: res.data.errors
                })
            } else if (res.data.success === 1) {
                history.push('/login')
            }
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )


    // fetch(`http://localhost:5000/api/users/userRegister`,
    //     {
    //         method: 'post',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(userData)
    //     })
    //     .then((res) => {
    //         console.log('Created Gist Res:', res);
    //         return res.json();
    //     })
    //     .catch(err =>
    //         dispatch({
    //             type: GET_ERRORS,
    //             payload: err.response.data
    //         })

    //     )
}

//Login
export const loginUser = userData => dispatch => {
    axios.post(`${BASE_URL}/api/users/login`, userData)
        .then(res => {
            console.log("Response", res)
            if (res.data.success === 0) {
                dispatch({
                    type: GET_ERRORS,
                    payload: res.data.errors
                })
            } else {
                //save to localstorage
                const { token } = res.data;
                //set token to LS
                localStorage.setItem('jwtToken', token);
                //set token to auth header
                setAuthToken(token)
                //Decode token to get user data
                const decoded = jwt_decode(token);
                //set current user
                dispatch(setCurrentUser(decoded))
            }


        })
        .catch(err => {
            console.log("Error", err)
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            })
        })
}

//set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//Log OUT  USEr
export const logoutUser = () => dispatch => {
    //remove token from local storage
    localStorage.removeItem('jwtToken')
    setAuthToken(false);
    dispatch((setCurrentUser({})))
}
