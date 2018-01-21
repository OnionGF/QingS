<template>
    <div class="con-choo">
        <h2>青宿精选</h2>
        
        <div class='conBox'>
            <div class='conDiv2' @click="conhotdetail(info)"  v-for='info of mes' :key='info.id'>
                <input @click.stop="love({houseId:info.id})" type="checkbox" class="check">
                <img :src=info.image alt=""/>
                <p><span><i class='iconfont' >&#xe61c;</i>{{info.addr}}</span></p>
                <p class="route"><span>{{info.route}}</span><span>{{info.name}}</span></p>
            </div>                       
        </div>
        
    </div>
</template>


// import {mapState,mapMutations,mapGetters,mapActions}  from 'vuex'


<script>
import {mapActions} from 'vuex'
	import axios from 'axios'
	export default{
        name:'con-choo',
        data:function(){
            return {
                mes:[]
            }
        },
        methods:{
            //  conhotdetail(info) {
            //     this.$router.push({ name: "conHotdetail", params: { id: info.id } });
            // },
            ...mapActions(['love']),



            getData(){
				// let that = this;
                axios.get("/api/play/gym_list")
                .then((response)=>{
                    this.mes = response.data.result;    
                    console.log(this.mes)    
				})
			}
		},
		created(){
			this.getData()
		}
	}
</script>
<style lang="scss">

            .check{
                position: absolute;
                top:0;
                left:0;
            }
            h2{
                height:0.42rem;
                line-height:0.42rem;
                font-size:0.25rem; 
                background:url('/static/img/xing.png')   no-repeat;
                background-size: 0.5rem;
                padding-left:0.5rem;
                margin-bottom:0.15rem;
            }
         .conDiv2{
             position:relative;
            height: 2.5rem;
            margin-bottom:0.4rem;

            
            img{
                width:100%;
            }
            p{
                padding-left:0.2rem;
                color:#017c84
            }
            .route{
                color:#000;
                height: 0.3rem;
                line-height:0.3rem;
                font-size:0.15rem;
                
                span{
                    margin-right:0.5rem;
                }
            }
           
        }
</style>
