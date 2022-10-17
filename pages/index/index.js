// index.js
const { route } = require("../../utils/index")
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    askList: [
        {
            title: '咳嗽是怎么回事'
        },
        {
            title: '呕吐是怎么回事'
        },  
        {
            title: '咳嗽用什么药'
        },  
        {
            title: '感冒的治疗方法'
        },  
        {
            title: '清开灵颗粒的注意事项'
        }  
    ],
  },
  naviToServices(e){
      let title = e.target.dataset.title;
      route.navigateTo('./customer-services/index?title='+title);
  },
  naviToCustomer(){
      route.navigateTo('./customer-services/index');
  },
  naviToRecommend(){
    route.navigateTo('./recommend/index');
  },
  naviToSearch(){
    route.navigateTo('./search-modal/index');
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
        let headerHeight = app.globalData.navHeight;
        let navTop = app.globalData.navTop;
        let paddingTop = app.globalData.paddingTop;
        this.setData({
            height: headerHeight,
            navTop: navTop,
            headerHeight: headerHeight,
            canIUseGetUserProfile: true,
            padding: paddingTop
        })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage(){
      return {
          title: '药药线上通',
          path: '/pages/index/index'
      }  
  }
})
