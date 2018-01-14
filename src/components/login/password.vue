<template>
    <div>
       <div id="yanzhengma">
            <form @submit.prevent = 'login(phone,password)'>
                <p class="pnum"><i class="iconfont number">&#xe627;</i> <input type="text" v-model = "phone" id="num" placeholder="手机号"></p>
                <p class="pyan"><i class="iconfont pwd">&#xe60a;</i><input type="text" v-model = "password" id="yan" placeholder="密码"></p>
                <p class="pbtn"><input type="submit" id="btn" value="按钮"/></p>
            </form> 
            <p class="forget"> <a href="#">忘记密码？</a></p> 
        </div>  
             
    </div>
</template>


<script>
import bus from '../../store/modules/bus.js'
import axios from 'axios'
import {Toast} from 'mint-ui'
    export default {
        name:'password',
        data(){
            return {
                phone:'',
                password:'',
                LoginOnData:''
            }
        },
        methods:{
            login(phone,password){
            let that =this
            if(phone==''||password==''){
                
                return false
            }
            axios.get('/api/common/pwd_login').then((res)=>{
               //console.log(res.data.msg);
                if(res.data.success!=true) {
                    Toast('登陆失败')
                    return false;
                }
                Toast('登陆成功')

                let data = {phone:that.phone,password:that.password}
                console.log(data)
                that.LoginOnData =data
                //that.LoginOnData = res.data.data
                console.log(that.LoginOnData,66666666666666)
                //调用vuex方法 创建本地存储
                that.$store.commit('change_type',data)    
               // that.$router.replace({name:'mine'})  //跳转到个人中心页面     
            })
                bus.$emit("loginondata",this.LoginOnData)
        },
    }
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
