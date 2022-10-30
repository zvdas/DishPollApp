import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from '../actions/auth/types';

export default function AuthReducer(state=[], action) {
    switch(action){
        case SIGNUP_USER:
            return [...state, action.payload]
        case LOGIN_USER:
            return [...state, action.payload]
        case LOGOUT_USER:
            return [...state, action.payload]
        default:
            return state
    }
}