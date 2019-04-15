<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in  cates"
            :key="item.id"
            :class="['mui-control-item ',item.id==0?'mui-active':'']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id">
      <li v-for="item in list" :key="item.id">
        <img class="img" v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">
                {{item.title}}
					</h1>
					<div class="info-body">
                   {{item.zhaiyao}}
					</div>
				</div>
      </li>
      </router-link >
    </ul>
  </div>
</template>
<script>
import mui from "../../../lib/mui-master/dist/js/mui.js";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCategory(), this.getPhotoListByCateId(-1);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http
        .get(
          "https://www.easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/api/getimgcategory"
        )
        .then(
          result => {
            console.log(result.body.data);

            if (result.body.status === 0) {
              result.body.data.message.unshift({ title: "全部", id: -1 });
              this.cates = result.body.data.message;
            } else {
              Toast("获取数据失败");
            }
          },
          function() {
            Toast("获取数据失败");
          }
        );
    },
    getPhotoListByCateId(cateId) {
      this.$http
        .get(
          "https://www.easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/api/getimages?id=" +
            cateId
        )
        .then(
          result => {
            console.log(result);

            if (result.body.code === 0) {
              this.list = result.body.data.photos;
            } else {
              Toast("获取数据失败");
            }
          },
          function() {
            Toast("获取数据失败");
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
	list-style: none;
   margin: 0;
	 padding: 10px;
	 padding-bottom: 0;
  li {
    background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 6px #999;
		position: relative;
		.img {
      width: 100%;
      vertical-align: middle;
    }
   img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info{
	background: #80808073;
	color: white;
	position: absolute;
	bottom: 0;
		text-align: left;
	  width: 100%;
.info-title{
  font-size: 16px;
}
.info-body{
	font-size: 13px;

	padding:5px 3px;
}
}

  }
}
</style>
