<template>
	<div class="nologin">
		<div class="nologintitle">
            <span class="nologintitlet">消息</span>
        </div>
        <div class="nologincenter">
        	<i class="iconfont nologinicon">&#xe657;</i>
        	<p class="nologincenterwenzi">啊哦，您还没有登录哦！</p>
        </div>
        <div class="nologindivbtn">
        	<button class="nologinbtn" @click="gologin()">立即登录</button>
        </div>
        
        <foots></foots>
	</div>
</template>

<script>
	 import foots from '../footer/foot'
	 export default {
        name:'nologin',
        components:{foots},
       	methods: {
            gologin() {
                this.$router.push({ name: "password"});
            }
        },
    }
</script>

<style lang="scss">
	.nologin{
		text-align: center;
		.nologintitle{
			height: 0.4rem;
			background: #017C84;
			line-height: 0.4rem;
			text-align: center;
			color: #fff;
			font-size: 0.2rem;
		}
		.nologincenter{
			text-align: center;
			margin-top: 1.2rem;
			.nologinicon{
				font-size: 0.8rem;
    			color: #017C84;
			}
			.nologincenterwenzi{
				margin-top: 0.3rem;
				text-align: center;
				color: #5f636b;
				font-size: 16px;
			}
		}
		.nologinbtn{
			width: 3.3rem;
			height: 0.44rem;
			background: #017C84;
			color: #fff;
			outline: none;
			border: none;
			margin-top: 0.4rem;
			border-radius: 12px;
			
		}
	}

</style>