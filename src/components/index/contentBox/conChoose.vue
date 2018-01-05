<template>
    <div class="con-choo">
        <h2>青宿精选</h2>
        <div class='conBox'>
            <div class='conDiv2' v-for='info of mes' :key='info.id'>
                <img :src=info.image alt="">
                <p><span><i class='iconfont' >&#xe61c;</i>{{info.addr}}</span></p>
                <p class="route"><span>{{info.route}}</span><span>{{info.name}}</span></p>
            </div>                       
        </div>
        
    </div>
</template>


// import {mapState,mapMutations,mapGetters,mapActions}  from 'vuex'


<script>
	import axios from 'axios'
	export default{
        name:'con-choo',
        data:function(){
            return {
                mes:[]
            }
        },
        methods:{
            getData(){
				// let that = this;
                axios.get("/api/play/gym_list")
                .then((response)=>{
                    this.mes = response.data.result;
                   
				})
			}
		},
		created(){
			this.getData()
		}
	}
</script>
<style lang="scss">
            h2{
                height:0.42rem;
                line-height:0.42rem;
                font-size:0.25rem; 
                background:url('/static/img/hot.jpg')   no-repeat;
                padding-left:0.5rem;
                margin-bottom:0.15rem;
            }
         .conDiv2{
            
            height: 2.5rem;
            margin-bottom:0.3rem;
            box-shadow: 0 0 5px #017c84;
            
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
