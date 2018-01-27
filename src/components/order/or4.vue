

<template>
    <div class="or4 or">
        <!-- <div class='content'> -->
           <Box @click="toEvaluate()" v-for='(nav,i) of navs' :key='i' :data='navs[i]'/>
        <!-- </div> -->
    </div>
</template>


<script>
import Box from './box.vue'
    export default {
        name:'or4',
        data(){
            return{
                 navs:[
                        {name:'主题公寓',date:'下单时间：09月16日-09月17日',price:'期待您的评价！！',ping:'待评价'},
                        {name:'主题公寓',date:'下单时间：09月16日-09月17日',price:'期待您的评价！！',ping:'待评价'},
                        {name:'主题公寓',date:'下单时间：09月16日-09月17日',price:'期待您的评价！！',ping:'待评价'},
                        {name:'主题公寓',date:'下单时间：09月16日-09月17日',price:'期待您的评价！！',ping:'待评价'},
                    
                    ]
            }
        },
        methods:{
            toEvaluate(){
                console.log('123')
                this.$router.push({name:'/writeevaluate'})
                // this.$router.push({path:'writeevaluate'})
            }
        },
        components:{
            Box
        }
    }
</script>
