import { put } from 'redux-saga/effects';
import actions from "../actions"


export function* sagaRegister({ payload }: any) {
    try {
        yield put(actions.registerFetching())
        yield put(actions.registerSuccess({ result: "ok" }))
    } catch (error) {
        yield put(actions.registerFailed())
    }
}