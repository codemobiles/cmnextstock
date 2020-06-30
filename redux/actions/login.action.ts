import * as actionTypes from "../saga/actionTypes"

export const login = (payload) => ({
    type: actionTypes.LOGIN_REQUEST,
    payload
})

export const loginFetching = () => ({
    type: actionTypes.LOGIN_FETCHING
})

export const loginSuccess = (payload) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload
})

export const loginFailed = () => ({
    type: actionTypes.LOGIN_FAILED
})

export const relogin = (payload) => ({
    type: actionTypes.RELOGIN_REQUEST,
    payload
})

export const logout = () => ({
    type: actionTypes.LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
    type: actionTypes.LOGOUT_SUCCESS
})

export default {
    login,
    loginFetching,
    loginSuccess,
    loginFailed,
    relogin,
    logout,
    logoutSuccess
};