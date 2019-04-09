<template>
    <div class="newinfo-container">
        <h3 class="titl">{{newsinfo.videoTitle}}</h3>
        <p class="sub_tit">
            <span>发表时间：{{newsinfo.date}}</span>
            <span>点击:{{newsinfo.playCount}}次</span>
        </p>
        <hr>
       <div class="content">
           
             <p>{{newsinfo.author}}</p>
             <p><img src="../../img/1.jpg" alt=""></p>
            
       </div>
       <comment-box></comment-box>
    </div>
     
</template>
<script>
import { Toast } from "mint-ui";
import comment from '../subcomponents/comment.vue'
    export default{
        data(){
            return{
                id:this.$route.params.id,
                newsinfo:{}

            }
        },
         created() {
    this.getvideo();
  },
        methods: {
    getvideo() {
      this.$http
        .get(
          "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id="+this.id
        )
        .then(result => {
          console.log(result.body.data.videoInfo);

          if (result.status ===200) {
            this.newsinfo = result.body.data.videoInfo;
          } else {
             Toast("获取数据失败");
          }
        },function(){
                   Toast("获取数据失败");
                });
    }
  },
  components:{
       "comment-box" : comment
    }
    }
    
</script>

<style lang="scss" scoped >
     .newinfo-container{
       padding: 4px;
       .titl{
           font-size: 14px;
           text-align: center;
           margin: 5px;
           color: red;
       }
       .sub_tit{
            font-size: 12px;
         
           margin: 5px;
           color: blue;
           display: flex;
            justify-content:space-between;
           

       }
       .content{
           img{
           width: 100%;
           }
       }
     }
</style>
