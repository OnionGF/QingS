<template>
	<div class="updatecity">
		<div class="updatecitytitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="updatecitykey">请输入城市</span> 
            <span class="save">保存</span>
        </div> 
        <div class="updatecitycon">
        	<input type="text" class="updatejobconinput" placeholder="请输入城市信息" />
        
        </div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.updatecity{
		display: flex;
		flex-direction: column;
		.updatecitytitle{
			height: 0.4rem;
			background: #017C84;
			color: #fff;
			display: flex;
			justify-content: space-between;
			.back{
	            line-height: 0.4rem;
	           	padding-left: 0.1rem;
	        }
			.updatecitykey{
			   line-height: 0.4rem;
			   font-size: 0.2rem;
			}
			.save{
				line-height: 0.4rem;
				padding-right: 0.1rem;
			}
		}
		.updatecitycon{
			margin-top: 0.1rem;
			.updatejobconinput{
				width: 100%;
				height: 0.4rem;
				border: none;
				outline: none;
				padding-left: 0.1rem;
				border-top: 0.001rem solid #d9d9d9;
				border-bottom: 0.001rem solid #d9d9d9;
			}
		}
		
	}
	
</style>