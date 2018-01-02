<template>
    <div>
            nihao 
    </div>
</template>


// import {mapState,mapMutations,mapGetters,mapActions}  from 'vuex'


<script>
	// import axios from 'axios'
	export default{
        name:'cont',
        methods:{
          
        },
        mounted(){
            fetch('/api/position/list')
            .then((response)=>response.json())
            .then((res)=>{
                console.log(res);
            })
        }
       

	}
</script>
<style lang="scss">
    
</style>
