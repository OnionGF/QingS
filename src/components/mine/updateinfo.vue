<template>
	<div class="updateinfo">
		<div class="updateinfotitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="personinfo1">个人信息</span>   
        </div> 
        <div class="updatehead" @click="actionSheet">
			<div class="updateheadtou">头像</div>
			<div class="updateheadimg"><p class="ppimg"><img src="../../style/usage/img/1.png"/></p><i class="iconfont  updateicon1">&#xe609;</i></div>
			
		</div>
		<div class="updatenickname" @click="updatenickname()">
			<div class="updatenicknamekey">昵称</div>
			<div class="updatenicknameright">

				<span class="updatenicknamevalue" >{{nick.nickName}}</span>

				<i class="iconfont  updateicon" >&#xe609;</i>
			</div>
			
		</div>
		<div class="updatenickname" @click="updatebrief()">
			<div class="updatenicknamekey">简介</div>
			<div class="updatenicknameright">
				<span class="updatenicknamevalue" >{{nick.nickName}}</span>
				<i class="iconfont  updateicon" >&#xe609;</i>
			</div>
		</div>
	
	
		<div class="updatenickname" @click="updatesex()">
			<div class="updatenicknamekey">性别</div>
			<div class="updatenicknameright">
				<span class="updatenicknamevalue" >{{nick.gender}}</span>
				<i class="iconfont  updateicon" >&#xe609;</i>
			</div>
		</div>
		<div class="updatenickname"@click="updateage()">
			<div class="updatenicknamekey">年龄</div>
			<div class="updatenicknameright">
				<span class="updatenicknamevalue" >{{nick.age}}</span>
				<i class="iconfont  updateicon" >&#xe609;</i>
			</div>
		</div>
		<div class="updatenickname"  @click="updatejob()">
			<div class="updatenicknamekey">职业</div>
			<div class="updatenicknameright">
				<span class="updatenicknamevalue" >{{nick.profession}}</span>
				<i class="iconfont  updateicon" >&#xe609;</i>
			</div>
		</div>
		<div class="updatenickname"  @click="updatecity()">
			<div class="updatenicknamekey">城市</div>
			<div class="updatenicknameright">
				<span class="updatenicknamevalue" >{{nick.city}}</span>
				<i class="iconfont  updateicon" >&#xe609;</i>
			</div>
		</div>
        <mt-actionsheet :actions="actions" v-model="sheetVisible">
		</mt-actionsheet>
		<!--{{nicknameone}}-->
	</div>
</template>

<script>

	import {mapState,mapActions} from 'vuex';
	export default{
		name:'updateinfo',
	   	data() {
			return {
				actions: [{
						name: '拍照',
						method: this.getCamera()
					},
					{
						name: '从相册中选择',
						method: this.getLibrary
					}
				],
				sheetVisible: false,
//				nickname:'ddd',
//				nicknameone:JSON.parse(localStorage.user_info?localStorage.user_info:'[]')
			}
		},
		computed:{
			...mapState(['nick'])
		},
		methods: {
			...mapActions(['exitLogin']),
			actionSheet: function() {
				this.sheetVisible = true;
			},
			getCamera: function() {
				console.log("打开照相机")
			},
			getLibrary: function() {
				console.log("打开相册")

			},
			updateinfo:function(){
				this.$router.push({
					name: "updateinfo"
				});

			},
			updatenickname:function(){
				this.$router.push({
					name: "updatenickname"
				});	
			},

			updatebrief:function(){
				this.$router.push({
					name: "updatebrief"
				});
			},
			updatesex:function(){
				this.$router.push({
					name: "updatesex"
				});
			},
			updateage:function(){
				this.$router.push({
					name: "updateage"
				});
			},
			updatejob:function(){
				this.$router.push({
					name: "updatejob"
				});
			},
			updatecity:function(){
				this.$router.push({
					name: "updatecity"
				});
			},
			
		},
//		mounted(){
//			this.getNickname()
//			this.nicknameone = JSON.parse(localStorage.user_info?localStorage.user_info:'[]')
//		}
	}
</script>

<style>
</style>