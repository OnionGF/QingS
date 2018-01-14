<template>
    <div class="home">     
        <banner/>         
        <div class='searchBox'  >
            <pos/>
            <search/>
            <sousuo :isShow="isShow" />
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
     import conHotdetail from './contentBox/conHotdetail.vue'
  
	export default{
		name:'mains',
        components:{banner,search,pos,sousuo,conHot,conCho,conHotdetail},
        data(){
            return{
                scroll:"",
                isShow:false
            }
        },
        methods:{
            scrollfunc(){
                this.scroll =  document.getElementsByClassName("home")[0].scrollTop
                if( this.scroll>=400){
                    this.isShow = true
                }else{
                    this.isShow = false
                }
            }
        },
        mounted(){
            window.addEventListener('scroll',this.scrollfunc,true)
        }
    }

</script>
<style lang="scss">
    
</style>
