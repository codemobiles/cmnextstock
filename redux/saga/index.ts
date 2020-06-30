import { takeEvery, all } from 'redux-saga/effects'
import { sagaRegister } from './register.saga';
import { sagaLogin, sagaReLogin, sagaLogout } from './login.saga';
import * as actionTypes from "./actionTypes"


// Register
export function* watchRegisterRequest() {
    yield takeEvery(actionTypes.REGISTER_REQUEST, sagaRegister)
}

// Login
function* watchLoginRequest() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin)
}


// ReLogin
function* watchReLoginRequest() {
    yield takeEvery(actionTypes.RELOGIN_REQUEST, sagaReLogin)
}

// Logout
function* watchLogoutRequest() {
    yield takeEvery(actionTypes.LOGOUT_REQUEST, sagaLogout)
}


export default function* rootSaga() {
    yield all([
        watchRegisterRequest(),
        watchLoginRequest(),
        watchReLoginRequest(),
        watchLogoutRequest()
    ])
}