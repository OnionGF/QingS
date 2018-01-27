<template>
	<div class="writeevaluate">
		<div class="writeevaluatetitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="writeevaluatekey">发表评价</span> 
            <span class="mysubmit" >提交</span>
        </div>
        <div class="writeevaluateimg">
            <p class="pimg"><img src="https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3476792544,2525510242&fm=77&w_h=121_75&cs=3374683037,1435923330"/></p>

            <div class="pcon">
                <p class="pconscore">评分</p>
                <p class="pconimg">
                	<Rate :value.sync="value"></Rate>
                </P>
            </div>    
        </div> 
        <div class="writeevaluatecon">
            <textarea class="writeevaluateconarea" placeholder="满足你的期待吗？说说他的优点和美中不足地方吧" style="width:100%;height:1.2rem;" ></textarea>
        </div>
	</div>
</template>

<script>
	export default{
		name:'updatenickname',
		data(){
            return {
                value: 0

            }
        },
       
}
</script>

<style lang="scss">
	.writeevaluate{
		display: flex;
		flex-direction: column;
		.writeevaluatetitle{
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
			.writeevaluatekey{
			   line-height: 0.4rem;
			   position: absolute;
			   top: 0.03rem;
			   left: 1.5rem;
			   font-size: 0.2rem;
			}
			.mysubmit{
				line-height: 0.4rem;
				position: absolute;
				top: 0.03rem;
				right: 0.16rem;
			}
        }
        .writeevaluateimg{
            //height:0.7rem;
            background: #fff;
            display: flex;
            .pimg{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 12px;
                overflow: hidden;
                margin-top: 0.1rem;
                margin-left: 0.1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .pcon{
                display: flex;
                flex-direction: column;
                margin-top: 0.18rem;
                .pconscore{
                   margin-left:0.09rem; 
                }
                .pconimg{
                   width: 2rem;
                   height: 0.19rem;
                   margin-left:0.1rem;
                  
                }

            }
        }
        .writeevaluatecon{
            height: 1.2rem;
            margin-top:0.11rem;
            .writeevaluateconarea{
                border:none;
                outline:none;
                background:#f9f9f9;
                padding-top:0.1rem;
                padding-left: 0.1rem;
            }
        }
		
	}
	
</style>