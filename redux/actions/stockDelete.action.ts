import * as actionTypes from "../saga/actionTypes"

export const deleteStock = (payload, dispatch) => ({
    type: actionTypes.STOCK_DELETE_REQUEST,
    payload,
    dispatch
})

export default {
    deleteStock
}