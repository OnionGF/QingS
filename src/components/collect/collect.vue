

<template>
    <div class="home">
       <div class="title">
            <span class="tit">收藏</span>
            <i class="iconfont sharecollect">&#xe61d;</i>
        </div> 
        <div class="nav">
            <router-link to='tag1' class="navl">我的收藏</router-link>
            <router-link to='tag2' class="nav2">浏览记录</router-link>
        </div>
       
        <router-view></router-view>
        <foots></foots> 
      
    </div>
</template>


<script>
    import foots from '../footer/foot'
    export default {
        name:'collect',
        components:{foots},
        data:function(){
            return {

            }
        }
    }
</script>
