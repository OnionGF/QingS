<template>
	<div class="updateinfo">
		<div class="updateinfotitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="personinfo1">个人信息</span>   
        </div> 
        <div class="updatehead" @click="actionSheet">
			<p class="updateheadtou">头像</p>
			<p class="updateheadimg"><img src="../../style/usage/img/1.png"/></p>
			<i class="iconfont  updateicon1">&#xe609;</i>
		</div>
		<!--<div class="updatenickname" @click="updatenickname(nickname)">
			<p class="updatenicknamekey">昵称</p>
			<p class="updatenicknamevalue" >哈哈哈</p>
			<i class="iconfont  updateicon" >&#xe609;</i>
		</div>-->
		<div class="updatenickname" @click="updatenickname()">
			<p class="updatenicknamekey">昵称</p>
			<p class="updatenicknamevalue">{{nick.nickName}}</p>
			<i class="iconfont  updateicon" >&#xe609;</i>
		</div>
		<div class="updatenickname" @click="updatebrief()">
			<p class="updatenicknamekey">简介</p>
			<p class="updatenicknamevalue">{{nick.introduce}}</p>
			<i class="iconfont  updateicon">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey">手机号</p>
			<p class="updatenicknamevalue">{{nick.phone}}</p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<div class="updatenickname"  @click="updatesex()">
			<p class="updatenicknamekey">性别</p>
			<p class="updatenicknamevalue">{{nick.gender}}</p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey" @click="updateage()">年龄</p>
			<p class="updatenicknamevalue">{{nick.age}}</p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey" @click="updatejob()">职业</p>
			<p class="updatenicknamevalue">{{nick.profession}}</p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		
		<!-- <div class="updatenickname">
			<p class="updatenicknamekey">血型</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div> -->
		<div class="updatenickname">
			<p class="updatenicknamekey" @click="updatecity()">故乡</p>
			<p class="updatenicknamevalue">{{nick.city}}</p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<button class="exitbtn" @click="exitLogin">退出登录</button>
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