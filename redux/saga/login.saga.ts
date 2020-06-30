import { kResultOk, kResultNok } from '../../utils/contants';
import { put, call } from 'redux-saga/effects'
import actions from "../actions"
import httpClient from "../../utils/httpClient"
import Router from 'next/router';



export function* sagaLogin({ payload }: any) {
    try {
        yield put(actions.loginFetching())
        const response = yield call(httpClient.post, '/authen/login', payload)
        const { result } = response.data
        if (result == kResultOk) {
            yield put(actions.loginSuccess({ result: response.data }))
            Router.push('/stock')
        } else {
            yield put(actions.loginFailed())
        }
    } catch (error) {
        yield put(actions.loginFailed())
    }
}

export function* sagaReLogin() {

}

export function* sagaLogout() {

}