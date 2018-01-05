<template>
    <div>
       <div id="yanzhengma">
		 <p class="pnum"><i class="iconfont number">&#xe627;</i> <input type="text" id="num" placeholder="国内手机号/邮箱/用户名"></p>
         <p class="pyan"><i class="iconfont pwd">&#xe60a;</i><input type="text" id="yan" placeholder="密码"></p>
         <p class="pbtn"><input type="button" id="btn" value="按钮"/></p>
         <p class="forget"> <a href="#">忘记密码？</a></p>
        </div>        
    </div>
</template>


<script>

    export default {
        name:'yanzhengma',
      
    }
  
</script>


<style  scoped>
   #yanzhengma{
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
   
   #num,#yan,#btn{
         width: 2.68rem; 
         height: 0.23rem; 
         border: none;
         border-bottom: 1px solid #dcdee0;
         outline: none;
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
	.forget{
        margin-left: 2rem;
    }
</style>
