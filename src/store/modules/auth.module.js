import authService from '@/services/auth.service'
import { LOGIN, LOGOUT } from '@/constants/actions'
import { removeAuthenticated } from '@/utils/auth'

export const auth = {
  namespaced: true,
  state: {
    user: ''
  },
  getters: {
    // getUserProfile: state => state?.user?.profile,
    // getUserName: state => state?.user?.profile?.user_name,
    // getUserRole: state => (state?.user?.profile?.role === 1 ? 'admin' : 'user'),
    // getDepartment: state => state?.user?.profile?.department,
    // getUserId: state => state?.user.profile.user_id,
  },
  mutations: {
    [LOGIN] (state, { user }) {
      state.user = user
    },
    [LOGOUT] (state) {
      state.user = ''
    }
  },
  actions: {
    [LOGIN] ({ commit }, { account, password }) {
      return authService.login({ account, password }).then(data => {
        if (data && data.data && data.data.token && data.data.profile) {
          commit(LOGIN, { user: { token: data.data.token } })
          // let token = data.data.token
          // let user = {
          //   token: token
          // }
          // localStorage.setItem('user_login',  user)
        }
      })
    },
    // [REGISTER](context, { account, password }) {
    //   return authService.register({ account, password });
    // },
    [LOGOUT] ({ commit }) {
      return authService.logout().then(message => {
        commit(LOGOUT)
        console.log('111')
        removeAuthenticated() // remove authentication in local storage

        return message || 'ログアウトに成功'
      })
    }
  }
}
