

<template>
    <div class="foot">
        <ul class="aa">
           <!-- <li @click='turnout(nav.name)' :key='nav.id' v-for='nav of navs' >
               <i class='iconfont'>&#xe652;</i>
               
               <b>{{nav.content}}</b>   
            </li> -->
            <router-link tag='li' class="aa" :to="{name:'mains'}">
                <i class="iconfont homeicon">&#xe61a;</i>
                <b>首页</b>
            </router-link> 
            
            <router-link tag='li' class="bb" :to="{name:'tracks'}">
                <i class="iconfont homeicon">&#xe60d;</i>
                <b>消息</b>
            </router-link> 
<!-- 
            <router-link tag='li' :to="{name:'tag1'}">
                <i class="iconfont">&#xe502;</i>
                <b>收藏</b>
            </router-link>  -->

            <router-link tag='li' class="cc" :to="{name:'or1'}">
                <i class="iconfont homeicon">&#xe608;</i>
                <b>订单</b>
            </router-link>

             <router-link tag='li'  class="dd" :to="{name:'password'}">
                <i class="iconfont homeicon">&#xe619;</i>
                <b>我的</b>
            </router-link>
        </ul>
    </div>
</template>


<script>
    // import Vue from  'vue'
    // Vue.component()

    export default {
        name:'foot',
        data:function(){
           return {  
           	
           }
        },
        methods:{
            turnout(name){
                this.$router.push({name})
                // this.toggleNav()
            },
            changeColor(){
                // console.log('事件委托')
               
                $('ul').on('click','li',function(){
                    // console.log($(this).children)
                    $('li').css({
                        color:'#017c84'
                    })
                    $(this).css({
                        color:'#53d1d8'
                    })
                   
                })
            }
        },
        mounted(){
            this.changeColor()
        }
    }
 
</script>


<style scoped>
	/*.{
		color:#333333;
	}*/
   .router-link-active{
   	color: #017c84 !important;
   }
</style>
