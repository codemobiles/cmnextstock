import { kResultOk, kResultNok } from '../../utils/contants';
import { put, call, select, delay } from 'redux-saga/effects'
import actions from "../actions"
import httpClient from "../../utils/httpClient"
import Router from 'next/router';
import { setCookie, removeCookie, getCookie } from '../../utils/cookie';



export function* sagaLogin({ payload }: any) {
    try {
        yield put(actions.loginFetching())
        const response = yield call(httpClient.post, '/authen/login', payload)
        const { result } = response.data
        if (result == kResultOk) {
            setCookie("token", response.data.token);
            setCookie("username", response.data.username);
            yield put(actions.loginSuccess(response.data))
            Router.push('/stock')
        } else {
            yield put(actions.loginFailed())
        }
    } catch (error) {
        yield put(actions.loginFailed())
    }
}

export function* sagaReLogin({ payload }: any) {
    const state = yield select();
    yield delay(10)
    if (state.loginReducer.token) {
        Router.push('/stock')
    } else if (payload.token) {
        debugger
        yield put(actions.loginSuccess(payload))
        Router.push('/stock')
    } else {
        const localToken = getCookie('token')
        if (localToken) {
            yield put(actions.loginSuccess(payload))
            Router.push('/stock')
        }
    }
}

export function* sagaLogout() {
    removeCookie('token')
    yield put(actions.logoutSuccess())
    Router.push('/login')
}