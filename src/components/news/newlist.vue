<template>
    <div>
      <ul class="mui-table-view">
				<li  v-for="item in   videosList" :key="item.id" class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.imgSrc">
						<div class="mui-media-body">
							<h1>{{item.desc}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.commentCount}}</span>
                                <span>点击：{{item.playCount}}</span>
                            </p>
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
         export default {
  data() {
    return {
      videosList: []
    };
  },
  created() {
    this.getvideosList();
  },
  methods: {
    getvideosList() {
      this.$http
        .get(
          "https://easy-mock.com/mock/5c5d5974954204466826c224/example/videosList"
        )
        .then(result => {
          console.log(result.status);

          if (result.status ===200) {
            this.videosList = result.body.data.videosList;
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
.mui-media-body{

    h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        font-size: 12px;
        color:rgb(117, 117, 255);
        display: flex;
        justify-content:space-between;
        span{padding-top:5px ;}
    }
  
     
}
 
</style>
