import * as actionTypes from "../saga/actionTypes"

export const feedStockList = () => ({
    type: actionTypes.STOCK_LIST_REQUEST,
})

export const stockListFetching = () => ({
    type: actionTypes.STOCK_LIST_FETCHING
})

export const stockListSuccess = (payload) => ({
    type: actionTypes.STOCK_LIST_SUCCESS,
    payload
})

export const stockListFailed = () => ({
    type: actionTypes.STOCK_LIST_FAILED,
})

export default {
    feedStockList,
    stockListFetching,
    stockListSuccess,
    stockListFailed,
};