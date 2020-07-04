import axios from 'axios'

import { kToken } from './contants'
import { getCookie, removeCookie } from './cookie';
import Router from 'next/router';


const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL
})

httpClient.interceptors.request.use((req) => {
  const token = getCookie(kToken)  
  if (token) req.headers = { 'x-access-token': token }
  return req
})

export default httpClient
