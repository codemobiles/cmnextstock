import * as actionTypes from "../saga/actionTypes"

export const deleteStock = (payload) => ({
    type: actionTypes.STOCK_DELETE_REQUEST,
    payload
})

export default {
    deleteStock
}