<template>
    <div class="container">
        <router-view></router-view>
       
<!--         
        <div class='wrap'></div> -->
      

        <div class="mark  animated"></div>
       
    </div>
</template>



<script>
// import foots from './components/footer/foot.vue'
export default {
    name :'app',
    components:{
       
    },
    methods:{
        //启动页
        load(){
            setTimeout(() => {
                $('.mark').addClass('fadeOut')
            },1500);
            setTimeout(()=>{
                 $('.mark').css({
                    display:'none'
                })
            },2000)
        }
    },
    mounted(){
        this.load()
        //foots
    }
}
</script>

<style lang="scss">
    .mark{
        width:100%;
        height:100%;
        position: fixed;
        z-index:10000;
        left: 0;
        top:0;
        right:0;
        bottom:0;
        background:url('/static/img/index.jpg') no-repeat;
        background-size:contain;
    }
</style>
