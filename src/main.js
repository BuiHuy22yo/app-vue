import Vue from 'vue'
import App from './App'
import './plugins'
import './components/ui'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
import i18n from './i18n'

// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
