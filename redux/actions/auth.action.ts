import Router from 'next/router';
import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../types';


export const setAuthen = (payload) => ({
    type: AUTHENTICATE,
    payload
})



// register user
const register = ({ username, password }, type) => {
    return dispatch=>{
        dispatch(setAuthen({ token: "1234" }))
        Router.push('/login');
    }
}



export default {
    register,    
};