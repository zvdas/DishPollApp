import AuthServices from '../../../services/firebase-auth'
import { signUpUser, loginUser, logoutUser } from './methods'

export const registerAUser = (user) => {
    return (dispatch) => {
        return AuthServices.signup({user})
            .then(response => {dispatch(signUpUser(response.user))})
            .catch(err=>{throw(err)})
    }
}

export const loginAUser = (user) => {
    return (dispatch) => {
        return AuthServices.login({user})
            .then(response => {dispatch(loginUser(response.user))})
            .catch(err=>{throw(err)})
    }
}

export const logoutAUser = (user) => {
    return (dispatch) => {
        return AuthServices.logout({user})
            .then(response => {dispatch(logoutUser(response.data))})
            .catch(err=>{throw(err)})
    }
}