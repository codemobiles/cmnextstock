import { StockListReducer } from '../../types/stockList.reducer.types';
import * as actions from '../saga/actionTypes';

const initialState: StockListReducer = {
    result: null,
    isFailed: false,
    isFetching: false
}

export default (state = initialState, { type, payload }): StockListReducer => {
    switch (type) {
        case actions.STOCK_LIST_FETCHING:
            return { ...state, result: null, isFetching: true, isFailed: false }
        case actions.STOCK_LIST_FAILED:
            return { ...state, result: null, isFetching: false, isFailed: true }
        case actions.STOCK_LIST_SUCCESS:
            return { ...state, result: payload, isFetching: false, isFailed: false }
        default:
            return state
    }
}
