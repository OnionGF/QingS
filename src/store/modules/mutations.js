// 根级别的 mutation
import router from '../../router'
import { Toast } from 'mint-ui';
const mutations = {
    
    //定位搜索框
    getPosi(state,info){
        state.position = info.address  
    },
    getMes(state,info){
        state.searchMes = info;
        
    },
    startDate(state,info){
        state.startDate = info
    },
    endDate(state,info){
        state.endDate = info
    },

    // //用户登录 本地存储
    // change_type(state,user_info){
    //     state.user_info = user_info
    //     localStorage.user_info = JSON.stringify(user_info)
    // },
    //登录验证
    login(state,user_info){       
        state.LoginOnData = true;
    },
    //退出登录
    exitLogin(state,data){
        Toast(data.result);
        state.nick={nickName:'立即登录'};        
        router.push({path:'/mine'});
        localStorage.setItem("LoginOnData", false);        
        state.LoginOnData = false;
    },
    //用户名登录
    register(state,data){
        state.nick=data.result;
        localStorage.setItem("LoginOnData", true);
        state.LoginOnData = true;
    },
    //验证码登录
    denglu(state,data){
        state.nick=data.result; 
        localStorage.setItem("LoginOnData", true);        
        state.LoginOnData = true;
    },
    //修改昵称
    change(state,data){
        state.nick.nickName = data.nickName;
    }
}

export default mutations