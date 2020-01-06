import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        //apply to every to request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
}

export default setAuthToken;