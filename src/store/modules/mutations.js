// 根级别的 mutation

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
    }
}

export default mutations