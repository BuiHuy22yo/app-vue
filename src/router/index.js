import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home'
import About from '@/view/About'
import Login from '@/view/Login.vue'
import Product from '@/view/Product.vue'
import Checkout from '@/components/Checkout.vue'
import ActionPriceMaintain from '@/view/CMS/PriceMaintain/Action.vue'
import CreatePriceMaintain from '@/view/CMS/PriceMaintain/Create.vue'
import Preview from '@/view/CMS/Preview/index.vue'
import { isLoggedIn } from '@/utils/auth'

Vue.use(Router)

const loginRoutes = ['/login']
const publicRoutes = ['/login']
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/price-maintenance',
    name: 'ActionPriceMaintain',
    component: ActionPriceMaintain
  },
  {
    path: '/price-maintenance/create',
    name: 'CreatePriceMaintain',
    component: CreatePriceMaintain
  },
  {
    path: '/price-maintenance/preview',
    component: Preview,
    name: 'PreviewPriceMainatin' }
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // check user login
  if (!publicRoutes.includes(to.path) && !isLoggedIn()) {
    next('/login')
    return
  }

  if (loginRoutes.includes(to.path) && isLoggedIn()) {
    next('/')
    return
  }

  // check authorization admin
  // if (masterRoutes.includes(to.path) && !isAdmin()) {
  //   next('/'); // (*)
  //   return;
  // }

  next()
})
export default router
