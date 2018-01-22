<template>
	<div class="updatejob">
		<div class="updatejobtitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="updatejobkey">职业</span> 
            <span class="save">保存</span>
        </div> 
        <div class="updatejobcon">
        	<input type="text" class="updatejobconinput" placeholder="请输入职业" />
        	<p class="updatejobcon1">15个字符内</p>
        </div>
	</div>
</template>

<script>
	export default{
		name:'updatehead',
	    
	}
</script>

<style lang="scss">
	.updatejob{
		display: flex;
		flex-direction: column;
		.updatejobtitle{
			height: 0.4rem;
			background: #017C84;
			color: #fff;
			display: flex;
			justify-content: space-between;
			.back{
	           line-height: 0.4rem;
	           padding-left: 0.1rem;
	        }
			.updatejobkey{
			   line-height: 0.4rem;
			   font-size: 0.2rem;
			}
			.save{
				line-height: 0.4rem;
				padding-right: 0.1rem;
			}
		}
		.updatejobcon{
			margin-top: 0.1rem;
			.updatejobconinput{
				width: 100%;
				height: 0.4rem;
				border: none;
				outline: none;
				padding-left: 0.1rem;
				border-top: 0.001rem solid #d9d9d9;
				border-bottom: 0.001rem solid #d9d9d9;
				::-webkit-input-placeholder { /* WebKit browsers */
                	color:#c7c7cc;
                }
                :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    color:#fff;
                }
                ::-moz-placeholder { /* Mozilla Firefox 19+ */
                    color:#fff;
                }
                :-ms-input-placeholder { /* Internet Explorer 10+ */
                    color:#fff;
                }

			}
			.updatejobcon1{
				color: #9d9d9d;
				margin-top: 0.15rem;
				margin-left: 2.8rem;
			}
		}
		
		
	}
	
</style>