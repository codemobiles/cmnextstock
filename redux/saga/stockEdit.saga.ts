import { put, call } from 'redux-saga/effects';
import actions from "../actions"
import httpClient from "../../utils/httpClient"


export function* sagaStockEdit(payload) {
    try {
        yield put(actions.stockEditFetching())
        // const response = yield call(httpClient.get, '/stock/product')
        // yield put(actions.stockEditSuccess(response.data))

    } catch (error) {
        yield put(actions.stockEditFailed())
    }
}