// index.js
const { route, storage } = require("../../utils/index")
const app = getApp()

Page({
    data: {
        userScan: 0
    },
    naviToDetail(){
        route.navigateTo('../mine/order-detail/index')
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
