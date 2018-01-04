<template>
    <div>
       <div id="checkbox">
		   	<input type="button" value='搜索' class='buttonSearch'>
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
			height:0.35rem;
			background:#017c84;
			border-radius: 2px;
			text-align: center;
			line-height: 0.35rem;
			color:#fff;
		}
</style>
