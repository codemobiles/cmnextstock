import { put, call } from 'redux-saga/effects';
import actions from "../actions"
import httpClient from "../../utils/httpClient"
import { kResultOk, kResultNok } from '../../utils/contants';


export function* sagaStockDelete({ payload, dispatch }: any) {
    try {
        const response = yield call(httpClient.delete, `/stock/product/${payload}`)
        const { result } = response.data
        if (result == kResultOk) {
            dispatch(actions.feedStockList())
        }
    } catch (error) {
        // Nothing 
    }
}