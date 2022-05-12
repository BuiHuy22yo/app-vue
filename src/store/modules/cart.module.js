// import {RESOURCE_PRODUCT} from '../api/api'

export const cart = {
  namespaced: true,
  state: {
    products: [],
    count: 0
  },
  getters: {
    getProducts: state => state.products,
    getCount: state => state.count
  },
  mutations: {
    CREATE (state, data) {
      let products = state.products
      let index = products.findIndex((item) => item.id === data.id)
      if (index !== -1) {
        products[index].quantity++
      } else {
        state.products.push(data)
      }
      state.count++
    },
    DELETE (state, id) {
      let products = state.products
      state.products = products.filter(item => item.id !== id)
      state.count = state.products.reduce((acc, item) => acc + parseInt(item.quantity), 0)
    },
    RESET (state) {
      state.products = []
      state.count = 0
    }
  },
  actions: {
    add ({commit}, data) {
      commit('CREATE', data)
    },
    delete ({commit}, id) {
      commit('DELETE', id)
    },
    reset ({commit}) {
      commit('RESET')
    }
  }
}
