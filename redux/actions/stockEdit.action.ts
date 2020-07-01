import * as actionTypes from "../saga/actionTypes"
import httpClient from "../../utils/httpClient"

export const editStock = (payload) => ({
    type: actionTypes.STOCK_EDIT_REQUEST,
    payload
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

export const doGetStockById = async (id) => {
    const response = await httpClient.get(`/stock/product/${id}`)
    return response.data
}


export default {
    editStock,
    stockEditFetching,
    stockEditSuccess,
    stockEditFailed,
    doGetStockById
};