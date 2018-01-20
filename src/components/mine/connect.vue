<template>
	<div class="myconnecttit">
		<div class="myconnect">
			<i class="iconfont backeval" onclick="javascript:history.back(-1);">&#xe624;</i>
			<span class="myevaltit">客服及意见反馈</span>
		</div>
		<div class="myconnectanswer">
			<p class="myconnectanswericon"><i class="iconfont iconnect headiconn">&#xe681;</i></p>
			<p class="myconnectanswericoncon">遇到问题了？点击<span class="onlinechat">在线客服</span>青宿用尽洪荒之力立即解答您的问题。</p>
		</div>
		<div class="myopinion">
			<p class="myquestion">您的问题或建议</p>
			<textarea class="txtarea" name="a" style="width:3.5rem;height:1.5rem;" placeholder="请简要描述您在住宿过程中的问题和建议"></textarea>
		</div>
		<div class="myconnectmethod">
			<p class="myquestion">您的联系方式</p>
			<p><input type="text" class="myquestiontext" placeholder="邮箱（选填）"/></p>
			<p><input type="text" class="myphonenum" placeholder="手机号码（选填）"/></p>
			<p class="morewen">
			请留下您的联系方式，以便我们能够方便的了解问题以及给您反馈问题结果。紧急问题可拨打400-800-9999获得及时帮助
			</p>
		</div>
		<p><input @click='submitSuggest' type="submit" class="mysub" value="提交建议"/></p>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name :'compo',
    components:{
       
    },
    methods:{
        // 启动页
       ...mapActions(['submitSuggest'])
    }
   
}
</script>

<style lang="scss">
	.myconnecttit{
		display: flex;
		background: #f5f5f5;
		height:100%;
    	flex-direction: column;
    	.myconnect{
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
    	.myconnectanswer{
    		display: flex;
    		height: 0.62rem;
    		border-bottom: 1px solid #e5e5e5;
    		.myconnectanswericon{
    			line-height:0.62rem;
    			.headiconn{
    				color: #017c84;
    			}
    		}
    		.myconnectanswericoncon{
    			color: #333;
    			margin-top: 0.12rem;
    			margin-left: 0.1rem;
    			font-size: 0.15rem;
    			.onlinechat{
    				color: #017c84;
    			}
    			
    		}
    		
    	}
    	.myopinion{
    		.myquestion{
    			height: 0.44rem;
    			line-height: 0.44rem;
    			margin-left: 0.15rem;
    		}
    		.txtarea{
    			margin-left: 0.12rem;
    			border: none;
    			border-radius: 12px;
    			outline: none;
    			padding-top: 0.1rem;
    			padding-left: 0.15rem;
    			color: #adadad;
    		}
    	}
    	.myconnectmethod{
    		height: 2.25rem;
    		.myquestion{
    			height: 0.44rem;
    			line-height: 0.44rem;
    			margin-left: 0.15rem;
    		}
    		.myquestiontext{
    			width: 3.5rem;
    			height: 0.39rem;
    			border-radius: 8px;
    			border: none;
    			outline: none;
    			margin-left: 0.15rem;
    			padding-left:0.13rem ;
    		}
    		.myphonenum{
    			width: 3.5rem;
    			height: 0.39rem;
    			border-radius: 8px;
    			border: none;
    			outline: none;
    			margin-left: 0.15rem;
    			margin-top: 0.1rem;
    			padding-left:0.13rem ;
    		}
    		.morewen{
    			margin-top: 0.1rem;
    			width: 3.5rem;
    			color: #333333;
    			margin-left: 0.15rem;
    		}
    	}
    	.mysub{
    		width: 3.56rem;
    		height: 0.52rem;
    		border-radius: 12px;
    		border: none;
    		background: #017c84;
    		color: #fff;
    		margin-left: 0.09rem;
    		font-size: 14px;
    	}
    	
	}
	
</style>