

import Vue from '../node_modules/vue/dist/vue.js'
import app from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

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

var store=new Vuex.Store({
  state:{
   car:[]
  },
  mutations:{
    
    addToCar(state,goodsinfo){
      var flag=false
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count+=parseInt(goodsinfo.count)
          flag=true
          return true
        }
      })
      if(!flag)
      {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car)||'[]')
    },
    updateGoodsInfo(state,goodsinfo){
      state.car.some(item=>{
          if(item.id==goodsinfo.id){
            item.count=parseInt(goodsinfo.count)
            return true
          }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFormcar(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
          return true
        }
    })
     localStorage.setItem('car',JSON.stringify(state.car))
  },
    updateGoodsSelected(state,info){
      state.car.some((item,i)=>{
        if(item.id==info.id){
          item.selected=info.selected
          return true
        }
    })
     localStorage.setItem('car',JSON.stringify(state.car))

    }
  },
  getters:{
      getAllCount(state){
        var c=0;
        state.car.forEach(item=>{
          c+=item.count})
          return c},
        getGoodsCount(state){
          var o={};
          state.car.forEach(item=>{
          o[item.id]=item.count
          })
            return o
          },
          getGoodsSelected(state){
            var o={}
            state.car.forEach(item=>{
              o[item.id]=item.selected
            })
            return o;
          },
          getGoodsCountAndAmount(state){
            var o={
              count:0,
              amount:0
            }
            state.car.forEach(item=>{
              if(item.selected){
                o.count+=item.count
                o.amount+=item.price*item.count
              }
            })
            return o;
          }
      }
  
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store:store

})
