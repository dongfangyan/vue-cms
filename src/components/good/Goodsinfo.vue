<template>
  <div class="good-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner clear-padding">
          <!---轮播图区域--->
      
      <swiper :lunboList="lunbotuList"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{getGoodsInfo.item}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
          </p>
          <p>购买数量：
         <numbox></numbox>
				
          </p>

        </div>
           <mt-button type="primary" size="small">立即购买</mt-button>
           <mt-button type="danger" size="small">加入购物车</mt-button>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：</p>
          <p>上架时间：</p>
          </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>

         <mt-button type="danger" size="large"  plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper.vue';
import numbox from '../subcomponents/goodsinfo_box.vue'
export default {
  data() {
    return {
      id:this.$route.params.id,
      lunbotuList: [],
      getGoodsInfo: {}
    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfodata();
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
            this.lunbotuList= result.body.data.swiperList;
          } else {
            Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
    },
     getGoodsInfodata() { 
      this.$http
        .get(
          "https://easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/getinfo?id="+this.id)
        .then(result => {
          console.log(result.body.data);

          if (result.body.code === 0) {
            this.getGoodsInfo= result.body.data;
          } else {
            Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
    }
  } ,
  components:{
    swiper,
    numbox
  }
};
</script>
 <style lang="scss" scoped>
.good-container {
  background-color: #eee;
  padding-top: 1px;
  .clear-padding{
	  padding: 0;
  }
  .mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.now_price{
  color: red;
}

}
.mui-card-footer{
  display:block;
  button{
    margin:10px 0px;
  }
}
</style>




