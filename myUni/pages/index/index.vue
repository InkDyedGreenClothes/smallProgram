<template>
	<view class="content">

		<!-- <navigator url="/pages/welcome/index?title=welcome" hover-class="navigator-hover">
			
		</navigator> -->
		<view class="time-interval">
			<view class="time-text">
				{{ setIntervalTime('2020-05-21 21:40:00') }}
			</view>
			<button type="default" @click="messageSubscribe">订阅</button>
		</view>

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
			return {
				interval: null,
			}
		},
		onLoad() {

		},
		onShow() {
			// this.getIntervalTime()
		},
		onHide() {
			console.log('我离开了要清除定时器')
			// clearInterval(this.getIntervalTime())
		},
		methods: {
			messageSubscribe() {
				console.log('消息订阅')
				wx.cloud.callFunction({
					name: 'subscribe',
					data: {
						data: {
							time: '2021-01-04 17:00',
							message: '我是到期时间'
						},
						tamplateid: 'J0G82EiLhgC08TPf6uumsWGia6Snd7NpmGZSUhpEfiQ'
					}
				}).then(res => {
					console.log(res)
				}).catch(err => {
					console.log(err)
				})
			},
			getU() {
				let app = getApp();
				console.log(app.globalData.userInfo)
			},
			change(e) {
				console.log(e);
			},
			getIntervalTime() {
				let startTime = '2020-05-21 21:40:00';
				// ${hours > 9 ? hours : '0' + hours}小时${minutes > 9 ? minutes : '0' + minutes}分钟${seconds > 9 ? seconds : '0' + seconds}秒
				this.setIntervalTime(startTime, 'interval', 'intervalTime')

			},
			setIntervalTime(startTime) {
				let nowDate = new Date();
				let startDate = new Date(startTime);
				let usedTime = nowDate.getTime() - startDate.getTime();
				let days = Math.floor(usedTime / (24 * 3600 * 1000));
				let leave1 = usedTime % (24 * 3600 * 1000)
				let hours = Math.floor(leave1 / (3600 * 1000))
				hours = hours > 9 ? hours : '0' + hours;
				let leave2 = leave1 % (3600 * 1000)
				let minutes = Math.floor(leave2 / (60 * 1000))
				minutes = minutes > 9 ? minutes : '0' + minutes;
				let leave3 = leave2 % (60 * 1000)
				let seconds = Math.floor(leave3 / 1000)
				seconds = seconds > 9 ? seconds : '0' + seconds;
				let dateText = `${days}天`
				return dateText;
				// this[`${intervalTime}`] = dateText;

				// this[`${fn}`] = setInterval(() => {
				// 	if (seconds < 59) {
				// 		seconds++;
				// 	} else {
				// 		seconds = 0;
				// 		if (minutes < 59) {
				// 			minutes++
				// 		} else {
				// 			minutes = 0;
				// 			if (hours < 23) {
				// 				hours++;
				// 			} else {
				// 				seconds = 0;
				// 				days++;
				// 			}
				// 		}
				// 	}
				// 	// ${hours > 9 ? hours : '0' + hours}小时${minutes > 9 ? minutes : '0' + minutes}分钟${seconds > 9 ? seconds : '0' + seconds}秒
				// 	this[`${intervalTime}`] = dateText;
				// }, 1000)
			}
		}
	}
</script>

<style lang="scss">
	.content {
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

		navigator: {
			width: 100vh;
		}

		.time-interval {
			padding: 30px 0;
			width: 100%;
			background: red;

			.time-text {
				color: #fff;
				padding: 0 20px;
			}
		}
	}
</style>
