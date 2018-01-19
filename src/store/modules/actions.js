
import getpos from '../../modules/position.js'
 
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
   

}

export default actions