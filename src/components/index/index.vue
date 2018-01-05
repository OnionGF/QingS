<template>
    <div class="home">     
        <banner/>    
        <div class='search-top'>
            search-top 顶部的搜索框
        </div>
        <div class='searchBox'>
            <keep-alive>
                <pos/>
            </keep-alive>
            <search/>
            <sousuo/>
            <button1/>
        </div>
      
        <div class="con">            
          
                <conHot/> 
                <conCho/>        
               
       
        </div>
    </div>
</template>


// import {mapState,mapMutations,mapGetters,mapActions}  from 'vuex'


<script>
	import banner from "./AppBanner.vue"
	import search from "./searchBox/search.vue"
	import button1 from "./searchBox/button1.vue"
	import pos from "./searchBox/pos.vue"
	import sousuo from "./searchBox/sousuo.vue"
    import axios from 'axios'

    import conHot from './contentBox/conHot.vue'
    import conCho from './contentBox/conChoose.vue'
    // import chec from 'checkout.vue'
	export default{
		name:'mains',
        components:{banner,search,pos,sousuo,button1,conHot,conCho}
      
	}
</script>
<style lang="scss">
    
</style>
