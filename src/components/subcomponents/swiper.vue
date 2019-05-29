<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in  lunbotuList" :key="item.id">
        <img :src="item.imgSrc">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    props:['lunbotuList', "isfull"]
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mint-swipe-item:nth-child(1) {
  background-color: #fff;
}
.mint-swipe-item:nth-child(2) {
  background-color: yellowgreen;
}


</style>


