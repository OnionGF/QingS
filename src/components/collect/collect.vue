
<template>
    <div class="home">
       <div class="title">
            <i class="iconfont backdiscount" onclick="javascript:history.back(0);">&#xe624;</i>
            <span class="tit">我的优惠券</span>
        </div> 
        <div class="nav">
            <router-link to='tag1' class="navl">领劵中心</router-link>
            <router-link to='tag2' class="nav2">已领优惠券</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'collect',
        data:function(){
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .title{
        position: relative;
         .backdiscount{
            position: absolute;
            top: 0.01rem;
            left:0.1rem;

        }
    }
   
</style>
