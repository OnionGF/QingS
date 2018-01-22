
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
        // setTimeout(() => {             
        //    if(user_info.name=='123'&&user_info.pass=='456'){
        //     //    alert('登录成功')
        //     router.push({path:'/mine'});
        //     commit('login',user_info)	    		                   
        //     Toast({
        //         message: '登陆成功',
        //         iconClass: 'icon icon-success'
        //       });
               
        //     }else{
  
        //     // alert('密码错误')
        //      Toast('验证码错误');
               
        //     }         
           
        // }, 1000);

    },
    //验证码登录
    denglu({commit},user_info){
        axios.post('/dola/api/user/code_login.html',user_info).then(({data})=>{
            console.log(data);
            if(data.success){
                Toast('登录成功');
                commit('denglu')
                sessionStorage.setItem("key", data.result.ticket);
                router.push({path:'/mains'});
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
                commit('register')
                router.push({path:'/mains'});
            }else{
                Toast(data.error);
            }
        })
    },
    //退出登录
    exitLogin({commit}){
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
        router.push({path:'/mains'});
    },
    
//  //保存昵称
//  savenickname({commit},nickname){
//  	alert(1)
//  	console.log(nickname)
//		this.commit('savenickname',nickname)  
//  }

}

export default actions