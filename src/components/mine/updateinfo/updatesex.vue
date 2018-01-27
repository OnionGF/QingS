<template>
	<div class="updatesex">
		<div class="updatesextitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="updatesexkey">性别</span> 
        </div> 
        <div class="updatesexcon">
        	<button class="updatesexconnv">女</button>
        	<button class="updatesexconnan">男</button>
        
        </div>
	</div>
</template>

<script>
	export default{
		name:'updatehead',
	    
	}
</script>

<style lang="scss">
	.updatesex{
		display: flex;
		flex-direction: column;
		.updatesextitle{
			height: 0.4rem;
			background: #017C84;
			color: #fff;
			text-align: center;
			position: relative;
			.back{
	            position: absolute;
	            top: 0.01rem;
	            left: 0.1rem;
	        }
			.updatesexkey{
			   line-height: 0.4rem;
			   font-size: 0.2rem; 
			}
		}
		.updatesexcon{
			height: 2rem;
			margin-top: 0.1rem;
			.updatesexconnv{
				width: 100%;
				height: 0.4rem;
				border: none;
				outline: none;
				background: #fff;
				border-top:1px solid #d9d9d9;
				border-bottom:1px solid #d9d9d9;
				
			}
			.updatesexconnan{
				width: 100%;
				height: 0.4rem;
				border: none;
				outline: none;
				background: #fff;
				border-bottom:1px solid #d9d9d9;
			}
		}
		
	}
	
</style>