

<template>
    <div class="foot">
        <ul>
           <!-- <li @click='turnout(nav.name)' :key='nav.id' v-for='nav of navs' >
               <i class='iconfont'>&#xe652;</i>
               
               <b>{{nav.content}}</b>   
            </li> -->
            <router-link tag='li' to='mains'>
                <i class="iconfont">&#xe535;</i>
                <b>首页</b>
            </router-link> 
            <router-link tag='li' to='tracks'>
                <i class="iconfont">&#xe652;</i>
                <b>消息</b>
            </router-link> 
            <router-link tag='li' to='collect'>
                <i class="iconfont">&#xe502;</i>
                <b>收藏</b>
            </router-link> 
            <router-link tag='li' to='order'>
                <i class="iconfont">&#xe501;</i>
                <b>订单</b>
            </router-link>
             <router-link tag='li' to='mine'>
                <i class="iconfont">&#xe604;</i>
                <b>我的</b>
            </router-link>
        </ul>
    </div>
</template>


<script>
    export default {
        name:'foot',
        data:function(){
           return {
            //      navs:[
            //     {id:1,content:'首页',name:'mains',font:"&#xe604;"},
            //     {id:2,content:'订单',name:'tracks',font:"&#xe624;"},
            //     {id:3,content:'收藏',name:'collect',font:'&#xe72d;'},
            //     {id:4,content:'消息',name:'order',font:'&#xe6bf;'},
            //     {id:5,content:'我的',name:'mine',font:'&#xe631;'},
            // ]
           }
        },
        methods:{
            turnout(name){
                this.$router.push({name})
                // this.toggleNav()
            }
        }
    }
    // $('ul').on('li',click,function(){
    //     console.log(this)
    // })

</script>
