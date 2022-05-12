import http from '@/plugins/axios'

const fetch = (url, params = {}) => {
  return http
    .get(url, { params })
    .then(res => res.data.data)
    .catch(err => Promise.reject(err))
}

const post = (url, data = {}) => {
  return http
    .post(url, data)
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}

const put = (url, data = {}) => {
  return http
    .put(url, data)
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}

const remove = (url, data = {}) => {
  return http
    .delete(url, data)
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}

const ApiService = { fetch, post, put, remove }

export default ApiService
