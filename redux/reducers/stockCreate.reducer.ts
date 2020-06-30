import { StockCreateReducer } from '../../types/stockCreate.reducer.types';
import * as actions from '../saga/actionTypes';

const initialState: StockCreateReducer = {
    result: null,
    isFailed: false,
    isFetching: false
}

export default (state = initialState, { type, payload }): StockCreateReducer => {
    switch (type) {
        case actions.STOCK_CREATE_FETCHING:
            return { ...state, result: null, isFetching: true, isFailed: false }
        case actions.STOCK_CREATE_FAILED:
            return { ...state, result: null, isFetching: false, isFailed: true }
        case actions.STOCK_CREATE_SUCCESS:
            return { ...state, result: payload, isFetching: false, isFailed: false }
        default:
            return state
    }
}
