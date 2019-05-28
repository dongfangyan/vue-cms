<template>
    <div class="goodsdesc-container">
        <h3>{{title}}</h3>
         <hr>
         <div class="content">
         <div class="content_text" v-html="info.content">
            
          
         </div>
          <img :src="info.img_url" alt="">  
         </div>
    </div>
   
</template>
<script>
export default {
    data(){
        return{
            info:{},
            id: this.$route.params.id,
            title:this.$route.params.title
        };
    },
      created() {
    this.getGoodsDesc()
    console.log(this.$route.params.id)
  },
    methods:{
        getGoodsDesc(){
            this.$http.get("https://www.easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/goods/getdesc?id="+this.id)
        .then(result => {
          console.log(result.body.data);

          if (result.body.status === 0) {
            this.info = result.body.data;
          } else {
            Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
        }
    }
}
</script>
<style lang="scss" >
.goodsdesc-container{
    padding: 4px;
    h3{
        font-size: 16px;
        color: #137ace;
        text-align: center;
        margin: 15px 0;
    }
    .content{
        img{
            width:100%;
        }
    }
}
</style>

