 <template>
 <div>
 <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in  lunboList" :key="item.id">
        <img :src="item.imgSrc">
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>    
<script>
export default {
    props:["lunboList"]
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

