// 根级别的 mutation
import router from '../../router'
import { Toast } from 'mint-ui';
const mutations = {
    
    //定位搜索框
    getPosi(state,info){
        state.position = info.address  
    },
    getMes(state,info){
        state.searchMes = info
    },
    startDate(state,info){
        state.startDate = info
    },
    endDate(state,info){
        state.endDate = info
    },

    //用户登录 本地存储
    change_type(state,user_info){
        state.user_info = user_info
        localStorage.user_info = JSON.stringify(user_info)
    },
    //登录验证
    login(state,user_info){       
        state.LoginOnData = true;
    },
    //退出登录
    exitLogin(state,data){
        Toast(data.result);
        router.push({path:'/mains'});
        state.LoginOnData = false;
    },
    //用户名登录
    register(state){
        state.LoginOnData = true;
    },
    //验证码登录
    denglu(state){
        state.LoginOnData = true;
    }
}

export default mutations