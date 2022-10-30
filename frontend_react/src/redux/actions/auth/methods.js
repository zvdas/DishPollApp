import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from './types';

export const signUpUser = (data) => {
    return {
        type: SIGNUP_USER,
        payload: data
    }
}

export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export const logoutUser = (data) => {
    return {
        type: LOGOUT_USER,
        payload: data
    }
}