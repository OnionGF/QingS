<template>
    <div>
       <div id="login">
           <a class="iconfont back posback" @click="back()">&#xe624;</a>
            <div class="pictop">
                <img width="100%" height="100%" src="../../style/usage/img/2.jpg"/>
            </div>
            <div class="big">
                <div class="infobox">
                    <div class="choose">
                        <router-link to="yanzhengma"  class="yanzhengma">
                            <span>验证码登录</span>
                        </router-link>
                        <router-link to="password" class="password">
                            <span>密码登录</span>
                        </router-link>
                        <router-view></router-view>
                    </div> 
                </div>
                <div class="other"></div>
            </div>
        </div>        
    </div>
</template>


<script>
   
    export default {
        name:'login',
        methods:{
            back(){
                console.log('回到首页')
                this.$router.push({path:'login'})
            }
        }
           
    }
  
</script>


<style  scoped>
    .router-link-active{
        color:aqua
    }
	
</style>
