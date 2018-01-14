<template>
    <div v-changeClass :class='{searchTop:isShow}'>
        <div id="checkinout ">
		   	<input  v-model="mes" type="text" placeholder="输入位置、地标、房源信息">
        </div>  
        <div id="checkbox">
		   	<button  @click="getMes({place:mes,startDate:startDate,endDate:endDate})" class='buttonSearch'>搜索</button>          
        </div>         
    </div>
</template>


<script>
  import {mapActions,mapState} from 'vuex'
    export default {
        name:'sousuo',
        props:['isShow'],
        data:function(){
            return {
                mes:'',    
            }
        },
        computed:{
            ...mapState(['searchMes','startDate','endDate'])
        },
        methods:{
            ...mapActions(['getMes']),
           
        },
        mounted(){
          
        },
      
    }
  
</script>


<style  scoped>

	input{
        border:0;
        line-height:0.4rem;
    }    
    	#checkbox{
		height: 0.5rem;
		line-height: 50px;
		position: relative;
		display: -webkit-box;
		/* display: flex; */
		background-color: #fff;
		width:3rem;
        display: flex;
        /* border-top:1px solid #ccc; */
		justify-content: center;
		align-items: center;
	}
    .buttonSearch{
			width:2rem;
			height:0.3rem;
			background:#017c84;
			text-align: center;
			line-height: 0.3rem;
			color:#fff;
			border:0;
			border-radius:6px;
		}
</style>
