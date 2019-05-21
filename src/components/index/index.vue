<template>
    <div class="home">
        <div @click="doubleSon">点我</div>

        <banner/>         
        <div class='searchBox'  >
            <pos/>
            <search/>
            <sousuo :isShow="isShow" />
        </div>   
        <div style="height:1.7rem;">
        </div>  
        <div class="con">            
                <conHot/> 
                <div class="adver"><img style='width:100%' src='/static/img/adver.jpg'/></div>        
                <lunbo/> 
                <conCho/>  
                <!-- <order/>          -->
        </div>
        <backTop ref="son"/>     
        <foots></foots>
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
    import lunbo from './contentBox/lunbo.vue'
    import order from './contentBox/order.vue'
    import conHotdetail from './contentBox/conHotdetail.vue'
    import backTop from './backTop'
    import foots from '../footer/foot'
    import {mapState, mapMutations} from 'vuex'
  
	export default{
		name:'mains',
        components:{banner,search,pos,sousuo,conHot,conCho,conHotdetail,foots,backTop,lunbo,order},
        data(){
            return{
                scroll:"",
                isShow:false
            }
        },
        methods:{
            doubleSon(){
                console.log('点我了',this)
                this.$refs.son.onDouble();
                this.changetest('changetest')
            },
            scrollfunc(){
                this.scroll =  document.getElementsByClassName("home")[0].scrollTop
                console.log(this.scroll)
                if( this.scroll>=400){
                    this.isShow = true
                }else{
                    this.isShow = false
                }
            },
            ...mapMutations(['changetest'])

        },
        computed: {
            ...mapState(['test']),
        },
        mounted(){   
            window.addEventListener('scroll',this.scrollfunc,true)
        }

    }

</script>
<style lang="scss">
  
</style>
