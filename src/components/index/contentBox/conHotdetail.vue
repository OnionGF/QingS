<template>
    <div class="con-hotdetail">
	<header class="mint-header"><div class="mint-header-button is-left"><a href="#/" class="router-link-active"><button class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text">返回</label></button></a></div> <h1 class="mint-header-title"></h1> <div class="mint-header-button is-right"><button class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon"><i class="mintui mintui-more"></i></span> <label class="mint-button-text"></label></button></div></header>
    	<div class="conhotcontent">
    	<!-----------------------------------轮播图部分---------------------------------------->
	        <!-- <i class="iconfont back posback" onclick="javascript:history.back(0);">&#xe624;</i> -->
	        <div class="topimg">
	            <banner/>
	        </div>
        <!------------------------------------------------------------------------------------->
        
        <!-----------------------------------房源评价以上---------------------------------------->
        	<div class="conwenzi">
	            <p class="title">长租优惠<i>|</i>信用免押金<i>|</i>实拍<i>|</i>可做饭</p>
	            <p class="conhottitle">常营 草房 物资学院 一居室 民宿</p>
	            <div class="roominfo">
	                <div class="boosinfo">
	                    <p class="roomtype">合住房间一室两床</p>
	                    <p><span class="boosn">房东:</span><span></span><span class="boosname">Grace</span><span class="boosn">价格:</span><span class="boosname">￥268/晚</span></p>
	       
	                </div>
	                <div class="booshead">
	                   <div>
	                       <img src="https://i1.mayi.com/mayi38/M74/EK/VT/FSHB3LBVHAEHSQX7LZXUTP4JSJES4S.jpg_/both/68x68/quality/65/unsharp/true/format/jpg"/>
	                   </div>
	                </div>
	            </div>
	            <div class="roomconfigure">
	                <div class="configuretype">
	             	    <i class="iconfont peopletwo">&#xe60f;</i>
	             	    <span>2人</span>
	                </div>
	                 <div class="configuretype">
	             	    <i class="iconfont roomone">&#xe66d;</i>
	             	    <span>1居</span>
	                </div>
	                 <div class="configuretype">
	             	    <i class="iconfont bedone">&#xe61b;</i>
	             	    <span>1床</span>
	                </div>
	                 <div class="configuretype">
	             	    <i class="iconfont toilet">&#xe665;</i>
	             	    <span>1卫</span>
	                </div>          
	            </div>
            </div>
        <!------------------------------------------------------------------------------------->   
            
            <!--<div class='userComments'>
                <h3>用户评价</h3>
                <p class="commendImg"></p>
                <p class='commendWord'>"环境很舒服，房主很耐心的回答各种问题！"</p>
            </div>
            <div class="booking">
                <button class="bookingButton">联系卖家</button>
                <button @click='orderHotel()' class="bookingButton">立即预订</button>
            </div>-->
      <!-----------------------------------房源评价以下---------------------------------------->
	        <div class="hoteleval">
	        		<p class="hotelevaltit"><span>房源评价</span><a class="aa" href="#">2评价</a> <i class="iconfont personmore ee">&#xe609;</i></p>
	        		<p class="hotelevalcon">还不错，很热情，下次来还住这里，哪里都方便</p>
	        		<div class="hotelevalvper">
	        			<div class="hotelevalvimg">
	        				<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3016890200,2017113207&fm=27&gp=0.jpg"/>
	        			</div>
	        			<p class="pp"><span class="hotelevalvnum">181****8726</span><span class="hotelevalvtime">2018年3月入住</span></p>
	        		</div>
	        </div>
	        <div class="hotelhost1">
	        	<div class="hotelhostimg">
	        		<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3238427873,3550277771&fm=27&gp=0.jpg" />
	        	</div>
	        	<div class="hotelhostinfo">
	        		<p class="hotelhostinfo1"><span class="hotelhostinfo11">三亚异地风情度假</span><span class="roomhost1">房东主页</span><i class="iconfont personmore dd">&#xe609;</i></p>
	        		<p class="hotelhostinfo2">实名认证 好评率87% 平均回复时间2分钟</p>
	        	</div>
	        </div>  
	        <div class="roomprove">
	        	<p class="roomprove1">房源认证</p>
	        	<p class="roomprove2"><span class="roomprove2span1">实地拍摄</span><span class="roomprove2span2">已验证</span></p>
	        	<p class="roomprove3"><span class="roomprove3span1">房产证明</span><span class="roomprove3span2">已验证</span></p>
	        	<p class="roomprove4"><span class="roomprove4span1">上门验真</span><span class="roomprove4span2">已验证</span></p>
	        </div>
	        <div class="roomintroduce">
	        	<p class="roomintroducetit"><span class="roomintroducetittt">房源介绍</span><span class="roomintroducetit1">更多</span><i class="iconfont personmore ff">&#xe609;</i></p>
	        	<p class="roomintroducecon">
	        		租车自家免押金服务，2晚以上赠接机服务！别墅位于亚龙湾国家旅游度假区翡翠谷3期配备私家游泳池，私家车位，整体采光设计，浪漫欧式装修风格，步行仅8分钟左右就可到达海边享受海风带来的凉爽，周边设有百花谷商业街餐饮购物出行便利。
	        	</p>
	        </div>
    	</div>
    	<div class="conhotdetailfooter">
	    	<div class="daphone">
	    		<i class="iconfont daphoneicon">&#xe627;</i>
	    		<span>通话</span>
	    	</div>
	    	<div class="chatt">
	    		<i class="iconfont chatticon">&#xe628;</i>
	    		<span>聊天</span>
	    	</div>
	    	<div class="insorder">
	    		<button @click='orderHotel()' class="bookingButton">立即预订</button>
	    	</div>
	    </div>
    </div>
