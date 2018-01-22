<template>
    <div>
        <header class="mint-header">
            <div class="mint-header-button is-left">
                <a href="#/" class="router-link-active">
                <button  class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon"><i class="mintui mintui-back"></i>
                    </span> 
                    <a href="#/password" class="mint-button-text">返回</a>
                </button>
                </a>
            </div>
            <h1 class="mint-header-title">设置新密码</h1>
            <div class="mint-header-button is-right">
                <button class="mint-button mint-button--default mint-button--normal">
                      <span class="mint-button-icon">
                      </span> <label class="mint-button-text"></label>
                      
                </button>
            </div>
        </header>
         <div id="yanzhengma">        
		 <p class="pnum"><i class="iconfont number">&#xe627;</i> <input type="text" id="num" v-model='userName' placeholder="手机号"></p>
         <p class="pyan"><i class="iconfont pwd">&#xe60a;</i><input type="text"   v-model='word'  id="yan" placeholder="验证码"><input type="button"  @click=login({phone:userName})  class="huo" value="获取验证码"/></p>
		 <p class="pnum"><i class="iconfont number">&#xe60a;</i> <input type="text" id="num" v-model='password' placeholder="请输入6-16位密码"></p>
         <p class="pbtn"><input @click="forget({phone:userName,code:word,password:password})" type="button" id="btn" value="确定"/></p>
         
        </div>    
    </div>
</template>


<script>
    import {mapActions} from 'vuex'
    export default {
        name:'forget',
        data(){
            return {
                userName:'',
                word:'',
                password:''
            }
        },
        methods:{
            ...mapActions(['login','forget'])
          
        }
           
    }
  
</script>


<style  scoped>
   .mint-header{
       background:#017c84
   }
	 #yanzhengma{
       /* width: 80%; */
       /* height: 2.18rem; */
       /* position: absolute; */

       flex-flow: column;
       padding-top: 20%;
       padding-left: 10%;

       
   }
   .pnum{
       margin-left: 0.03rem;
       margin-bottom: 0.17rem;
   } 
   
   #num,#yan,#btn{
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
   .pyan #yan{
        width: 1.9rem;
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
	.tip{
         margin-left: 0.18rem; 
         color: #b5b9be;
         margin-top: -0.1rem;
    }
</style>
