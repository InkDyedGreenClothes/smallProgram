// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
	env: 'messageremind-7gbhvw2b4b1ed74a',
	traceUser: true
});

// 云函数入口函数
exports.main = async (event, context) => {

  return {
	  sum: event.a + event.b
  }
}