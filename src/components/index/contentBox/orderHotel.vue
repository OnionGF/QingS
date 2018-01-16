<template>
  <div class="orderHotel">
     <header>
        <i class="iconfont back posback" onclick="javascript:history.back(-1);">&#xe624;</i> 确认订单
     </header>
     <section>
     <div>
        <div class="orderMes">
            <img src="https://i1.mayi.com/mayi87/M23/KF/PK/WNBJXNYSKY77Y4BQLFSCFNY2EVZHNM.jpg_/both/640x460/quality/65/unsharp/true/format/jpg" alt="">
            <div class="hotelMes">
                <p>常营 草房 物资学院 一居室民宿...></p>
                <i>整租·1室·1厅·可住2人</i>
            </div>
        </div>
        
        <p class="title">此房源为速订房源，无需房东确认 支付后即预定成功</p>
     </div>

     <div class='orderDate'>
        <search/>
     </div>
     <div class="hotelNum">
        <p> 房间数量：<span>1</span></p>
        <p> 入住人数：<input type="text" placeholder="请填写入住人数"></p>
     </div>
     <div class="hotelNum">
        <p>联系人：<input type="text" placeholder="请填写联系人姓名"></p>
        <p>手机号：<input type="text" placeholder="请输入您的手机号码"></p>
     </div>
     <div class="hotel">
        <p>开具发票</p>         
        <p><input type="checkbox">我已阅读并同意房东<i>《交易规则》</i></p>
     </div>
     <div class="money">
        <p>线上支付（含押金）：<span>￥568</span></p> 
        <button>提交订单</button>
     </div>
    </section> 
  </div>
</template>
<script>
import search from '../searchBox/search.vue'
export default {
    name:'orderHotel',
    data(){
        return{

        }
    },
    components:{
        search
    }
}
</script>

<style lang="scss" scoped>
.orderHotel{
    // background:#f7f7f7;
     header{
            height: 0.44rem;
            background:#f7f7f7;
            text-align: center;
            line-height: 0.44rem;
            font-size: 0.18rem;
            padding:0 -0.15rem;
        }
    section{
        padding:0.13rem;

       
        .orderMes{
            height: 0.97rem;
            display: flex;
            border-bottom:1px solid #ccc;
            background:#fff;
            .hotelMes{
                justify-content: space-around;
                margin-bottom:0.2rem;
                margin-left:0.1rem;
                i{
                    color:#ccc
                }
            }
            img{
                height:0.86rem;
                width:1.2rem;
            }
            .hotelMes{
                display: flex;
                justify-content: space-around;
                flex-direction: column;
            }
        }
        .title{
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.12rem;
            margin-left:0.1rem;
            color:rgb(170, 168, 168);
        }
        .orderDate{
            display: flex;
            justify-content: center;
            align-items: center;
            border-top:1px solid #ccc;
            margin-bottom:0.05rem;
        }
        .hotelNum{
            height: 1.1rem;
            margin-bottom:0.05rem;
            border-top:1px solid #ccc; 
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            padding-top:0.2rem;
            input{
                border:none;
            }
        }
        .hotel{
            height: 0.75rem;
            margin-bottom:0.05rem;
            border-top:1px solid #ccc; 
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            padding-top:0.2rem;
            input{
                border:none;
            }
        }
        .people{
            input{
                border:none;
            }
        }
        .money{
            border-top:1px solid #ccc;
            display: flex;
            justify-content: space-around;
            align-items: center;
            p{
                height: 0.4rem;
                font-size:0.18rem;
                span{
                    color:rgb(155, 51, 51);
                    font-size:0.35rem;
                    font-weight:900;
                }
            }
            button{
                width:2rem;
                height: 0.4rem;
                background:#2e8d91;
                border:none;
                border-radius: 0.15rem;
                margin-top:0.2rem;
            }
        }
       
    }

}

</style>
