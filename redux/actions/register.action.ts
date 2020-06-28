import * as actionTypes from "../saga/actionTypes"

export const register = (payload) => ({
    type: actionTypes.REGISTER_REQUEST,
    payload
})

export const registerFetching = () => ({
    type: actionTypes.REGISTER_FETCHING,
})


export const registerSuccess = (payload) => ({
    type: actionTypes.REGISTER_SUCCESS,
    payload
})

export const registerFailed = () => ({
    type: actionTypes.REGISTER_FAILED
})

export default {
    register,
    registerFetching,
    registerSuccess,
    registerFailed
}