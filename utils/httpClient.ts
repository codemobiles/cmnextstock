import axios from 'axios'

import { TOKEN } from './contants'


const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL
})

httpClient.interceptors.request.use((req) => {
  const token = localStorage.getItem(TOKEN)
  // NOTE: add token
  if (token) req.headers = { 'x-access-token': token }
  return req
})

export default httpClient
