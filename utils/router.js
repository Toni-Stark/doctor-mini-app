// 路由处理掉.
const redirectTo = (url, options) => {
    options = options || {}
    options.url = url
    return wx.redirectTo(options)
  }
  
  const navigateTo = (url, options) => {
    options = options || {}
    options.url = url;
    return wx.navigateTo(options)
  }
  
  const switchTab = (url, options) => {
    options = options || {}
    options.url = url;
    return wx.switchTab(options)
  }
  
  const navigateBack = (url, options) => {
    options = options || {}
    options.url = url;
    return wx.navigateBack(options)
  }
  
  
  const reLaunch = (url, options) => {
    options = options || {}
    options.url = url;
    return wx.reLaunch(options)
  }
  
  module.exports = {
    redirectTo: redirectTo,
    navigateTo: navigateTo,
    navigateBack: navigateBack,
    switchTab: switchTab,
    reLaunch: reLaunch
  }