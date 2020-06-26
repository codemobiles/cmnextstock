import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../types';

const initialState = {
    token: null,
    user: null,
};




export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { ...state, token: action.payload.token }
        default:
            return state;
    }
};