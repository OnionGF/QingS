<template>

	<div class="home">
		<div class="m-image">
			<div class="title">
				<span>我的</span>
				<i class="iconfont share">&#xe626;</i>
			</div>
			<header @click='login'>
				<div class="person-head" @click="actionSheet">
					<img src="../../style/usage/img/1.png" />
				</div>
				<div  class="person-info">
					<p class="person-info-name"> {{nick.nickName}}</p>
					<p class="person-info-signature">个性签名</p>
				</div>
				<!-- <div class="iconfont personmore" >&#xe609;</div> -->
			</header>
		
		</div>
		<div class="mes">
			<router-link to="/need" class="need">
				<i class="iconfont ineed">&#xe650;</i>
				<span>优惠券</span>
			</router-link>
			
			<router-link to="/collect" class="bankcard">
				<i class="iconfont ibankcard">&#xe610;</i>
				<span>收藏/浏览记录</span>
			</router-link>

			<router-link to="/evaluate" class="evaluate">
				<i class="iconfont ievaluate">&#xe66e;</i>
				<span>我的评价</span>
			</router-link>
			<router-link to="/release" class="release">
				<i class="iconfont irelease">&#xe61e;</i>
				<span>我要发布房源</span>
			</router-link>
			<router-link to="/setup" class="setup">
				<i class="iconfont isetup">&#xe60c;</i>
				<span>设置</span>
			</router-link>
			<router-link to="/connect" class="connect">
				<i class="iconfont iconnect">&#xe681;</i>
				<span>客服及意见反馈</span>
			</router-link>
		</div>
		<foots></foots>
		<mt-actionsheet :actions="actions" v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>
	import foots from '../footer/foot'
	import bus from '../../store/modules/bus.js'
	import {mapState} from 'vuex'
	export default {
		name: 'mine',
		components: {
			foots
		},
		computed:{
			...mapState(['nick'])
		},
		created() {
			var that = this
			// 这个页面必须被加载过，才能成功的被事件总线调用
			bus.$on("loginondata", (val) => {
				console.log('val',val)
				that.data = val
				console.log(that.data)
			})
		},
		mounted() {
			// let that = this
			// that.data = localStorage.getItem("user_info")
			// that.data = JSON.parse(that.data)
			// that.data_nickname = that.data.phone
		},
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
			// updateinfo:function(){
			// 	this.$router.push({
			// 		name: "updateinfo"
			// 	});
			// },
			login(){
				console.log('点击')
				if(this.nick.nickName=='立即登录'){
					this.$router.push({
						name: "password"
					});
				}else{
					this.$router.push({
						name: "updateinfo"
					});
				}
			
			}
		}
	}
</script>
