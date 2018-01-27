<template>
    <div class="con-choo">
         <h3>
            <p>优质房源</p> 
            <i>为您特别推荐</i>
        </h3>
        
        <div class='conBox'>
            <div class='conDiv2' v-for='(info,id) in mes' :key='info.id'>
                <img  @click="conHotdetail"  :src=info.image alt=""/>
                <p><span><i class='iconfont' >&#xe61c;</i>{{info.addr}}</span></p>
                <p class="route"><span>{{info.route}}</span><router-link to="#/" :class="{active:isActive==id}" @change="change"  @click.native.stop="love({houseId:info.id,id:id})" >点</router-link></p>
            </div>                       
        </div>
        <div class="bottom"></div>

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
                mes:[],
                isActive:0,
            
            }
        },
        methods:{
            ...mapActions(['conHotdetail']),
            love(info){
                this.isActive = info.id;
                console.log(info.id)
                console.log(this.isActive)
                // this.isActive=!this.isActive;
                this.$store.dispatch('love')
            },
            change(){
                alert('123')
            },
            getData(){
                axios.get("/static/mock/choose.json")
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
        .con-choo{
            margin:0.1rem;
            background:url(/static/img/house.jpg) no-repeat;
                .check{
                    position: absolute;
                    top:0;
                    left:0;
                }
                h3{
                    margin-left:0.5rem;
                    p{
                        color:#017c84;
                        font-size: 0.2rem;
                        font-weight:500;
                    }
                    i{
                        font-size: 0.1rem;
                        font-weight:100;
                        color:rgb(190, 170, 170);  
                    }
                }
                .conDiv2{
                position:relative;
                margin-bottom:0.1rem;

                
                img{
                    width:100%;
                }
                p{
                    padding-left:0.2rem;
                    color:#017c84
                }
                .route{
                    color:#666;
                    height: 0.3rem;
                    line-height:0.3rem;
                    font-size:0.15rem;
                    margin-right:0.2rem;
                    span{
                        margin-right:0.1rem;
                    }           
                    a{
                        width:0.2rem;
                        height:0.5rem;
                        line-height: 0.5rem;
                        color:#fff;
                        background:#017c84;
                        position:absolute;
                        right:0;
                        margin-right:0.25rem;  
                        background:url('/static/img/click.jpg') no-repeat;
                        background-size:100%;
                    }
                    .active{
                        width:0.2rem;
                        height:0.5rem;
                        line-height: 0.5rem;
                        position:absolute;
                        right:0;
                        margin-right:0.25rem;                                      
                        color:#fff;
                        background:#017c84;
                        background:url('/static/img/unclick.jpg') no-repeat;
                        background-size:100%;
                    }
                }
               
            
            }
            .bottom{
                background:url(/static/img/bottom.png) no-repeat;
                height:0.27rem;
                // background:red;
                background-size:100%;
                margin-bottom:0.5rem;
                
            }
        }
</style>
