

<template>
    <div class="mysearch">
        <header class="mysearchtop">
           <i class="fa fa-angle-left leftarror"  onclick="javascript:history.back(0);"></i>
           <div class="searchbox"><i class="iconfont searchicon">&#xe625;</i><span class="searchcity">北京</span><input type="text" id="searchtxt" placeholder="搜索位置，地标，房源标题"/></div>
        </header>
        <section class="mysearchsection">
            <div class="searchchoose">
                <div class="sleeptime">
                    <p><span class="spantit">住12/13</span> <i class="fa fa-angle-down arrowxia"></i></p>
                    <p><span class="spantit">退12/14</span></p>
                </div>
                <div class="sleeptime">
                    <p><span class="spantit">位置</span><i class="fa fa-angle-down arrowxia"></i></p>
                </div>
                <div class="sleeptime">
                    <p><span class="spantit">推荐排序</span><i class="fa fa-angle-down arrowxia"></i></p>
                </div>
                <div class="sleeptime">
                    <p><span class="spantit">筛选</span><i class="fa fa-angle-down arrowxia"></i></p>
                </div>
            </div>
            <div class="btnchoose">
                <button class="btn">近医院</button>
                <button class="btn">近地铁</button>
                <button class="btn">近火车站</button>
                <button class="btn">视野开阔</button>
            </div>
            <div class="searchcontent">
                <div class="searchimg">
                    <span class="searchpri">¥210</span>
                </div>
                <p class="ptit">胡同民俗|四合院儿(人多请先咨询)</p>
                <p class="ptype">合住房间•1室4床2卫</p>
                <p class="pimg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579789256,2857994698&fm=27&gp=0.jpg"/>
                </p>
            </div>
             <div class="searchcontent">
                <div class="searchimg">
                    <span class="searchpri">¥210</span>
                </div>
                <p class="ptit">胡同民俗|四合院儿(人多请先咨询)</p>
                <p class="ptype">合住房间•1室4床2卫</p>
                <p class="pimg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579789256,2857994698&fm=27&gp=0.jpg"/>
                </p>
            </div>
            <div class="searchcontent">
                <div class="searchimg">
                    <span class="searchpri">¥210</span>
                </div>
                <p class="ptit">胡同民俗|四合院儿(人多请先咨询)</p>
                <p class="ptype">合住房间•1室4床2卫</p>
                <p class="pimg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579789256,2857994698&fm=27&gp=0.jpg"/>
                </p>
            </div>
             <div class="searchcontent">
                <div class="searchimg">
                    <span class="searchpri">¥210</span>
                </div>
                <p class="ptit">胡同民俗|四合院儿(人多请先咨询)</p>
                <p class="ptype">合住房间•1室4床2卫</p>
                <p class="pimg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579789256,2857994698&fm=27&gp=0.jpg"/>
                </p>
            </div>
             <div class="searchcontent">
                <div class="searchimg">
                    <span class="searchpri">¥210</span>
                </div>
                <p class="ptit">胡同民俗|四合院儿(人多请先咨询)</p>
                <p class="ptype">合住房间•1室4床2卫</p>
                <p class="pimg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579789256,2857994698&fm=27&gp=0.jpg"/>
                </p>
            </div>
             <div class="searchcontent">
                <div class="searchimg">
                    <span class="searchpri">¥210</span>
                </div>
                <p class="ptit">胡同民俗|四合院儿(人多请先咨询)</p>
                <p class="ptype">合住房间•1室4床2卫</p>
                <p class="pimg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579789256,2857994698&fm=27&gp=0.jpg"/>
                </p>
            </div>
             <div class="searchcontent">
                <div class="searchimg">
                    <span class="searchpri">¥210</span>
                </div>
                <p class="ptit">胡同民俗|四合院儿(人多请先咨询)</p>
                <p class="ptype">合住房间•1室4床2卫</p>
                <p class="pimg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579789256,2857994698&fm=27&gp=0.jpg"/>
                </p>
            </div>
             <div class="searchcontent">
                <div class="searchimg">
                    <span class="searchpri">¥210</span>
                </div>
                <p class="ptit">胡同民俗|四合院儿(人多请先咨询)</p>
                <p class="ptype">合住房间•1室4床2卫</p>
                <p class="pimg">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579789256,2857994698&fm=27&gp=0.jpg"/>
                </p>
            </div>
            

        </section>
         <!-- <foots></foots> -->
    </div>
