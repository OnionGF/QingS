<template>
     <div>
       <div id="checkinout">
            <div id="firstSelect" style="width:100%;">
                <div class="Date_lr" style="float:left;">
                    <P>入住</p>
                        <input id="startDate" type="text" value=""style="" readonly>
                    </div>
                    <div class="Date_lr" style="float:right;">
                        <p>离店</p>
                        <input id="endDate" type="text" value="" style="" readonly>
                    </div>
                    <span class="span21">共<span class="NumDate">1</span>晚</span>
                </div>
            </div>
            <div class="mask_calendar">
            <div class="calendar"></div>
        </div>        
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
    export default {
		name:'ban',
		data:function(){
			return {
				
			}
		},
		computed:{
			...mapState(['position'])
		},
		methods:{
			search(){
				let that = this;
				console.log("1")
				  $(function(){
					$('#firstSelect').on('click',function () {
						$('.mask_calendar').show();
					});
					$('.mask_calendar').on('click',function (e) {
						if(e.target.className == "mask_calendar"){
							$('.calendar').slideUp(200);
							$('.mask_calendar').fadeOut(200);
						}
					})
					$('#firstSelect').calendarSwitch({
						selectors : {
							sections : ".calendar"
						},
						index : 4,      //展示的月份个数
						animateFunction : "slideToggle",        //动画效果
						controlDay:true,//知否控制在daysnumber天之内，这个数值的设置前提是总显示天数大于90天
						daysnumber : "90",     //控制天数
						comeColor : "#017c84",       //入住颜色
						outColor : "#017c84",      //离店颜色
						comeoutColor : "#017c84",        //入住和离店之间的颜色
						callback :function(){//回调函数
							$('.mask_calendar').fadeOut(200);
							var startDate = $('#startDate').val();  //入住的天数
							var endDate = $('#endDate').val();      //离店的天数
							var NumDate = $('.NumDate').text();    //共多少晚
							that.startDate(startDate);
							that.endDate(endDate);
						},   
						comfireBtn:'.comfire'//确定按钮的class或者id
					});
					var b=new Date();
					var ye=b.getFullYear();
					var mo=b.getMonth()+1;
					mo = mo<10?"0"+mo:mo;
					var da=b.getDate();
					da = da<10?"0"+da:da;
					$('#startDate').val(ye+'-'+mo+'-'+da);
					b=new Date(b.getTime()+24*3600*1000);
					var ye=b.getFullYear();
					var mo=b.getMonth()+1;
					mo = mo<10?"0"+mo:mo;
					var da=b.getDate();
					da = da<10?"0"+da:da;
					$('#endDate').val(ye+'-'+mo+'-'+da);
				});				
			},
			...mapActions(['startDate','endDate'])
		},
		mounted(){
			this.search()			
		}
    }
  
</script>


<style  scoped>
    .Date_lr{width:50%;text-align:center;}
	 .span21{
	 	position: absolute;
	 	top: 50%;
	 	left: 50%;
	 	-webkit-transform: translate(-50%,-50%);
	 	transform: translate(-50%,-50%);
	 	font-size:14px;
	 	color: #666;
	 	border: 1px solid #e5e5e5;
	 	padding:2px 8px;
		line-height: 0.1rem;
	 	border-radius: .2rem;
    	background-color: #fff;
	 }
	#checkinout{
		height: 0.6rem;
		line-height: 0.4rem;
		position: relative;
		display: -webkit-box;
		display: flex;
		background-color: #fff;
		width:3rem;
        display: flex;
        /* border-top:1px solid #ccc; */
		justify-content: center;
		align-items: center;
	}
	#firstSelect p{line-height:0.2rem;color: #999;font-size:0.12rem;}
	#startDate{border:0;position: absolute;left: 0;margin: 0 auto;width: 50%;font-size: 0.16rem;color: #017c84;text-align: center;height:0.20rem;}
	#endDate{border:0;position: absolute;right: 0;margin:auto 0;width:50%;font-size: 0.16rem;color: #017c84;text-align: center;height:0.20rem;}
	.mask_calendar {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.4);
		display: none;
		z-index: 9999;
	}
	.calendar {
		height: 4rem;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.animated {
		animation-duration: 1s;
		animation-fill-mode: both;
	}
	@keyframes slideInDown {
		from {
			transform: translate3d(0, -100%, 0);
			visibility: visible;
		}

		to {
			transform: translate3d(0, 0, 0);
		}
	}
	.slideInDown {
		animation-name: slideInDown;
	}
</style>
