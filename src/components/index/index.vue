<template>
    <div class="home">
    
        <banner/>
        <!-- <cont/> -->
        <div class='search-top'>
            search-top 顶部的搜索框
        </div>
        <div class="con">  
            <div>
                <search></search>
                <div>123</div>
                <div>123</div>
               
            </div>       
        </div>
    </div>
</template>


// import {mapState,mapMutations,mapGetters,mapActions}  from 'vuex'


<script>
	import banner from "./AppBanner.vue"
	import search from "./search.vue"
    import cont from "./content.vue"
    import axios from 'axios'
	export default{
		name:'mains',
        components:{banner,cont,search}
      
	}
</script>
<style lang="scss">
    
</style>
