<template>
    <div class="home">     
        <banner/>    
      
        <div class='searchBox'>
            <pos/>
            <search/>
            <sousuo/>
        </div>
      
        <div class="con">            
          
                <conHot/> 
                <conCho/>        
               
       
        </div>
    </div>
</template>





<script>
	import banner from "./AppBanner.vue"
	import search from "./searchBox/search.vue"
	import pos from "./searchBox/pos.vue"
	import sousuo from "./searchBox/sousuo.vue"
    import axios from 'axios'
    import conHot from './contentBox/conHot.vue'
    import conCho from './contentBox/conChoose.vue'
    // import chec from 'checkout.vue'
	export default{
		name:'mains',
        components:{banner,search,pos,sousuo,conHot,conCho},
    //    methods:{
    //         ...mapActions(['getMes']),
    //         scrollHeigh(){
    //             console.log('index')
    //             $('body').bind('touchmove', function(e) { 
    //                 e.preventdefault();               //禁用默认滚动行为，需要自己实现滚动
    //                 console.log($(this).scrollTop()); // 计算你的屏幕高度
    //             });
    //         }

    //     },
    //     mounted(){
    //         this.scrollHeigh();
    //     }
       
        
      
	}
</script>
<style lang="scss">
    
</style>
