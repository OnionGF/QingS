// 根级别的 mutation
import router from '../../router'
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
    exitLogin(state){
        console.log('退出登录')
        router.push({path:'/mains'});
        state.LoginOnData = false;
    }

}

export default mutations