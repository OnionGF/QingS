<template>
	<div class="nologin">
		<div class="nologintitle">
            <span class="nologintitlet">消息</span>
        </div>
        <div class="nologincenter">
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
		.nologintitle{
			height: 0.4rem;
			background: #017C84;
			line-height: 0.4rem;
			text-align: center;
			color: #fff;
			font-size: 0.2rem;
		}
		.nologincenter{
			.nologincenterwenzi{
				margin-top: 3.14rem;
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
			margin-top: 1.25rem;
			margin-left: 0.25rem;
		}
	}

</style>