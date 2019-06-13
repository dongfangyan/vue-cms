<template>
    <div class="shopcar-container">
     <div class="goods-list">
         
            <!---商品列表区---->
         <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch style="width:60px" v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img src="https://img12.360buyimg.com/n1/s450x450_jfs/t1/16937/25/7040/155249/5c676c66E182b6971/155ea749513acb33.jpg" alt="">
                        <div class="info">
                            <h1> {{item.titl}}</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#" @click="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>

            <!---结算区-->
          <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
					<div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="red">0</span>件,总价:<span class="red">￥0</span></p>
                    </div>
                    <mt-button type="danger" >去结算</mt-button>
				</div>
				</div>
                <p>{{$store.getters.getGoodsSelected}}</p>
			</div>

     </div>

    </div>
</template>
<script>
 import numbox from '../subcomponents/shopcar_numbox.vue'
 export default{
     data(){
         return{
             goodslist:[]
         };
     },
     created(){
         this.getGoodsList();
     },
     methods:{
          getGoodsList(){
              console.log(JSON.parse(localStorage.getItem('car')))
              this.goodslist=JSON.parse(localStorage.getItem('car'))
            
          },
          remove(id,index){
             this.goodslist.splice(index,1)
            this.$store.commit('removeFormcar',id)
          },
          selectedChanged(id,val){
            
              this.$store.commit('updateGoodsSelected',{id:id,selected:val})
          }
     },
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
       .mui-card-content-inner{
           display: flex;

       }
     img{
         width: 60px;
         height: 60px;
     }  
     h1{
         font-size: 13px;
     }
     .info{
         
         display: flex;
         flex-direction:column;
         justify-content:space-between; 
       p{
            font-size: 13px;
       }
         .price{
             color: red;
            font-weight: bold
         }
     }
     .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
     }
     .red{
        color: red;
        font-weight: 600;
     }
   }
</style>
