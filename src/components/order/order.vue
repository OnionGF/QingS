

<template>
    <div class="home">
        <p class='title'>订单</p>
        <div class="orderNav">          
            <router-link to='or1'>全部</router-link>
            <router-link to='or2' >待付款</router-link>
            <router-link to='or4' >待评价</router-link>
            <router-link to='or5' >退款/售后</router-link>
            <!-- <router-link v-for='item in navs' :key='item.id' path={{item.path}}> -->
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
                // navs:[
                //     {id:1,path:'or1',text:'全部'},
                //     {id:2,path:'or2',text:'代付款'},
                //     {id:3,path:'or4',text:'待评价'},
                //     {id:4,path:'or5',text:'退款/售后'},
                // ]
            }
        }
    }
</script>

<style lang="scss" scoped>
     .router-link-active{
    	border-bottom:3px solid #017c84
   }
</style>
>