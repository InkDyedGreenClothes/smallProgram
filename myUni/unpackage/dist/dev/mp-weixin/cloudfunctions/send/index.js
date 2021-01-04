const cloud = require('wx-server-sdk')
cloud.init({
	env: 'messageremind-7gbhvw2b4b1ed74a',
	traceUser: true
});
const db = cloud.database();

exports.main = async (event, context) => {
	try {
		const message = await db.collection('message')
			// 查询条件做了简化，只查询未发送消息
			// 应改为根据当前日期查询当天需要推送，但为推送的消息
			.where({
				done: 'false',
			}).get();
		// 循环消息列表
		const sendPromises = message.data.map(async message => {
			try {
				// 发送订阅消息
				await cloud.openapi.subscribeMessage.send({
					touser: message.touser,
					page: message.page,
					data: message.data,
					templateId: message.templateId,
				});
				// 提交成功后 将消息状态改为已发送
				return db.collapse('message').doc(message._id).update({
					data: {
						done: true,
					}
				})
			}catch (err) {
				concole.log(err);
				return err;
			}
		})
	} catch (e) {
		//TODO handle the exception
		console.log(e)
		return e
	}
}
