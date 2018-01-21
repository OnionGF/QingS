<template>
	<div class="updategae">
		<div class="updateagetitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="updateagekey">年龄</span> 
        </div> 
        <div class="updateagecon">
        	<button class="updateageconfive">50后</button>
        	<button class="updatesexconsix">60后</button>
        	<button class="updatesexconseven">70后</button>
        	<button class="updatesexconeight">80后</button>
        	<button class="updatesexconnine">90后</button>
        </div>
	</div>
</template>

<script>
	export default{
		name:'updategae',
	    
	}
</script>

<style lang="scss">
	.updategae{
		display: flex;
		flex-direction: column;
		.updateagetitle{
			height: 0.4rem;
			background: #017C84;
			color: #fff;
			position: relative;
			justify-content: space-between;
			.back{
	            position: absolute;
	            top: 0.01rem;
	            left: 0.1rem;
	        }
			.updateagekey{
			   line-height: 0.4rem;
			   position: absolute;
			   top: 0.03rem;
			   left: 1.7rem;
			   font-size: 0.2rem;
			}
		}
		.updateagecon{
			margin-top: 0.1rem;
			.updateageconfive{
				width: 100%;
				height: 0.43rem;
				background: #fff;
				border: none;
				border-top:1px solid #d9d9d9;
				border-bottom:1px solid #d9d9d9;
			}
			.updatesexconsix{
				width: 100%;
				height: 0.43rem;
				background: #fff;
				border: none;
				border-bottom:1px solid #d9d9d9;
			}
			.updatesexconseven{
				width: 100%;
				height: 0.43rem;
				background: #fff;
				border: none;
				border-bottom:1px solid #d9d9d9;
			}
			.updatesexconeight{
				width: 100%;
				height: 0.43rem;
				border: none;
				background: #fff;
				border-bottom:1px solid #d9d9d9;
			}
			.updatesexconnine{
				width: 100%;
				height: 0.43rem;
				background: #fff;
				border: none;
				border-bottom:1px solid #d9d9d9;
			}
		}
		
	}
	
</style>