import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListView
  },
  {
    path: '/writeform',
    name: 'writeform',
    component: function () {
      return import('../views/WriteForm.vue')
    }
  },
  {
    path: '/list/:id',
    name: 'listpage',
    component: function() {
      return import('../views/PageView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
