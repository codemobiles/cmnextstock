import { put, call, delay } from 'redux-saga/effects';
import actions from "../actions"
import httpClient from "../../utils/httpClient"
import Router from 'next/router';

export function* sagaStockCreate({ payload }: any) {
    try {
        yield put(actions.stockCreateFetching())
        yield delay(2000)
        const response = yield call(httpClient.post, '/stock/product', payload)
        yield put(actions.stockCreateSuccess(response.data))
        Router.push("/stock")
    } catch (error) {
        yield put(actions.stockCreateFailed())
    }
}