<template>
	<view class="content">
		<view class="title">
			<button type="primary" plain="true" @click="getUser">开始小程序之旅</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			getUser() {
				let app = getApp();
				wx.cloud.callFunction({
					name: 'getUserinfo',
				}).then(res => {
					
					// 将用户信息存储到本地存储
					let result = JSON.stringify(res.result);
					result = JSON.parse(result);
					let userInfo = result;
					// console.log(userInfo)
					wx.setStorage('userInfo', userInfo);
					// 存储信息到全局变量
					app.globalData.userInfo = userInfo;
					wx.switchTab({
						url: '../index/index'
					})
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.content {
		height: 100vh;
		width: 100vh;
		/* background: url(../../static/welcome.jpg) no-repeat; */
		background: linear-gradient(left top, #02153d, #003971);
		/* background: linear-gradient(#02153d, #003971); */
		/* background-size: cover; */
	}

	.title {
		position: absolute;
		left: 50%;
		top: 70%;
		transform: translate(-50%, 0);
		color: #fff;
	}

	button {
		border-color: #fff;
		color: #fff;
	}
</style>
