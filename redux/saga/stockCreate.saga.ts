import { put, call } from 'redux-saga/effects';
import actions from "../actions"
import httpClient from "../../utils/httpClient"


export function* sagaStockCreate(payload) {
    try {
        yield put(actions.stockCreateFetching())
        const response = yield call(httpClient.get, '/stock/product')
        yield put(actions.stockListSuccess(response.data))

    } catch (error) {
        yield put(actions.stockCreateFailed())
    }
}