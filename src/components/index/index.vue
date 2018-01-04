<template>
    <div class="home">
    
        <banner/>
        <!-- <cont/> -->
        <div class='search-top'>
            search-top 顶部的搜索框
        </div>
        <div class='searchBox'>
            <pos/>
            <search/>
            <sousuo/>
            <button1/>
        </div>
      
        <div class="con">  
           
            <div>
                <div>123</div>
                <div>123</div>   
                <div>123</div>
                <div>123</div>
                <div>123</div>   
                <div>123</div>
                <div>123</div>
                <div>123</div>   
                <div>123</div>
            </div>  
           
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
    import cont from "./content.vue"
    import axios from 'axios'
    // import chec from 'checkout.vue'
	export default{
		name:'mains',
        components:{banner,cont,search,pos,sousuo,button1}
      
	}
</script>
<style lang="scss">
    
</style>
