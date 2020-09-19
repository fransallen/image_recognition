import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = process.env.API_URL || 'https://image-recognition-api.frans.thedev.id/'

new Vue({
  render: h => h(App),
}).$mount('#app')
