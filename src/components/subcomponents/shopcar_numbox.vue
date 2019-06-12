<template>
  <div class="mui-numbox" data-numbox-min="1"  data-numbox-step='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
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
   
    }   
  },
 props: ["max"],
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
<style lang="scss">




</style>




