
import getpos from '../../modules/position.js'
import { Toast } from 'mint-ui';
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
    send(){
        // console.log('验证码')
        axios('/dola/app/user/newgetverifycode').then(({data})=>{
            if(data.code===2001){
                console.log('1234')
            }
        })
    },
    //登录
    login({commit},user_info){
        console.log(user_info)
        // axios('/dola/app/user/newgetverifycode').then(({data})=>{
        //     if(data.code===2001){
        //         console.log('1234')
        //         Toast.success('验证码：1234',1,()=>{			                   
        //         },true)
        //     }else{
        //         Toast.fail('发送失败')
        //     }            
        // })
        setTimeout(() => {             
           if(user_info.name=='123'&&user_info.pass=='456'){
            //    alert('登录成功')
            router.push({path:'/mine'});
            commit('login',user_info)	    		                   
            Toast({
                message: '登陆成功',
                iconClass: 'icon icon-success'
              });
               
            }else{
  
            // alert('密码错误')
             Toast('密码错误');
               
            }         
           
        }, 1000);

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
    }

}

export default actions