const cloud = require('wx-server-sdk');

cloud.init({
	env: 'messageremind-7gbhvw2b4b1ed74a',
	traceUser: true
});
// const db = cloud.database();
// const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
	
	// await db.collection('information').add({
	// 	data: {
	// 		openId: OPENID,
	// 		appId: APPID,
	// 		unitId: UNITID,
	// 		nickName: NICKNAME
	// 	}
	// })
	
	// 这里获取到的 openId、 appId 和 unionId 是可信的，注意 unionId 仅在满足 unionId 获取条件时返回
	let {
		OPENID,
		APPID,
		UNITID,
		NICKNAME
	} = cloud.getWXContext();
	return {
		OPENID,
		APPID,
		UNITID
	}
}
