var dev = require('./dev')
var prod = require('./prod')
var app = getApp()

// 导出对应的配置信息.
// 应用级设置. 后面根据这个来搞事情.
module.exports = true ? dev : prod