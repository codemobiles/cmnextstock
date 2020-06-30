import { StockEditReducer } from '../../types/stockEdit.reducer.types';
import * as actions from '../saga/actionTypes';

const initialState: StockEditReducer = {
    result: null,
    isFailed: false,
    isFetching: false
}

export default (state = initialState, { type, payload }): StockEditReducer => {
    switch (type) {
        case actions.STOCK_EDIT_FETCHING:
            return { ...state, result: null, isFetching: true, isFailed: false }
        case actions.STOCK_EDIT_FAILED:
            return { ...state, result: null, isFetching: false, isFailed: true }
        case actions.STOCK_EDIT_SUCCESS:
            return { ...state, result: payload, isFetching: false, isFailed: false }
        default:
            return state
    }
}
