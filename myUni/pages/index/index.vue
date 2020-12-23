<template>
	<view class="content">

			<navigator url="/pages/mark/index?title=mark" hover-class="navigator-hover">
				跳转到新页面
			</navigator>
			<!-- <uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change"></uni-calendar> -->

	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {}
		},
		onLoad() {
			let app = getApp();
			wx.cloud.callFunction({
				name: 'getUserinfo',
			}).then(res => {
				// 将用户信息存储到本地存储
				let userInfo = res.result;
				console.log(userInfo)
				wx.setStorage('userInfo', userInfo);
				// 存储信息到全局变量
				app.globalData.userInfo = userInfo;
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			getU() {
				let app = getApp();
				console.log(app.globalData.userInfo)
			},
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
