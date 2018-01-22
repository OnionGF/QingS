<template>
    <div class="con-choo">
         <h3>
            <p>优质房源</p> 
            <i>为您特别推荐</i>
        </h3>
        
        <div class='conBox'>
            <div class='conDiv2' v-for='info of mes' :key='info.id'>
                <img  @click="conHotdetail"  :src=info.image alt=""/>
                <p><span><i class='iconfont' >&#xe61c;</i>{{info.addr}}</span></p>
                <p class="route"><span>{{info.route}}</span><a  @click.stop="love({houseId:info.id})" ><Icon  class='like' :class="{active:isActive}" type="heart"></Icon></a></p>
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
                isActive:false,
            }
        },
        methods:{

            ...mapActions(['conHotdetail']),
            love(){
                // alert(this.isActive)
                this.isActive=!this.isActive;
                this.$store.dispatch('love')
            },


            getData(){
				// let that = this;
                axios.get("/static/mock/choose.json")
                .then((response)=>{
                    console.log(response,1111111)
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
                    .like{
                        font-size:0.4rem;
                        float:right;
                        color:#000;
                        opacity:0.2;
                        margin-top:-0.2rem;

                    }
                    .active{
                        float:right;
                        opacity:1;
                        font-size:0.4rem;
                        color:hsl(4, 69%, 50%);
                        margin-top:-0.2rem;
                        
                    }
                }
                // 
            
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
