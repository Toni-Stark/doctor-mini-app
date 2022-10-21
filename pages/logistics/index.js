// pages/logistics/index.js
const { route, storage } = require("../../utils/index")
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userScan: 0
    },

    naviToQuery(){
        route.navigateTo('./query-code/index');
    },
    naviToOrder(){
        route.navigateTo('./order-code/index');
    },
    naviToBound(){
        route.navigateTo('./bound-code/index');
    },
    naviToSearch(){
        route.navigateTo('./search-code/index');
    },
    regPermissions(){
        let nickName = storage.getStorageSync('nickName');
        if (typeof this.getTabBar === 'function') {
            let userScan = nickName ? 1 : 0;
            console.log(userScan)
            this.setData({
                userScan:1
            })
        }
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let headerHeight = app.globalData.navHeight;
        let navTop = app.globalData.navTop;
        let paddingTop = app.globalData.paddingTop;
        this.setData({
            height: headerHeight,
            navTop: navTop,
            padding: paddingTop
        })
    },
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                activeIdx: 2
            })
        }
        this.regPermissions();
    },
})