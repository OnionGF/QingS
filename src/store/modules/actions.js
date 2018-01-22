
import getpos from '../../modules/position.js'
import { Toast } from 'mint-ui';
import axios from "axios"
import router from '../../router'
const  actions = {

    //定位搜索框
    getPosition({ commit }){    
          setTimeout(() => {             
            	getpos((info)=>{
                    commit('getPosi',info)
                 })
         }, 1000);
    },
    getMes({commit},mes){
        console.log(mes)
        $.post("/apiuser/selectHouse",mes,function(data) {
            if(data.result==1){
                //成功
                console.log("成功")  
                
            } else {
                console.log("失败");
                router.push({path:'mysearch'})
            }
        });
        commit('getMes',mes.place)
    },
   
    startDate({commit},start){
        setTimeout(() => {             
            let result ='ok'
            if(result=='ok'){
                commit('startDate',start)
            }
        }, 1000);
    },
    endDate({commit},end){     
        setTimeout(() => {             
            let result ='ok'
            if(result=='ok'){
                commit('endDate',end)
            }
        }, 1000);
    },
    
    //发送验证码
    login({commit},user_info){
        console.log(user_info)
        axios.post('/dola/api/user/send_login_code.html',user_info).then(({data})=>{
            console.log(data)
            if(data.result){
                Toast('验证码发送成功！');
            }else{
                Toast(data.error);               
            }
        })
    },
    //验证码登录
    denglu({commit},user_info){
        axios.post('/dola/api/user/code_login.html',user_info).then(({data})=>{
            console.log(data);
            if(data.success){
                Toast('登录成功');
                commit('denglu',data)
                sessionStorage.setItem("key", data.result.ticket);
                router.push({path:'/mine'});
            }else{
                Toast(data.error);                
            }   

        })
    },
    //密码登录
    register({commit},user_info){
        console.log(user_info)
        axios.post('/dola/api/user/pwd_login.html',user_info).then(({data})=>{
            console.log(data)
            if(data.success){
                console.log(data.result.ticket)
                localStorage.setItem("key", data.result.ticket);
                Toast('登录成功');
                commit('register',data)
                router.push({path:'/mine'});
            }else{
                Toast(data.error);
            }
        })
    },
    //退出登录
    exitLogin({commit}){
        console.log(['退出'])
        var value = localStorage.getItem("key"); 
        console.log(value)
        axios.post('/dola/api/user/logout.html',value).then(({data})=>{          
            console.log(data);
            commit('exitLogin',data)
        })
    },
    //提交建议
    submitSuggest(){
        router.push({path:'/mine'});    		                   
        Toast({
            message: '提交成功',
            iconClass: 'icon icon-success'
          });
        console.log('132')
    },
    //提交订单
    subOrder(){
        Toast('提交成功');
        router.push({path:'/mine'});
    },
    //忘记密码
    forget({commit},user_info){
        axios.post('/dola/api/user/forget_pwd.html',user_info).then(({data})=>{          
            console.log(data);
            if(data.result){
                Toast('修改成功');                
                router.push({path:'/password'}); 
            }else{
                Toast(data.error);
            }
        })
    },
    //修改昵称
    change({commit},user_info){
        console.log(user_info)
        axios.post('/dola/api/user/update.html',user_info).then(({data})=>{          
            console.log(data);
            if(data.result){
                Toast('修改成功');                
                router.push({path:'/updateinfo'}); 
                commit('change',user_info)
            }else{
                Toast(data.error);
            }
        })
    },
    //收藏
    love(user_info){
        // alert(user_info.houseId)
        axios.post('/dola/api/house/addCollection.html',{houseId:1}).then(({data})=>{          
            console.log(data);
            if(data.result){
                Toast(data.message);                
            }else{
                Toast(data.message);
            }
        })
    }

}

export default actions