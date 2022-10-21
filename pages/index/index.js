// index.js
const { route, storage } = require("../../utils/index")
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
    userScan: 0
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
  regPermissions(){
    let nickName = storage.getStorageSync('nickName');
    if (typeof this.getTabBar === 'function') {
        let userScan = nickName ? 1 : 0;
        this.setData({
            userScan
        })
    }
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
            activeIdx: 0
        })
    };
    this.regPermissions();
  },
  onShareAppMessage(){
      return {
          title: '药药线上通',
          path: '/pages/index/index'
      }  
  }
})
