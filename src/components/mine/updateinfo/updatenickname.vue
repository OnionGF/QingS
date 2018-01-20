<template>
	<div class="updatenickname">
		<div class="updatenicknametitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="updatenicknamekey">昵称</span> 
            <span class="save">保存</span>
        </div> 
        <div class="nicknametit">
         		昵称
        </div>
        <div class="nicknameinput">
        	<input class="nicknameinput1" type="text"/>
        </div>
        <div class="nicknamecon">
        	<p class="nicknameconneed">4~20个字符(汉字、字母、数字、下划线)</p>
        	<p class="nicknamecontip">提示：请勿透露您的联系方式、公寓名称、品牌名称等信息、否则无法通过审核</p>
        
        </div>
	</div>
</template>

<script>
	export default{
		name:'updatenickname',
		
	    
	}
</script>

<style lang="scss">
	.updatenickname{
		display: flex;
		flex-direction: column;
		.updatenicknametitle{
			height: 0.4rem;
			background: #017C84;
			color: #fff;
			position: relative;
			justify-content: space-between;
			.back{
	            position: absolute;
	            top: 0.02rem;
	            left: 0.1rem;
	        }
			.updatenicknamekey{
			   line-height: 0.4rem;
			   position: absolute;
			   top: 0.03rem;
			   left: 1.7rem;
			   font-size: 0.2rem;
			}
			.save{
				line-height: 0.4rem;
				position: absolute;
				top: 0.03rem;
				right: 0.16rem;
			}
		}
		.nicknametit{
			height: 0.35rem;
			background: #f8faf8;
			line-height: 0.35rem;
			padding-left: 0.16rem;
			color: #898d98;
		}
		.nicknameinput{
			width: 100%;
			height: 0.4rem;
			background: #fff;
			.nicknameinput1{
				width: 100%;
				height: 0.4rem;
				outline: none;
				border: none;
			}
		}
		.nicknamecon{
			height: 5.24rem;
			background: #f8faf8;
			.nicknameconneed{
				margin-top: 0.09rem;
				margin-left: 0.2rem;
			}
			.nicknamecontip{
				width: 3.3rem;
				margin-top: 0.24rem;
				margin-left: 0.2rem;
				line-height: 0.19rem;
			}
		}
		
	}
	
</style>