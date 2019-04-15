<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容(z最多20个字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <ul class="mui-table-view">
      <li v-for="item in commentsList" :key="item.id" class="mui-table-view-cell mui-media">
        <img class="mui-media-object mui-pull-left" :src="item.userIconSrc">
        <div class="mui-media-body">
          <div class="title">
            <span>{{item.username}}</span>
            <span>发表时间：{{item.commentDate | dateFormat}}</span>
          </div>

          <p class="mui-ellipsis">{{item.commentInfo}}</p>
        </div>
      </li>
    </ul>
    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      commentsList: [],
      page:0,
      msg:[]

    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get(
          "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=" +
            this.id
        )
        .then(
          result => {
            console.log(result);

            if (result.status === 200) {
              this.commentsList = result.body.data.commentData.commentList;
            } else {
              Toast("获取数据失败");
            }
          },
          function() {
            Toast("获取数据失败");
          }
        );
    },
    getmore(){
         this.$http.post("https://easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/fenye?page=" +
            this.page
        )
        .then(
          result => {
            console.log(result.body.data);

            if (result.body.success === 0) {
              this.commentsList =this.commentsList.concat(result.body.data);
               this.page=this.page+1;
            } else {
              Toast("获取数据失败");
            }
          },
          function() {
            Toast("获取数据失败");
          }
        );

    },
    
          postComment(){
              if(this.msg.trim().length===0){
                  return Toast("评论内容不能为空！");
              }
                 this.$http.post('https://easy-mock.com/mock/5cacbc53d55c5f6c3b16add9/vue-cm/fenye',{id:0,commentDate:this.msg.trim()})
        .then(
          result => {
            console.log(result);

            if (result.body.success === 0) {
              var cmt={
                  userIconSrc:'https://goss2.veer.com/creative/vcg/veer/612/veer-133071017.jpg',
                  username:"匿名用户",
                  commentDate:Date.now(),
                  commentInfo:this.msg.trim()
              }
              this.commentsList.unshift(cmt);
              this.msg=''
            } else {
              Toast("获取数据失败");
           
          }
          }
          )
          }
  }
         
          
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
.mui-table-view{
    .title{
        display: flex;
        justify-content:space-between;
        color: #666;
        font-size: 12px;
    }
  .mui-ellipsis {
    font-size: 14px;
    color: black;
  }
}
}
</style>
