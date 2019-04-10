<template>
    <div class="newinfo-container">
        <h3 class="titl">{{newsinfo.videoTitle}}</h3>
        <p class="sub_tit">
            
            <span>作者：{{newsinfo.author}}</span>
            <span>发表时间：{{newsinfo.date}}</span>
            <span>点击:{{newsinfo.playCount}}次</span>
        </p>
        <hr>
       <div class="content">
           
             
             <div class="det_pic">
						  <img src="../../img/blog-img1.jpg" alt="">
					</div>
            <div class="det_text">
						<p class="para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
						<p class="para">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics</p>
					
					</div>
            
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

          if (result.body.code===0) {
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
         line-height: 30px;
           font-size: 18px;
       
          font-family:'song';
           text-align: center;
           margin: 5px;
          color: #9b59b6;
       }
       .sub_tit{
         font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 12px;
           margin: 5px;
           color:#666;
           display: flex;
            justify-content:space-between;
           

       }
       .content{
         margin: 2px 4px;;
           img{
           width: 100%;
           border-radius: 5px;
           }
           p.para{
             padding: 0 5px;
	         font-size: 0.9em;
	         color: #5A5E68;
	         line-height: 1.8em;
           font-family:'Open Sans', sans-serif;
	         margin-bottom: 10px;
          }
      
       }
     }
</style>
