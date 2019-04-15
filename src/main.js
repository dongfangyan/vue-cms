

import Vue from '../node_modules/vue/dist/vue.js'
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
import '../lib/mui-master/dist/css/mui.min.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
// import { Header, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.use(Lazyload);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import router from './router.js'
Vue.http.options.emulateJSON = true;
import './styles/index.less'
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})