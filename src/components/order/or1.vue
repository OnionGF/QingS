

<template>
    <div class="or1 or">
        <!-- <div class='content'> -->
            <Box v-for='(nav,i) of navs' :data='navs[i]' :key='i'/>      
        <!-- </div> -->
    </div>
</template>


<script>
    import Box from './box.vue'
    export default {
        name:'or1',
        data(){
            return {
                navs:[
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'代付款'},
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'代付款'},
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'代付款'},
            
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'待评价'},
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'待评价'},
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'待评价'},
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'待评价'},
                     
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'退款'},
                        {name:'主题公寓',date:'09月16日-09月17日',price:'房价：￥6000',ping:'退款'},

                    ]
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

