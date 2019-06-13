<template>
  <div class="mui-numbox" data-numbox-min="1"  data-numbox-step='1' style="height:25px;width:50%" >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChanged" ref="numbox">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
   <!--分析：子组件什么时候把数据传递给父组件-->

</template>
<script>
import mui from "../../../lib/mui-master/dist/js/mui.js";
export default {
    mounted(){
       mui(".mui-numbox").numbox();
    },
  methods: {
    countChanged() {
      this.$store.commit("updateGoodsInfo",{
        id:this.goodsid,
        count:this.$refs.numbox.value
      }

      )
    }   
  },
 props: ["initCount","goodsid"],
  watch: {
    // 属性监听
    max: function(newVal, oldVal) {
      console.log(newVal)
       //使用 JS API 设置 numbox 的最大值
       mui(".mui-numbox").numbox().setOption("max", newVal);
    
     }
  }
}
</script>
<style lang="scss" scoped>
 .mui-numbox{
   padding: 0 15%;
  input{
    font-size: 13px;
  }
 .mui-btn-numbox-plus{
     width: 30%;
   }
   .mui-btn-numbox-minus{
     width: 30%;
   }
 }



</style>




