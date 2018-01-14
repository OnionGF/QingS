<template>
    <div>
       <div id="checkin">
		   <div class="province"><i class="iconfont">&#xe607;</i>{{position}}</div>
        
        </div>        
    </div>
</template>

<style  scoped>
    
   #checkin{
        height:0.35rem;
        line-height: 0.35rem;
        /* display: flex; */
        justify-content: space-between;

        border-bottom: 1px solid #e5e5e5;
        background: #fff;
        color:#017c84;
        width:3rem;
   }

</style>


<script>

    import {mapActions,mapMutations,mapState}  from 'vuex'
    export default {
        name:'sousuo',
        data(){
            return {
                
            }
        },    
        computed:{
            ...mapState(['position'])
        },
        methods:{
            ...mapActions(['getPosition'])
        },
        mounted(){
            this.getPosition()
        }
    }

</script>

