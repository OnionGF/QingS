

<template>
    <div class="or4 or">
        <div>
           <Box v-for='(nav,i) of navs' :key='i' :data='navs[i]'/>
        </div>
    </div>
</template>


<script>
import Box from './box.vue'
    export default {
        name:'or4',
        data(){
            return{
                navs:['待评价','待评价','待评价','待评价','待评价','待评价','待评价']
            }
        },
        components:{
            Box
        }
    }
</script>
