import { put, call } from 'redux-saga/effects';
import actions from "../actions"
import httpClient from "../../utils/httpClient"
import Router from 'next/router';

export function* sagaStockCreate({ payload }) {
    try {
        yield put(actions.stockCreateFetching())
        const response = yield call(httpClient.post, '/stock/product', payload)
        yield put(actions.stockCreateSuccess(response.data))
        Router.push("/stock")
    } catch (error) {
        yield put(actions.stockCreateFailed())
    }
}