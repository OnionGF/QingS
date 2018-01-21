<template>
	<div class="updatebrief">
		<div class="updatebrieftitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="updatebriefkey">简介</span> 
            <span class="save" @click="savebrief()">保存</span>
        </div> 
        <div class="updatebriefcon">
        	<textarea class="updatebriefcontxtarea" name="a" style="width:100%;height:1.7rem;" ></textarea>
        
        </div>
	</div>
</template>

<script>
	export default{
		name:'updatehead',
	    
	}
</script>

<style lang="scss">
	.updatebrief{
		display: flex;
		flex-direction: column;
		.updatebrieftitle{
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
			.updatebriefkey{
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
		.updatebriefcon{
			margin-top: 0.1rem;
			.updatebriefcontxtarea{
				border: none;
				outline: none;
				border-top: 0.001rem solid #d9d9d9;
				border-bottom: 0.001rem solid #d9d9d9;
			}
		}
		
	}
	
</style>