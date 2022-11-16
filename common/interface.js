const {request} = require('../utils/index');

// 获取首页订单列表数据
export const getHomeOrderList = async (params) => {
    return await request.post('/member/order/index', params);
}
// 获取订单详情
export const getOrderDetail = async (params) => {
    return await request.post('/member/order/info', params);
}
// 验证登录状态
export const regLoginStatus = async (params) => {
    return await request.post('/member/member/check-login', params);
}
// 登录 
export const userLogin = async (params) => {
    return await request.post('/member/member/login', params);
}
// 获取手机号
export const getUserPhone = async (params) => {
    return await request.post('/member/member/auth-mobile', params);
}
// 录入订单
export const setRelateMember = async (params) => {
    return await request.post('/member/order/relate-member', params);
}
// 评价列表
export const getInterfaceList = async (params) => {
    return await request.post('/member/comment/index', params);
}
// 评价详情
export const getInterfaceDetail = async (params) => {
  return await request.post('/member/comment/info', params);
}
// 订单录入渠道 
export const getPlatformList = async (params) => {
    return await request.post('/member/order/channels', params);
}
// 添加评价
export const setCommentPost = async (params) => {
    return await request.post('/member/comment/set', params);
}
// 评价列表
export const getCommentList = async (params) => {
    return await request.post('/member/comment/index', params);
}
// 医生列表
export const getDoctorList = async (params) => {
    return await request.post('/merchant/doctor/index', params);
}
// 绑定员工
export const setAuthLogin = async (params) => {
    return await request.post('/member/member/auth-staff', params);
}
// 下账查询
export const getOrderQuery = async (params) => {
    return await request.post('/merchant/order/search', params);
}
// 发货核验
export const getBoundReg = async (params) => { 
    return await request.post('/merchant/shipment/search', params);
}
// 商品查询
export const setOrderData = async (params) => {
    return await request.post('/merchant/goods/search', params);
}
//清点入库
export const setListInBox = async (params) => {
    return await request.post('/merchant/goods/storage', params);
}
//核验提交
export const setBoundUpdate = async (params) => {
  return await request.post('/merchant/shipment/taking', params);
}
//获取用户信息
export const getUserInfoSync = async (params) => {
    return await request.post('/member/member/get-member-info', params);
  }