<template>
    <div>
       <div id="password"> 
            <i class="iconfont back posback" onclick="javascript:history.back(0);">&#xe624;</i>
            <form @submit.prevent = 'login(phone,password)'>
                <p class="pnum"><i class="iconfont number">&#xe627;</i> <input type="text" v-model = "phone" id="num" placeholder="手机号"></p>
                <p class="pyan"><i class="iconfont pwd">&#xe60a;</i><input type="password" v-model = "password" id="pass" placeholder="密码"></p>
                <p class="pbtn"><input @click=register({userName:phone,password:password}) type="button" id="btn" value="登录"/></p>
            </form> 
            <div @click="busEvent">点我测试时间总线</div>
            <p class="forget"> <a href="#/forget">忘记密码？</a></p> 
        </div>  
             
    </div>
</template>


<script>
import bus from '../../store/modules/bus.js'
import axios from 'axios'
import {Toast} from 'mint-ui'
import {mapActions} from 'vuex'


export default {
    name:'password1',
    data(){
        return {
            phone:'',
            password:'',
            LoginOnData:''
        }
    },
    methods:{
        ...mapActions(['register']) ,
        busEvent(){
            console.log('调用事件总线')
            bus.$emit('loginondata')
        }
    }
}
  
</script>


<style  scoped>
   #password{
       width: 3.35rem;
       height: 2.18rem;
       position: absolute;
       top:0.64rem;
       left:0;
       flex-flow: column;
       padding-top: 0.2rem;
       padding-left: 0.2rem;
       /* background: yellow;  */
       
   }
   .pnum{
       margin-left: 0.03rem;
       margin-bottom: 0.17rem;
   } 
   
   #num,#pass,#btn{
         width: 2.68rem; 
         height: 0.23rem; 
         border: none;
         border-bottom: 1px solid #dcdee0;
         outline: none; 
       }
    #btn{
        background: #017c84;
    }
   .pyan{
        margin-bottom: 0.17rem;
      
   }
   .pyan #pass{
        width: 2.68rem;
        color: #c0c3c8;
   }
   .pyan .huo{
       display: inline-block;
         color: #c0c3c8;
         margin-bottom: 10px;
         background: #fff;
         border: none;
         border-bottom: 1px solid #dcdee0;
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
	.forget{
        margin-left: 2rem;
    }
</style>
