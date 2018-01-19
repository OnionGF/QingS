<template>
    <div id='contain'>
           <!-- <i class="iconfont back posback" onclick="javascript:history.back(0);">&#xe624;</i>       -->
       <div id="login">    
            <p class="pnum"><i class="iconfont number">&#xe627;</i> <input type="text" v-model="user_info.name" id="num" placeholder="手机号"></p>
            <p class="pyan"><i class="iconfont pwd">&#xe60a;</i><input type="password" v-model="user_info.pass" id="yan" placeholder="验证码"><input @click='send' type="button" class="huo" value="获取验证码"/></p>
            <p class="text">注册代表您已同意《青宿服务协议》和《隐私条款》</p>
            <p class="pbtn"><input @click='login(user_info)' type="button" id="btn" value="注册并登录"/></p>
            <!-- <p class="pbtn"><input type="button" id="btn" value="登录"/></p> -->
        </div>        
    </div>
</template>


<script>


     import {mapActions,mapState} from 'vuex'
    export default {
        name:'login', 
        data:function(){
            return {
                
            }
        }, 
        computed:{
            ...mapState(['user_info'])
        },
        methods:{
            ...mapActions(['send','login'])

        },
        mounted(){

        }
    }
  
</script>


 <style lang="scss" scoped>
#contain{
    background:url('/static/img/login.jpg') no-repeat center;
    background-size:contain;
    width:100%;
    height:100%;
    #login{
    width:80%;
    height:2.6rem;
    position:fixed;
    left:10%;
    top:40%;
    .pnum{
       margin-left: 0.03rem;
       margin-bottom: 0.17rem;
         border-bottom:1px solid #dcdee0;
    } 
   
    #num,#pass,#btn{
         width: 2.68rem; 
         height: 0.23rem; 
         border: none;
         outline: none; 
       }
    #btn{
        background: #017c84;
    }
   .pyan{
        margin-bottom: 0.17rem;
       border-bottom:1px solid #dcdee0;
      
   }
   .text{
       font-size:0.12rem;
       color:#999;
   }
   #yan{
       border:none;
   }
   .pyan #pass{
        width: 2.68rem;
        color: #c0c3c8;
   }
   .pyan .huo{
        display: inline-block;
         color: #fff;
         margin-bottom: 10px;
         border-radius:0.05rem;
         background: #017c84;
         border: none;
       
   }

   .pbtn{
        width: 2.68rem;
        margin-bottom: 0.17rem; 
        color: #ffffff;
        background: #f0f0f0;
        margin-left: 0.15rem;
   }
 
   .pbtn #btn{
         height: 0.44rem;
         border-radius: 8px ;
   }
}
}

   
	
</style>
