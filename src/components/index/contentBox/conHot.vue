<template>
    <div class="con-hot">
        <h1>青宿最热</h1>
        <div class='conBox'>
            <div class='conDiv' v-for='info of mes' :key='info.id'>
                <img :src=info.housePhoto alt="">             
                <i>{{info.title}}</i>
                <p>{{info.style}}</p>
                <span>{{info.price}}</span>
                <img  class='pho' :src=info.headPhoto alt="">
            </div>                       
        </div>
        
    </div>
</template>


// import {mapState,mapMutations,mapGetters,mapActions}  from 'vuex'


<script>
	import axios from 'axios'
	export default{
        name:'con-hot',
        data:function(){
            return {
                mes:[]
            }
        },
        methods:{
            getData(){
				// let that = this;
                axios.get("/api/user/selectHouse")
                .then((response)=>{
                    this.mes = response.data.result;
					console.log(this.mes[0].title);
				})
			}
		},
		created(){
			this.getData()
		}
	}
</script>
<style lang="scss">
          h1{
                height:0.42rem;
                line-height:0.42rem;
                font-size:0.25rem; 
                background:url('/static/img/house.jpg')   no-repeat;
                padding-left:0.5rem;
                margin-bottom:0.15rem;
            }
         .conDiv{
            position:relative;
            height: 2.5rem;
            margin-bottom:0.3rem;
            box-shadow: 0 0 5px #017c84;
             .pho{
                width:0.45rem;
                height:0.45rem;
                border-radius: 0.3rem;
                position: absolute;
                right:20px;
                bottom: 10px;
                overflow: hidden;
                display:block;
               
            }
            img{
                width:100%;
            }
            i{
                font-size: 12px;
                color:#ccc;
                padding-left:0.2rem;
            }
            p{
                color: #000;
                font-size:14px;
                padding-left:0.2rem;
            }
            span{
                padding-left:0.2rem;
                color:#017c84;
                font-size:16px;
                font-weight:900;
            }
           
        }
</style>
