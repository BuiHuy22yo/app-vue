// import http from '@/plugins/axios'
// import {authHeaders} from '@/utils/auth'
// import {reject} from "eslint-plugin-promise/rules/lib/promise-statics";
import ApiService from './base.service'
// const axios = require('axios')
class AuthService {
  // login ({account, password}) {
  //   return axios.post('http://localhost:8000/api/v1/login', {
  //     user_id: account,
  //     password
  //   })
  //     .then(res => {
  //       return res.data.data
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       return error
  //     })
  // }
  login ({ account, password }) {
    let data = {
      user_id: account,
      password
    }
    return ApiService.post('login', data)
  }
  // login() {
  //   let data = {
  //     user_id: account,
  //     password
  //   }
  //   return ApiService.get('logout',data)
  // }
  // logout () {
  //   return axios.get('http://localhost:8000/api/v1/logout', {
  //     headers: authHeaders()
  //   })
  //     .then(res => {
  //       return res.data.data
  //     })
  //     .catch(err => {
  //       return err
  //       // return Promise.reject(err)
  //     })
  // }
}

const authService = new AuthService()

export default authService
