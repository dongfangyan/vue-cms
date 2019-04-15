<template>
  <div class="newinfo-container">
    <h3 class="titl">{{photoinfo.title}}</h3>
    <p class="sub_tit">
     
      <span>发表时间：{{photoinfo.add_time}}</span>
      <span>点击:{{photoinfo.click}}次</span>
    </p>
    <hr>
    
    <!--缩略图-->
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <!--photocontent-->
    <div class="content">
       <p class="para"> {{photoinfo.content}}</p>
      <!----评论子组件------>
        <comment-box></comment-box>
    </div>
  </div>
</template>
<script>
    import comment from '../subcomponents/comment.vue'
    import { Toast } from "mint-ui";
    export default{
        data(){
            return{
             id:this.$route.params.id,
              photoinfo:{},
              slide1: [],
              list:[]

            }
        },
           created() {
           this.getPhotoInfo();
           this.getThumbs();
          },
          mounted() {
   

    // 有效
    setTimeout(() => {
      this.init()
    }, 1000)
   
   
  },
        methods:{
            getPhotoInfo(){
                this.$http.get( "https://www.easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/api/getimageInfo?id="+this.id)
        .then(result => {
          console.log(result.body);

          if (result.body.status===0) {
            this.photoinfo = result.body.data;
          } else {
             Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
            },
            getThumbs(){
             this.$http.get("https://www.easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/api/sub_img")
        .then(result => {
          console.log(result.body);

          if (result.body.status===0) {
            this.list=result.body.data;
            console.log(this.list);
         this.list.forEach(function(item){
            item.w = 600;
           item.h = 400;
          });
          // 把完整的数据保存到 list 中
          this.slide1 = result.body.data;
          console.log(this.slide1);
          } else {
             Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
            },

         handleClose () {
        console.log('close event')
      },
      init(){
      var div=document.getElementsByClassName('my-gallery')[0];
       var figure=div.getElementsByTagName("figure");
      

      var img=div.getElementsByTagName("img");
      console.log(img);
      for(var i = 0; i< img.length;i++){
          img[i].setAttribute("style"," width: 100%; box-shadow: 0 0 8px #999;") ;
}
      
      }
        },
        components:{
       "comment-box" : comment
    },
    
    }


</script>

<style lang="scss" scoped>
.newinfo-container {
  padding: 4px;
  .titl {
    line-height: 30px;
    font-size: 18px;

    font-family: "song";
    text-align: center;
    margin: 5px;
    color: #9b59b6;
  }
  
  .sub_tit {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 12px;
    margin: 5px;
    color: #666;
    display: flex;
    justify-content: space-between;
  }
  .content {
    margin: 2px 4px;
   
    p.para {
      padding: 0 5px;
      font-size: 13px;
      color: #5a5e68;
      line-height: 1.8em;
      font-family: "Open Sans", sans-serif;
      margin-bottom: 10px;
    }
  }

  
  
}
.imgs{
      width: 100%;
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
</style>
