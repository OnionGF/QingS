<template>
	<div class="lunbo">
        <h3>
            <p>房东故事</p> 
            <i>给你讲述我和房的故事</i>
        </h3>
	    <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in mes" :key="item.id"  >
                <a href="https://mp.weixin.qq.com/s/qwsD8emF48x5wSuVDHZVWA">
                    <img class='p_img' width="100%" :src="item.imageUrl" :title="item.name" />
                    <p class="p_title">{{item.name}}</p>
                </a>
			</mt-swipe-item>
        </mt-swipe>
	</div>
</template>

<script>
    import Swiper from 'swiper'
    import axios from 'axios'
    export default {
        name:'lunbo',
        data(){
            return{
                mes:[]
            }
        },
        methods:{
			getData(){
				let that = this;
				axios.get("/static/mock/story.json")
				.then((response)=>{
					// console.log(response);
					that.mes = response.data.data.billboards
				})
			}
		},
		created(){
			this.getData()	
		},
    }
</script>


<style lang="scss" scoped>
    .lunbo{
        height:2.0rem;
        margin-bottom:0.6rem;
        margin-left:0.1rem;
        margin-right:0.1rem;
        background:url(/static/img/hot.jpg) no-repeat;
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
        .p_img{
            position:relative;
        }
        .p_title{
            position:absolute;
            margin-left:0.1rem;
            background:#017c84;
            border-radius:5px;
            opacity: 0.7;
            bottom:00.1rem;
            color:#fff;
            left:0;
            font-size: 0.15rem;
        }
       
    }
</style>
