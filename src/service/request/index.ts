import axios from 'axios'
import type { HYRequestConfig, HYAxiosRequestConfig } from './type'
import type { AxiosInstance, AxiosResponse } from 'axios'

class HYRequest {
  instance: AxiosInstance
  constructor(config: HYAxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessInterceptor,
      config.interceptors?.requestFailureInterceptor
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessInterceptor,
      config.interceptors?.responseFailureInterceptor
    )
  }

  request<T = any>(config: HYRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessInterceptor) {
      config = config.interceptors.requestSuccessInterceptor(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessInterceptor) {
            res = config.interceptors?.responseSuccessInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default HYRequest
