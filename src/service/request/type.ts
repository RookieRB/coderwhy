import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

export interface HYInterceptors<T = AxiosResponse> {
  requestSuccessInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureInterceptor?: (err: any) => any

  responseSuccessInterceptor?: (res: T) => T
  responseFailureInterceptor?: (err: any) => any
}

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestSuccessInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureInterceptor?: (err: any) => any

  responseSuccessInterceptor?: (res: T) => T
  responseFailureInterceptor?: (err: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
}

export interface HYAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: HYInterceptors<T>
}
