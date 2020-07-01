import { takeEvery, all } from 'redux-saga/effects'
import { sagaRegister } from './register.saga';
import { sagaStockList } from './stockList.saga';
import { sagaStockCreate } from './stockCreate.saga';
import { sagaStockEdit } from './stockEdit.saga';
import { sagaStockDelete } from './stockDelete.saga';
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


// StockList
function* watchStockListRequest() {
    yield takeEvery(actionTypes.STOCK_LIST_REQUEST, sagaStockList)
}

// StockCreate
function* watchStockCreateRequest() {
    yield takeEvery(actionTypes.STOCK_CREATE_REQUEST, sagaStockCreate)
}

// StockEdit
function* watchStockEditRequest() {
    yield takeEvery(actionTypes.STOCK_EDIT_REQUEST, sagaStockEdit)
}


// StockDelete
function* watchStockDeleteRequest() {
    yield takeEvery(actionTypes.STOCK_DELETE_REQUEST, sagaStockDelete)
}

export default function* rootSaga() {
    yield all([
        watchRegisterRequest(),
        watchLoginRequest(),
        watchReLoginRequest(),
        watchLogoutRequest(),
        watchStockListRequest(),
        watchStockCreateRequest(),
        watchStockEditRequest(),
        watchStockDeleteRequest()
    ])
}