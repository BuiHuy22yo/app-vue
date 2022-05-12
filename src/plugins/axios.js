import Vue from 'vue'
import axios from 'axios'
import queryString from 'query-string'
import router from '@/router'
import { removeAuthenticated } from '../utils/auth'
import { authHeaders } from '@/utils/auth'

const options = {
  arrayFormat: 'bracket'
}

// set up default config for http requests
const http = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  paramsSerializer: params => queryString.stringify(params, options)
})

// add a request interceptor
http.interceptors.request.use(
  config => {
    config.headers = authHeaders()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// add a response interceptor
http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response && error.response.status === 401) {
      removeAuthenticated()

      setTimeout(() => {
        router.push('/login')
      })
    }

    return Promise.reject(error)
  }
)

// add a global property
Vue.prototype.$http = http

export default http
