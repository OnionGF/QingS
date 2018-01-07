<template>
	<div class="setupbox">
		<div class="setuptitle">
            <span class="setupt">设置</span>
            <i class="iconfont back">&#xe624;</i>
        </div> 
		<div class="systemnotice">
			<h1>系统通知</h1>
			<div class="newmessage">
				<p class="newtit">新消息</p>
				<p class="send">房东和房客发送</p>
				<mt-switch class="tapswitch" v-model="value"></mt-switch>
			</div>
		</div>
        <div class="prenotice">
			<div class="newmessage">
				<p class="prenot">预定通知</p>
				<p class="neworder">新预订，确认，更改和其他</p>
				<mt-switch class="pretapswitch" v-model="value"></mt-switch>
			</div>
		</div>
	</div>
</template>

<script>

	 export default {
		name:'setup',
		
      
    }
    
</script>

<style>
</style>