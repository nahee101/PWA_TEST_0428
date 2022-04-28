import Vue from 'vue'
import App from './App.vue'
import router from './router'
//npm install axios 하고
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
