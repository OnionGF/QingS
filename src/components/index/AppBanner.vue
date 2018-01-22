<template>
	<div class="app-banner swiper-container">
		
		<div class="swiper-wrapper">
			<div v-for="billboard in billboards" :key="billboard.id" class="swiper-slide">
				<img width="100%" height='100%' :src="billboard.imageUrl" :title="billboard.name" />
			</div>
		</div>
		
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import axios from 'axios'
	export default{
		name:'app-banner',
		data:function(){
			return{
				billboards:[]
			}
		},
		methods:{
			getData(){
				let that = this;
				//https://m.maizuo.com/v4/api/billboard/home?__t=1514030525181
				axios.get("/static/mock/picture.json")
				.then((response)=>{
					// console.log(response);
					that.billboards = response.data.data.billboards
				})
			}
		},
		created(){
			this.getData()	
		},
		updated(){
			new Swiper('.app-banner',{
				loop :true,
				direction:'vertical',
				autoplay:{delay:2000}
			})
		}
	}
</script>

<style>
		.swiper-container{
			width:100%;
		}
</style>