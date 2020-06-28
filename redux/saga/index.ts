import { takeEvery, all } from 'redux-saga/effects'
import { sagaRegister } from './register.saga';
import { sagaLogin } from './login.saga';
import * as actionTypes from "./actionTypes"


// Register
export function* watchRegisterRequest() {
    yield takeEvery(actionTypes.REGISTER_REQUEST, sagaRegister)
}


// Login
function* watchLoginRequest() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin)
}

export default function* rootSaga() {
    yield all([
        watchRegisterRequest(),
        watchLoginRequest()
    ])
}