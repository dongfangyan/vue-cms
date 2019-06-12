<template>
  <div class="good-container">
    <transition 
       @before-enter="beforeEnter"
       @enter="enter"
       @after-enter="afterEnter"
       >
      <div class="ball" v-show="ballFlag" ref="ball" ></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner clear-padding">
          <!---轮播图区域--->
          <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header"> {{getinfodata.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">市场价：<del>￥{{getinfodata.market_price}}</del>&nbsp;&nbsp;
             销售价： <span class="now_price">￥{{getinfodata.sell_price}}</span>
          </p>
          <p>购买数量：<numbox  @getcount="getSelectedCount" :max="getinfodata.stock_quantity"></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar()">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ getinfodata.goods_no }}</p>
          <p>库存情况：{{ getinfodata.stock_quantity }}件</p>
          <p>上架时间：{{ getinfodata.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
          <mt-button type="primary" size="large" @click="getDesc(id,getinfodata.title)" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" @click="getComment(id,getinfodata.title)" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
 import swiper from "../subcomponents/swiper.vue"
import numbox from  "../subcomponents/goodsinfo_numbox.vue"
export default {
  data() {
    return {
    id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data , 方便后期调用
    lunbotuList: [],
    getinfodata: {},
    ballFlag:false,
    getSelectednum:1
    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo();
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
            this.lunbotuList = result.body.data.swiperList;
          } else {
            Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
    },
    getGoodsInfo(){
       this.$http.get("https://www.easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/getinfo?id="+this.id)
        .then(result => {
          console.log(result.body.data);

          if (result.body.status === 0) {
            this.getinfodata = result.body.data;
          } else {
            Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
    },
    getDesc(id,title){
     
        this.$router.push({name:"goodsdesc",params:{title:title}});
        
    },
     getComment(id,title){
        this.$router.push({name:"goodscomment",params:{title:title}});
    },
    addToShopCar(){
      this.ballFlag=!this.ballFlag;
      var goodsinfo={id:this.id,count:this.getSelectednum,price:this.getinfodata.sell_price,selected:true}
      this.$store.commit('addToCar',goodsinfo)
    },
    beforeEnter(el){
      el.style.transform="translate(0,0)";
    },
    enter(el,done){
      el.offsetWidth;
      const ballPosition=this.$refs.ball.getBoundingClientRect();
      const badgePosition=document.getElementById('badge').getBoundingClientRect();
      const xDist=badgePosition.left-ballPosition.left;
      const yDist=badgePosition.top-ballPosition.top;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)"
      done()
     
    },
    afterEnter(el){
      this.ballFlag=!this.ballFlag;

    },
    getSelectedCount(count){
     
          this.getSelectednum=count;
           //alert("父组件拿到的数量值为： " + this.getSelectednum);
        
    }
  },
  components: {
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
   .now_price{
     color: red;
     font-size: 16px;
     font-weight: bold;
   }
  .mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-card-footer{
  display: block;
  button{
    margin: 10px 0px;
  }
}
.ball{
  width:15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
 position:absolute;
 z-index: 100;
 top:362px;
 left: 146px;

}
}
</style>




