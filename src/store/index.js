import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { auth } from './modules/auth.module'
import { cart } from './modules/cart.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    cart
  },
  plugins: [
    createPersistedState({
      paths: ['auth.user'],
      key: 'user_login'
    })
  ]
})

export default store
