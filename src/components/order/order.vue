

<template>
    <div class="home">
        <p class='title'>订单</p>
        <div class="nav">          
            <router-link to='or1'>全部</router-link>
            <router-link to='or2' >待付款</router-link>
            <router-link to='or3' >待使用</router-link>
            <router-link to='or4' >待评价</router-link>
            <router-link to='or5' >退款/售后</router-link>
        </div>
       
        <router-view></router-view>
        <foots></foots> 
      
    </div>
</template>


<script>
    import foots from '../footer/foot'
    export default {
        name:'order',
        components:{foots},
        data:function(){
            return {

            }
        }
    }
</script>
