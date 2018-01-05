<template>
    <div>
       <div id="checkbox">
		   	<button   class='buttonSearch'>搜索</button>
        </div>        
    </div>
</template>


<script>

    export default {
        name:'button1'
    }
  
</script>


<style  scoped>
	#checkbox{
		height: 0.5rem;
		line-height: 50px;
		position: relative;
		display: -webkit-box;
		display: flex;
		background-color: #fff;
		width:3rem;
		display: flex;
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
