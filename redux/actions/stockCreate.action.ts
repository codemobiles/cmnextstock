import * as actionTypes from "../saga/actionTypes"

export const createStock = (payload) => ({
    type: actionTypes.STOCK_CREATE_REQUEST,
    payload
})

export const stockCreateFetching = () => ({
    type: actionTypes.STOCK_CREATE_FETCHING
})

export const stockCreateSuccess = (payload) => ({
    type: actionTypes.STOCK_CREATE_SUCCESS,
    payload
})

export const stockCreateFailed = () => ({
    type: actionTypes.STOCK_CREATE_FAILED,
})

export default {
    createStock,
    stockCreateFetching,
    stockCreateSuccess,
    stockCreateFailed,
};