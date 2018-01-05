<template>
    <div>
       <div id="login">
          <div class="pictop">
             <img width="100%" height="100%" src="../../style/usage/img/2.jpg"/>
          </div>
          <div class="infobox">
              <div class="choose">
                <router-link :to="{name:'yanzhengma'}"  class="yanzhengma">
                    <span>验证码登录</span>
                </router-link>
                <router-link :to="{name:'password'}" class="password">
                    <span>密码登录</span>
                </router-link>

                <router-view></router-view>
              </div> 
          </div>
          <div class="other"></div>
        </div>        
    </div>
</template>


<script>
   
    export default {
        name:'login',
        data:function(){
            return{
                 isShow:true
            }
           
        }
           
    }
  
</script>


<style  scoped>
 
	
</style>
