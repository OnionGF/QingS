
import getpos from '../../modules/position.js'


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
                //失败
                console.log("失败") 
               
            }
        });
        commit('getMes',mes.place)
        console.log(mes.place)
    },
    startDate({commit},start){
        // console.log(12+start)
        setTimeout(() => {             
            let result ='ok'
            if(result=='ok'){
                commit('startDate',start)
            }
        }, 1000);
    },
    endDate({commit},end){
        // console.log(12+end)        
        setTimeout(() => {             
            let result ='ok'
            if(result=='ok'){
                commit('endDate',end)
            }
        }, 1000);
    },
   

}

export default actions