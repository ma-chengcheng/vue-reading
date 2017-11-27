// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

window.axios = axios;
axios.defaults.baseURL = 'http://api.beluga.ai/';
axios.defaults.autofaceURL = 'http://api.beluga.ai/';
axios.defaults.withCredentials=true;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
