

<template>
    <div class="or5 or">
        <div class="">
           <Box v-for='(nav,i) of navs' :key='i' :data='navs[i]'/>
        </div>
    </div>
</template>


<script>
import Box from './box.vue'
    export default {
        name:'or5',
        data(){
            return{
                navs:['已退款','已退款']
            }
        },
        components:{
            Box
        }
    }
</script>
