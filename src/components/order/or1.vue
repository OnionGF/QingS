

<template>
    <div class="or1 or">
        <div>
            <Box v-for='(nav,i) of navs' :data='navs[i]' :key='i'/>      
        </div>
    </div>
</template>


<script>
    import Box from './box.vue'
    export default {
        name:'or1',
        data(){
            return {
                navs:['待评价','已退款','已退款','已退款','已退款','代付款','代付款','代付款']
            }
        },
        components:{
            Box
        }
    }
</script>

<style lang="scss" scoped>
  .box{
  	
  }
</style>

