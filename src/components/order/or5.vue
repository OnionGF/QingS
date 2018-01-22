

<template>
    <div class="or5 or">
        <!-- <div class='content'> -->
           <Box v-for='(nav,i) of navs' :key='i' :data='navs[i]'/>
        <!-- </div> -->
    </div>
</template>


<script>
import Box from './box.vue'
    export default {
        name:'or5',
        data(){
            return{
                navs:[
                        {name:'主题公寓',date:'下单时间：09月16日-09月17日',price:'￥600',ping:'已退款'},
                        {name:'主题公寓',date:'下单时间：09月16日-09月17日',price:'￥600',ping:'已退款'},
                      
                    ]
            }
        },
        components:{
            Box
        }
    }
</script>
