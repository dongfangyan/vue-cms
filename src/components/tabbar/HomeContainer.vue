<template>
  <div>
    <!---轮播图区域--->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
    <!--九宫图-->
 
    <ul class="mui-table-view mui-grid-view mui-grid-9">
                   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                     <router-link to="/home/newlist">
		                    <img src="../../img/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  to="/home/photolist">
		                     <img src="../../img/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/goodlist">
		                    <img src="../../img/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../img/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                     <img src="../../img/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                     <img src="../../img/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		            
	 </ul> 
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper.vue'
export default {
  data() {
    return {
      lunbotuList: [] 
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get(
          "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperlist"
        )
        .then(result => {
          console.log(result.body.data);

          if (result.body.code === 0) {
            this.lunbotuList  = result.body.data.swiperList;
          } else {
            Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="scss" scoped>


.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: 0;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
font-size: 13px;
}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
    
}

</style>

