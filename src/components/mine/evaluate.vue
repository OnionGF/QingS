<template>
	<div class="myevaluatetit">
		<div class="myevaluate">
			<i class="iconfont backeval" onclick="javascript:history.back(-1);">&#xe624;</i>
			<span class="myevaltit">我的评价</span>
		</div>
		<div class="alleval">
			<p class="allevaltit">全部评价</p>
		</div>
		<div class="evalatecon" @click="writeevaluate()">
			<div class="evalatecon1">
				<div class="evalhead">
					<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3016890200,2017113207&fm=27&gp=0.jpg" />
				</div>
				<div class="evalnickname">
					I***0
				</div>
			</div>
			<p class="evalatecon2">2017-10-19主题公寓</p>
			<p class="evalatecon3">此用户没有填写评价</p>
			<div class="evalatecon4">
				<div class="evalroomhead">
					<img src="https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3103164129,855249446&fm=77&w_h=121_75&cs=3916855684,3001842247" />
				</div>
				<div class="evalroomcon">
					<p class="evalroomname">主题公寓</p>
					<p class="evalroomtime">09月16日-09月17日</p>
					<p class="evalroomprice"><span class="evalroomprice1">房价：¥6000</span><span class="evalroomprice2">已好评</span></p> 
				</div>
			</div>
			<p class="evalatecon5">
				<span class="evalatecon5span1">浏览10次</span>
				<span class="evalatecon5span2">点赞10次</span>
				<span class="evalatecon5span3">评论10次</span>
			</p>	
		</div>
		
		<div class="evalatecon" @click="writeevaluate()">
			<div class="evalatecon1">
				<div class="evalhead">
					<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3016890200,2017113207&fm=27&gp=0.jpg" />
				</div>
				<div class="evalnickname">
					I***0
				</div>
			</div>
			<p class="evalatecon2">2017-10-19主题公寓</p>
			<p class="evalatecon3">此用户没有填写评价</p>
			<div class="evalatecon4">
				<div class="evalroomhead">
					<img src="https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3103164129,855249446&fm=77&w_h=121_75&cs=3916855684,3001842247" />
				</div>
				<div class="evalroomcon">
					<p class="evalroomname">主题公寓</p>
					<p class="evalroomtime">09月16日-09月17日</p>
					<p class="evalroomprice"><span class="evalroomprice1">房价：¥6000</span><span class="evalroomprice2">已好评</span></p> 
				</div>
			</div>
			<p class="evalatecon5">
				<span class="evalatecon5span1">浏览10次</span>
				<span class="evalatecon5span2">点赞10次</span>
				<span class="evalatecon5span3">评论10次</span>
			</p>	
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'updatenickname',
		data(){
            return {
              
            }
		},
		methods: {
			writeevaluate: function() {
				this.$router.push({
					name: "writeevaluate"
				});
			},
		}
	}
       
</script>

<style lang="scss">
	.myevaluatetit{
		display: flex;
		background: #f5f5f5;
		height:100%;
    	flex-direction: column;
    	.myevaluate{
    		position: relative;
    		font-size:0.2rem;
	        line-height:0.4rem;
	        text-align:center;
	        height:0.4rem;
	        width:100%;
	        color: #fff;
	        background: #017c84;
	        .backeval{
	        	position: absolute;
	        	top: 0.02rem;
	        	left: 0.1rem;
	        	font-size: 26px;
	        	color: #fff;
	        }
    	}
    	.alleval{
    		height: 0.4rem;
    		background: #fff;
    		border-bottom: 1px solid #e5e5e5;
    		.allevaltit{
    			margin-left:0.1rem;
    			line-height: 0.4rem;
    			color: #017c84;
    			font-size: 0.16rem;
    		}
    	}
    	.evalatecon{
    		height: 2rem;
    		background: #fff;
    		margin-top: 0.11rem;
    		.evalatecon1{
    			display: flex;
    			
    			height: 0.45rem;
    			.evalhead{
    				width: 0.3rem;
    				height: 0.3rem;
    				border-radius: 50%;
    				overflow: hidden;
    				margin-top: 0.14rem;
    				margin-left: 0.1rem;
    				img{
    					width:100%;
    					height: 100%;
    				}
    			}
    			.evalnickname{
    				margin-top: 0.2rem;
    				margin-left: 0.21rem;
    			}
    			
    		}
    		.evalatecon2{
    			color: #adadad;
    			font-size: 0.14rem;
    			height: 0.32rem;
    			line-height: 0.32rem;
    			margin-left: 0.1rem;
    		}
    		.evalatecon3{
    			color: #333333;
    			font-size: 0.16rem;
    			height: 0.3rem;
    			line-height: 0.3rem;
    			margin-left: 0.1rem;
    		}
    		.evalatecon4{
    			height:0.65rem;
    			display: flex;
    			.evalroomhead{
    				width: 0.51rem;
    				height: 0.51rem;
    				overflow: hidden;
    				margin-left: 0.1rem;
    				border-radius: 0.1rem;
    				img{
    					width: 100%;
    					height: 100%;
    				}
    			}
    			.evalroomcon{
    				margin-left: 0.09rem;
    				.evalroomname{
    					color: #333;
    					font-size: 0.16rem;
    				}
    				.evalroomtime{
    					color: #999;
    					font-size: 0.14rem;
    				}
    				.evalroomprice{
    					color: #999;
    					font-size: 0.14rem;
    					.evalroomprice2{
    						color: #017c84;
    						font-size: 0.15rem;
    						margin-left: 0.13rem;
    					}
    				}
    			}
    			
    		}
    		.evalatecon5{
    			margin-left: 0.1rem;
    			color: #999999;
    			font-size: 0.15rem;
    			.evalatecon5span1{
    				margin-right: 0.14rem;
    			}
    			.evalatecon5span2{
    				margin-right: 0.14rem;
    			}
    		}
    	}
	}
 
</style>