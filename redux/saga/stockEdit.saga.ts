import { put, call } from 'redux-saga/effects';
import actions from "../actions"
import httpClient from "../../utils/httpClient"
import Router from 'next/router';


export function* sagaStockEdit({ payload }: any) {
    try {
        yield put(actions.stockEditFetching())
        const response = yield call(httpClient.put, '/stock/product', payload)
        yield put(actions.stockEditSuccess(response.data))
        Router.push("/stock")
    } catch (error) {
        yield put(actions.stockEditFailed())
    }
}
