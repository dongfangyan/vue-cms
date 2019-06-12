<template>
    <div class="shopcar-container">
     <div class="goods-list">
         
            <!---商品列表区---->
         <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch ></mt-switch>
                        <img src="https://img12.360buyimg.com/n1/s450x450_jfs/t1/16937/25/7040/155249/5c676c66E182b6971/155ea749513acb33.jpg" alt="">
                        <div class="info">
                            <h1> Xiaomi/小米 小米8 小米8</h1>
                            <p>
                                <span class="price">$2199</span>
                                <numbox></numbox>
                                <a href="#">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>

            <!---结算区-->
          <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
			</div>

     </div>

    </div>
</template>
<script>
 import numbox from '../subcomponents/shopcar_numbox.vue'
 export default{
     components:{
         numbox
     }
 }
</script>

<style lang="scss" scoped>
   .shopcar-container{
      background-color: #eee; 
      overflow: hidden;
   }
   .goods-list{
     img{
         width: 60px;
         height: 60px;
     }  
     h1{
         font-size: 14px;
     }
     .info{
         .price{
             color: red;
         }
     }
   }
</style>
