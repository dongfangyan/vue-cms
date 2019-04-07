import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'

var router=new VueRouter({
    routes:[
      {path:'/',redirect:'/home'},
      {path:'/home',component:HomeContainer},
      {path:'/member',component:MemberContainer},
      {path:'/shopcar',component:shopcarContainer},
      {path:'/search',component:SearchContainer}
    ],
  linkActiveClass: 'mui-active'
})

export default router