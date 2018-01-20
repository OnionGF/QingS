<template>
	<div class="setupbox">
		<div class="setuptitle">
            <span class="setupt">设置</span>
            <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
        </div> 
		<div class="systemnotice">
			<div class="h2t">系统通知</div>
			<div class="newmessage bb">
				<p class="newtit">新消息</p>
				<p class="send">房东和房客发送</p>
				<mt-switch class="tapswitch" v-model="value"></mt-switch>
			</div>
		</div>
        <div class="prenotice">
			<div class="newmessage">
				<p class="prenot">预定通知</p>
				<p class="neworder">新预订，确认，更改和其他</p>
				<mt-switch class="pretapswitch" v-model="value1"></mt-switch>
			</div>
		</div>
		
		<div class="shortnotice">
			<div class="h2t">短信通知</div>
			<div class="newmessage bb">
				<p class="newtit">预订通知</p>
				<p class="send">新预订，确认，更改和其他</p>
				<mt-switch class="tapswitch" v-model="value2"></mt-switch>
			</div>
		</div>
		<div class="clearing">
			<span class="cleartit">清空缓存</span><i class="iconfont personmore">&#xe609;</i>
		</div>
        <p class="exitp"><input @click="exitLogin"  id="exitbtn" type="button" value="退出登录"/></p>
        </div>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	 export default {
		name:'setup',
		data:function(){
			return{
				value:false,
				value1:false,
				value2:false
			}
		},
		
		methods:{
			...mapMutations(['exitLogin'])
		}

		
      
    }
    
</script>

<style>
</style>