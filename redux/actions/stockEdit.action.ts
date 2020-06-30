import * as actionTypes from "../saga/actionTypes"

export const editStock = () => ({
    type: actionTypes.STOCK_EDIT_REQUEST,
})

export const stockEditFetching = () => ({
    type: actionTypes.STOCK_EDIT_FETCHING
})

export const stockEditSuccess = (payload) => ({
    type: actionTypes.STOCK_EDIT_SUCCESS,
    payload
})

export const stockEditFailed = () => ({
    type: actionTypes.STOCK_EDIT_FAILED,
})

export default {
    editStock,
    stockEditFetching,
    stockEditSuccess,
    stockEditFailed,
};