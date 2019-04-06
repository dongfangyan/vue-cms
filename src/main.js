

import Vue from '../node_modules/vue/dist/vue.js'

import app from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import '../lib/mui-master/dist/css/mui.min.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'
import { Header } from 'mint-ui';



Vue.component(Header.name, Header);
import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})