const { navigateTo } = require("./utils/router")

// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取胶囊信息
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    let screenObject = wx.getWindowInfo()
    console.log('log-----------')
    console.log(screenObject, menuButtonObject)
    console.log('log-----------')
    // 获取设备信息
    wx.getSystemInfo({
      success: res => {
        // 整个导航栏的高度
        let navHeight = (menuButtonObject.top*3/2) + menuButtonObject.height;
        let navTop = (menuButtonObject.top/3*1.8)+5;
    
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.screenHeight = screenObject.screenHeight;
        this.globalData.paddingTop = screenObject.statusBarHeight + 'rpx';
        // '10px'
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
