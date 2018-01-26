<template>
  <div class="orderHotel">
    <header class="mint-header"><div class="mint-header-button is-left"><a href="#/" class="router-link-active">
    <button class="mint-button mint-button--default mint-button--normal">
        <span class="mint-button-icon"><i class="mintui mintui-back"></i></span> 
        <label class="mint-button-text">返回</label></button></a></div> <h1 class="mint-header-title">确认订单</h1>
         <div class="mint-header-button is-right"><button class="mint-button mint-button--default mint-button--normal">
             <span class="mint-button-icon"><i class="mintui mintui-more"></i></span> <label class="mint-button-text">
      </label></button></div></header>
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
        <div class="mint-cell-wrapper">
            <div class="mint-cell-title"><!---->
             <span class="mint-cell-text">开具发票</span> 
             <!----></div> <div class="mint-cell-value">
                 <label class="mint-switch">
                     <input type="checkbox" class="mint-switch-input">
                      <span class="mint-switch-core">
                          </span> <div class="mint-switch-label">
                              </div>
                              </label>
                              
                              </div> 
                              <!----></div>      
        <p><input type="checkbox">我已阅读并同意房东<i>《交易规则》</i></p>
     </div>
     <div class="money">
        <p>线上支付（含押金）：<span>￥568</span></p> 
        <button  @click="subOrder()">提交订单</button>
     </div>
    </section> 
  </div>
</template>
<script>
import search from '../searchBox/search.vue'
import {mapActions} from 'vuex'
export default {
    name:'orderHotel',
    data(){
        return{

        }
    },
    components:{
        search
    },
    methods:{
        ...mapActions(['subOrder'])
    }
}
</script>

<style lang="scss" scoped>
.orderHotel{

    // overflow:auto;
     header{
            background:#017C84;
            opacity:0.7;
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
            .mmint-switch-input{
                background:#2e8d91
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
