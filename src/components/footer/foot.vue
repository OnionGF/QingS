

<template>
    <div class="foot">
        <ul>
           <router-link tag='li' :key='nav.id' v-for='nav of navs' :to="{name:nav.path}">
               <i class="footer" :class='nav.class'></i>               
               <b>{{nav.text}}</b>   
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
                navs:[
                {id:1,text:'首页',icon:'home',path:'mains',class:'foot1'},
                {id:2,text:'消息',icon:'commenting-o',path:'tracks',class:'foot2'},
                {id:3,text:'订单',icon:'clipboard',path:'or1',class:'foot3'},
                {id:4,text:'我',icon:'user-o',path:'password',class:'foot4'}
            ]        
           }
        },
        methods:{
           
        }
    }
 
</script>


<style>
    .footer{
        width:0.25rem;
        height: 0.25rem;
        background:url(/static/img/foot.png)  no-repeat center; 
        background-size:  100% 0.25rem;

    }
    .foot1{
        background-position:0 -2px; 
    }
</style>
