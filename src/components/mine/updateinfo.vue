<template>
	<div class="updateinfo">
		<div class="updateinfotitle"> 
		    <i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="personinfo1">个人信息</span>   
        </div> 
        <div class="updatehead" @click="actionSheet">
			<p class="updateheadtou">头像</p>
			<p class="updateheadimg"><img src="../../style/usage/img/1.png"/></p>
			<i class="iconfont  updateicon1" @click="updatehead()">&#xe609;</i>
		</div>
		<div class="updatenickname" @click="updatenickname()">
			<p class="updatenicknamekey">昵称</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon" >&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey">简介</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey">性别</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey">年龄</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey">职业</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey">星座</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey">血型</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<div class="updatenickname">
			<p class="updatenicknamekey">故乡</p>
			<p class="updatenicknamevalue"></p>
			<i class="iconfont  updateicon" @click="updateinfo()">&#xe609;</i>
		</div>
		<button class="exitbtn" @click="gologin()">退出登录</button>
        <mt-actionsheet :actions="actions" v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>


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
				sheetVisible: false
			}
		},
		methods: {
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
			}
		}
	}
</script>

<style>
</style>