<template>
  <div class="good-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner clear-padding">
          <!---轮播图区域--->
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in  lunboList" :key="item.id">
              <img :src="item.imgSrc">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunboList: []
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
            this.lunboList = result.body.data.swiperList;
          } else {
            Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
    }
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
}
</style>




