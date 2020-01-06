import { GET_ERRORS } from '../authAction/types'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload

        // case SET_CURRENT_USER:
        //     return {
        //         ...state,
        //         isAuthenticated: !isEmpty(action.payload),
        //         user: action.payload
        //     };
        default:
            return state;
    }
}
