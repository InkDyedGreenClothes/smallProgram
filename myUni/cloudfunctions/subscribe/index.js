const cloud = require('wx-server-sdk')
cloud.init({
	env: 'messageremind-7gbhvw2b4b1ed74a',
	traceUser: true
});
const db = cloud.database();

exports.main = async (event, context) => {
	try {
		const {
			OPENID
		} = cloud.getWXContext();
		// 在云开发数据库中存储用户订阅的数据
		const result = await db.collection('message').add({
			data: {
				touser: OPENID, // 订阅者openid
				page: 'index', // 订阅消息卡片点击后打开页面
				data: event.data, // 订阅消息的数据
				tamplateid: event.tamplateId, // 定于消息模板ID
				done: false, // 消息发送状态设置为false
			}
		})
		return result;
	} catch (e) {
		//TODO handle the exception
		console.log(e);
		return e;
	}
}
