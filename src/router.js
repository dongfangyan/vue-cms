import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'
import NewsList from './components/news/newlist.vue'
import NewsInfo from './components/news/newsinfo.vue'
import PhotoList  from './components/photos/PhotoList.vue'
import photoinfo from './components/photos/photoinfo.vue'
import Goodlist from './components/good/Goodlist.vue'
import GoodsInfo from './components/good/Goodsinfo.vue'

var router=new VueRouter({
    routes:[
      {path:'/',redirect:'/home'},
      {path:'/home',component:HomeContainer},
      {path:'/member',component:MemberContainer},
      {path:'/shopcar',component:shopcarContainer},
      {path:'/search',component:SearchContainer},
      {path:'/home/newlist',component:NewsList},
      {path:'/home/newsinfo/:id',component:NewsInfo},
      {path:'/home/photolist',component:PhotoList},
      {path:'/home/photoinfo/:id',component:photoinfo},
      {path:'/home/goodlist',component:Goodlist},
      {path:'/home/goodsinfo/:id',component:GoodsInfo}

    ],
  linkActiveClass: 'mui-active'
})

export default router