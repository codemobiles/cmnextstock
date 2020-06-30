import { LOGIN_SUCCESS, LOGIN_FETCHING, LOGIN_FAILED, LOGOUT_SUCCESS } from '../saga/actionTypes';
import { LoginReducer } from '../../types/login.reducer.types';

const initialState: LoginReducer = {
    result: null,
    token: null,
    username: null,
    isFetching: false,
    isFailed: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_FETCHING:
            return { ...state, result: null, isFetching: true, isFailed: false }
        case LOGIN_FAILED:
            return { ...state, result: null, isFetching: false, isFailed: true }
        case LOGIN_SUCCESS:
            return { ...state, result: payload.result, isFetching: false, isFailed: true, token: payload.token, username: payload.username }
        case LOGOUT_SUCCESS:
            return initialState
        default:
            return state;
    }
};