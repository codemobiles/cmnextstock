import { put, call } from 'redux-saga/effects';
import actions from "../actions"
import httpClient from "../../utils/httpClient"


export function* sagaStockList(payload) {
    try {
        yield put(actions.stockListFetching())
        const response = yield call(httpClient.get, '/stock/product')
        yield put(actions.stockListSuccess(response.data))

    } catch (error) {
        yield put(actions.stockListFailed())
    }
}