</template>


<script>
// import foots from '../../footer/foot'
import {mapActions,mapState} from 'vuex'
    export default {
        name:'mysearch',
        components:{},  
        
    }
</script>

<style lang="scss">
    .mysearch{
        display:flex;
        flex-direction:column;
        .mysearchtop{
            height: 0.48rem;
            background: #017c84;
            position: fixed;
            width:100%;
            z-index: 100;
            top:0;
            .leftarror{
                font-size: 0.4rem;
                color: #ffffff;
                position: absolute;
                top: 0.03rem;
                left: 0.15rem;
            }
            .searchbox{
                width: 3.22rem;
                height: 0.35rem;
                border: 1px solid #fff;
                border-radius: 15px;
                margin-top:0.07rem;
                margin-bottom: 0.07rem;
                margin-left: 0.4rem; 
                overflow: hidden;
                .searchicon{
                    font-size: 24px;
                    color: #fff;
                    font-weight: 100;
                    position: absolute;
                    top: 0.05rem; 
                    left: 0.5rem;
                }
                .searchcity{
                    display: inline-block;
                    margin-top: 0.05rem;
                    margin-left: 0.4rem;
                    font-size: 16px;
                    color: #fff;
                    padding-right: 0.04rem;
                    border-right: 1px solid #fff;
                }
                #searchtxt{
                    width: 2.4rem;
                    height: 0.34rem;
                    color:#fff;
                    background: #017c84;
                    border: none;
                    outline: none;
                    padding-left: 0.08rem;
                } 
                ::-webkit-input-placeholder { /* WebKit browsers */
                    color:#fff;
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
        }
        .mysearchsection{
            flex:1;
            overflow-y: auto;
            .searchchoose{
                display: flex;
                justify-content: space-around;
                height: 0.49rem;
                border-bottom: 1px solid #eeeeee;
                .arrowxia{
                    font-size: 24px;
                    color: #333;
                    margin-top: 0.02rem;
                    margin-left: 0.02rem;
                }
                .spantit{
                    color: #666;
                    margin-top: 0.02rem;
                }
            }

        }
        .btnchoose{
            height: 0.39rem;
            padding-left: 0.1rem;
            .btn{
                margin-top: 0.11rem;
                border: 1px solid #017c84;
                outline: none;
                background: #fff;
                padding: 0.03rem 0.03rem;
                margin-left: 0.1rem;
            }
           
        }
        .searchcontent{
            margin-left: 0.14rem;
            margin-top: 0.18rem;
            margin-bottom: 0.1rem;
            width:93%;
            height: 2.65rem; 
            position: relative;
            .searchimg{
               position: relative;
                height: 2.34rem;
                background: url(http://img2.imgtn.bdimg.com/it/u=2339851502,2316751156&fm=27&gp=0.jpg) no-repeat;
                .searchpri{
                    position: absolute;
                    top:2rem;
                    left: 0.15rem;
                    color:#017c84;
                    font-size: 18px;
                }
            }
            .ptit{
                color:#333333;
                font-size: 16px;
                font-weight: bold;

            }
            .ptype{
                color:#666666;
                font-size: 14px;
            }
            .pimg{
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 50%;
                overflow: hidden;
                position: absolute;
                top:2rem;
                right: 0.13rem;
                img{
                    width: 100%;
                    height: 100%;
                    
                }
            }
        }
    
    }
</style>
