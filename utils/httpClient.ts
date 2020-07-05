import axios from 'axios'

import { kToken } from './contants'
import { getCookie, removeCookie } from './cookie';
import actions from "../redux/actions";


const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL
})

export const setInterceptor = (dispatch) => {
  httpClient.interceptors.request.use((req) => {
    const token = getCookie(kToken)
    if (token) req.headers = { 'x-access-token': token }
    return req
  })


  httpClient.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (403 === error.response.status || 401 === error.response.status || 500 === error.response.status) {
      dispatch(actions.logout())
    } else {
      return Promise.reject(error);
    }
  });

}

export default httpClient
