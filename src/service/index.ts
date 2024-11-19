import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

export const hyRquest1 = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
