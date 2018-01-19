

<template>
    <div class="or2 or">
        <!-- <div class='content'> -->
            <Box v-for="(nav,i) of navs" :key='i' :data='navs[i]'/>
        <!-- </div> -->
    </div>
</template>


<script>
import Box from './box.vue'
    export default {
        name:'or2',
        data(){
            return{
                navs:['代付款','代付款','代付款','代付款','代付款','代付款','代付款','代付款','代付款','代付款']
            }
        },
        components:{
            Box
        }
    }
</script>
