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
    console.log('log-----------')
    console.log(menuButtonObject)
    console.log('log-----------')
    // 获取设备信息
    wx.getSystemInfo({
      success: res => {
        // 整个导航栏的高度
        let navHeight = (menuButtonObject.top*3/2) + menuButtonObject.height;
        let navTop = (menuButtonObject.top/3*1.8)+5;
        // 导航栏的高度
        // let nav = navHeight - res.statusBarHeight
 
        // 挂载到全区变量 globalData 上
        this.globalData.navHeight = navHeight
        this.globalData.navTop = navTop
        // this.globalData.nav = nav
        // // 胶囊与左边的距离
        // this.globalData.menuLeft = menuButtonObject.left
        // // 胶囊的高度
        // this.globalData.menuHeight = menuButtonObject.height
        // // 胶囊距离顶部的高度
        // this.globalData.menuBot = menuButtonObject.top - res.statusBarHeight
        // // 整个设备的宽度
        // this.globalData.windowWidth = res.windowWidth
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