</template>





<script>
    import banner from "../AppBanner.vue"
	import axios from 'axios'
	export default{
        name:'conHotdetail',
        data:function(){
            return {
              
            }
        },
        components:{
            banner
        },
        methods:{
           orderHotel(){
                
                this.$router.push({name:'orderHotel'})
            }
		},
		created(){
		
        },
        mounted(){
            console.log(this.$route.params.id);
        }
	}
</script>
<style lang="scss">
	html{
		height: 100%;
	}
.con-hotdetail{
    display:flex;  
    /*flex:1;*/
    height:100%;
    flex-direction: column;
	overflow-y: auto;
        .mint-header{
			background:#017C84;


		}
        .conhotcontent{
            flex:1;
            display:flex; overflow-y: auto;
            flex-direction: column;
            .title{
	            font-size:0.05rem;
	            color:#2e8d91;
	            margin-top: 0.07rem;
	            margin-left:0.25rem;
	            i{
	                margin:0 0.1rem;
	            }
	        }
	        .topimg{
	            width: 100%;
	            height: 2.35rem;
	            img{
	                width: 100%;
	                height: 100%;
	
	            }
	        }
            .conhottitle{
                height: 0.6rem;
                line-height: 0.6rem;
                font-size: 0.24rem;
                font-weight: bold;
                margin-left: 0.25rem;
                color: #484848;
            }
            .roominfo{
                display: flex;
                justify-content: space-between;
               
                height: 0.92rem;
                .boosinfo{
                    margin-left: 0.25rem;
                    .roomtype{
                        font-size:0.2rem;
                        color: #484848;
                        margin-bottom:0.1rem;
                    }
                    .boosn{
                        font-size: 0.16rem;
                        color: #484848;
                         margin-left:0.02rem;
                    }
                    .boosname{
                        font-size: 0.2rem;
                        color: #185357;
                    }
                }
                .booshead{
                    width: 0.65rem;
                    height: 0.65rem;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 0.2rem;
                }
            }
            .roomconfigure{
                display: flex;
                justify-content: space-around;
                height: 0.6rem;
                width: 100%;
                border-bottom: 1px solid #eaeaea;
                
                .configuretype{
                    display: flex;
                    flex-direction: column;
                    i{
                        color:#185357;
                    }
                }
            }
        
            /*.userComments{
                height: 1.44rem;
                padding-left:0.25rem;
                padding-top:0.15rem;
                background:#f8faf9;
                .commendImg{
                    height:0.4rem;
                    background: url('/static/img/comment.jpg');
                    background-size:contain;
                }
                .commendWord{
                    margin-top:0.2rem;
                    text-align:center;
                }
            }*/
            /*.booking{
                background:#f8faf9;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top:0.08rem;
                .bookingButton{
                    border:none;
                    background:#2e8d91;
                    border-radius:0.2rem;
                    width:1.0rem;
                    height:0.4rem;
                }
            }*/
            .hoteleval{
            	height: 1.25rem;
            	background: #f9f9f9;
            	border-bottom: 1px solid #eaeaea;
            	.hotelevaltit{
            		margin-top: 0.14rem;
            		font-size: 16px;
            		font-weight: bold;
            		color: #333333;
            		margin-left: 0.2rem;
            		.aa{
            			font-size: 14px;
            			color: #017C84;
            			margin-left: 2.2rem;
            		}
            		.ee{
            			font-size: 14px;
            		}
            	}
            	.hotelevalcon{
            		margin-top: 0.1rem;
            		margin-left: 0.2rem;
            		color: #666;
            	}
            	.hotelevalvper{
            		margin-top: 0.1rem;
            		margin-left: 1.4rem;
            		display: flex;
            		
            		.hotelevalvimg{
            			width: 0.3rem;
            			height: 0.3rem;
            			border-radius:50%;
            			overflow:hidden;
            			img{
            				width: 100%;
            				height: 100%;
            			}
            		}
            		.pp{
            			height: 0.3rem;
            			margin-bottom: 0.08rem;
            			.hotelevalvnum{
	            			color: #hotelevalvnum;
	            			margin-left: 0.05rem;
		            	}
	            		.hotelevalvtime{
	            			color: #999;
	            			margin-left: 0.12rem;
	            			line-height: 0.3rem;
	            		}
            		}
            		
            	}
            }
            .hotelhost1{
            	height: 1.25rem;
            	background: #f9f9f9;
            	.hotelhostimg{
            		width: 0.4rem;
            		height: 0.4rem;
            		border-radius: 50%;
            		overflow:hidden;
            		margin-top: 0.15rem;
            		margin-left:0.2rem;
            		float:left;
            		img{
            			width: 100%;
            			height: 100%;
            		}
            	}
            	.hotelhostinfo{
            		height: 0.75rem;
            		float: right;
            		.hotelhostinfo1{
	            		margin-top: 0.15rem;
	            		margin-right: 0.12rem;
	            		.hotelhostinfo11{
	            			font-size: 16px;
	            			font-weight: bold;
	            			margin-left: 0.09rem;
	            			}
	            		.roomhost1{
            				color: #017C84;
            				font-size: 14px;
            				margin-left: 0.9rem;
            				
	            		}
	            		.dd{
	            			font-size: 14px;
	            			margin-left: 0.03rem;
	            		}
	            	}
            		.hotelhostinfo2{
	            		margin-left: 0.09rem;
	            		margin-bottom: 0.05rem;
	            		color: #666;
	            		margin-top: 0.11rem;
	            	}
	            	
            	}
            }
            .roomprove{
            	height: 1.5rem;
            	background: #f9f9f9;
            	.roomprove1{
            		margin-left: 0.2rem;
            		font-size: 16px;
	            	font-weight: bold;
            	}
            	.roomprove2{
            		font-size: 14px;
            		color: #333333;
            		margin-left: 0.2rem;
            		margin-top: 0.1rem;
            		.roomprove2span2{
            			color: #666;
            			margin-left: 2.4rem;
            		}
            		
            	}
            	.roomprove3{
            		font-size: 14px;
            		color: #333333;
            		margin-left: 0.2rem;
            		margin-top: 0.12rem;
            		.roomprove3span2{
            			color: #666;
            			margin-left: 2.4rem;
            		}
            	}
            	.roomprove4{
            		font-size: 14px;
            		color: #333333;
            		margin-left: 0.2rem;
            		margin-top: 0.12rem;
            		.roomprove4span2{
            			color: #666;
            			margin-left: 2.4rem;
            		}
            	}
            }
            .roomintroduce{
            	height: 1.25rem;
            	background: #f9f9f9;
            	.roomintroducetit{
            		height: 0.28rem; 
            		padding-top:0.1rem;
            		.roomintroducetittt{
            			
            			margin-left: 0.2rem;
	            		font-size: 16px;
		            	font-weight: bold;
            		}
            		.roomintroducetit1{
            			color: #017C84;
        				font-size: 14px;
        				margin-left: 2.3rem;
            		}
            		.ff{
            			font-size: 14px;
	            		margin-left: 0.03rem;
            		}
            	}
            	.roomintroducecon{
            		height: 1.1rem;
            		color: #666666;
            		margin-top: 0.05rem;
            		line-height: 0.2rem;
            		font-size: 14px;
            		margin-left: 0.2rem;
            	}
            }
        }
        .conhotdetailfooter{
        	display: flex;
        	height: 0.6rem;
        	
        	.daphone{
        		width: 0.8rem;
        		display: flex;
        		flex-direction: column;
        		text-align: center;
        		.daphoneicon{
        			font-size: 26px;
        			color: #017C84;
        		}
        	
        	}
        	.chatt{
        		width: 0.9rem;
        		display: flex;
        		flex-direction: column;
        		text-align: center;
        		.chatticon{
        			font-size: 26px;
        			color: #017C84;
        		}
        		
        	}
        	.insorder{
        		.bookingButton{
        			width: 1.8rem;
        			height: 0.4rem;
        			border: none;
        			border-radius: 10px;
        			background: #017C84;
        			margin-top: 0.1rem;
        		}
        	}
        }
    }
</style>

