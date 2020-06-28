import { put } from 'redux-saga/effects';
import actions from "../actions"


export function* sagaLogin({ payload }: any) {
    try {
        yield put(actions.loginFetching())
        yield put(actions.loginSuccess({ result: "ok" }))
    } catch (error) {
        yield put(actions.loginFailed())
    }
}