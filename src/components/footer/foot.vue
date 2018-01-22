

<template>
    <div class="foot">
        <ul class="aa">

            <router-link tag='li' class="aa":to=path[0]>
            	<!--<i class="bg1"></i>-->
                <i class="iconfont homeicon">&#xe61a;</i>
              <!--  <i class="iconfont homeicon"  v-show="!isShow">&#xe60d;</i>-->
                <b>首页</b>
            </router-link>   
            <router-link  @click.native='clicklogin'   tag='li' class="bb" :to=path[1]>
                <i class="iconfont homeicon">&#xe60d;</i>
                <b>消息</b>
            </router-link > 
            <router-link  @click.native='clicklogin' tag='li' class="cc" :to=path[2]>
                <i class="iconfont homeicon">&#xe608;</i>
                <b>订单</b>
            </router-link>

             <router-link  @click.native='clicklogin' tag='li' class="dd" :to=path[4]>
                <i class="iconfont homeicon">&#xe619;</i>
                <b>我的</b>
            </router-link>
           
        </ul>
    </div>
</template>


<script>

    import {mapState} from 'vuex'
    export default {
        name:'foot',
        data:function(){
           return {
           	  
           	   path:[{name:'mains'},{name:'tracks'},{name:'or1'},{name:'password'},{name:'mine'}],
           	   isShow:false
           }
           
        },
        computed:{
            ...mapState(['LoginOnData'])
        },
        methods:{
             clicklogin(){
                //  alert('1')
                 console.log(this.LoginOnData)
                if(!this.LoginOnData){
                    this.$router.push({name:'nologin'})
                }else{
                   return ;
                }
             },
             kk(){
             	//alert('1')
             	this.isShow = true
             }
             
        },
        mounted(){
         
        }
    }
 
</script>


<style scoped>
	/*.{
		color:#333333;
	}*/
   .router-link-active{
   	color: #017c84 !important;
   }
  /*.bg1{
  	width:0.42rem ;
  	height: 0.42rem;
  	background: url(../../../static/img/foot.png)no-repeat;
  	background-position-x: 4px;
  	background-position-y: 6px;
  	background-size: 5rem;
  }*/
</style>
