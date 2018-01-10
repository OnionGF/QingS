<template>
    <div class="con-hotdetail">
        <div class="topimg">
             <img src="https://i1.mayi.com/mayi13/M48/EW/RF/F8BMWR2TH9KYSWKU4DWTAMMUS6B4K6.jpg_670hc.jpg"/>
        </div>
        <div class="conhotcontent">
            <p class="conhottitle">哈哈哈哈哈公寓</p>
            <div class="roominfo">
                <div class="boosinfo">
                    <p class="roomtype">合住房间一室两床</p>
                    <p><span class="boosn">房东:</span><span class="boosname">Grace</span></p>
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
             	    <span>最多住两人</span>
                </div>
                 <div class="configuretype">
             	    <i class="iconfont roomone">&#xe66d;</i>
             	    <span>一间卧室</span>
                </div>
                 <div class="configuretype">
             	    <i class="iconfont bedone">&#xe61b;</i>
             	    <span>一张床</span>
                </div>
                 <div class="configuretype">
             	    <i class="iconfont toilet">&#xe665;</i>
             	    <span>一间卫生间</span>
                </div>
           
            </div>
        </div>
        <div class="fff">

        </div>

      
    </div>
</template>





<script>
	import axios from 'axios'
	export default{
        name:'conHotdetail',
        data:function(){
            return {
              
            }
        },
        methods:{
           
		},
		created(){
		
        },
        mounted(){
            console.log(this.$route.params.id);
        }
	}
</script>
<style lang="scss">
.con-hotdetail{
     display:flex;
           flex-direction: column;

        .topimg{
            width: 100%;
            height: 2.63rem;
            img{
                width: 100%;
                height: 100%;

            }
        }
        .conhotcontent{
           height: 100%;
           flex:1;
           display:flex;
           flex-direction: column;
       
            .conhottitle{
                height: 0.7rem;
                line-height: 0.7rem;
                font-size: 24px;
                font-weight: bold;
                margin-left: 0.25rem;
                color: #484848;
            }
            .roominfo{
                flex:1;
                display: flex;
                justify-content: space-between;
                height: 0.92rem;
                .boosinfo{
                    margin-left: 0.25rem;
                    .roomtype{
                        font-size: 20px;
                        color: #484848;
                    }
                    .boosn{
                        font-size: 16px;
                        color: #484848;
                    }
                    .boosname{
                        font-size: 16px;
                        color: #398288;
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
                height: 0.98rem;
                width: 100%;
                border-bottom: 1px solid #eaeaea;
                .configuretype{
                    display: flex;
                    flex-direction: column;
                    
                }
            }
        }
        .fff{
            height: 0.44rem;
        }
        }
</style>
