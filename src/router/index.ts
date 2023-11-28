import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from "../views/AppLogin.vue"
import AppMain from "../views/AppMain.vue"
import AppCart from "../views/addToCart.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppMain
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin
  },
  {
    path: '/addCart/:id',
    name: 'AppCart',
    component: AppCart
  }
  
]

const base_url = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base_url),
  routes
})

export default router