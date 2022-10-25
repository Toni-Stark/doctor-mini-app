const { route, storage } = require("../../utils/index")
const app = getApp()

// pages/mine/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nickName: '',
        avatarUrl: '',
        userScan: 0
    },
    naviToOrderList(){
        // route.navigateTo('./order-list/index')
        route.switchTab('../index/index')
    },
    naviToEvaluateList(){
        route.navigateTo('./evaluation-list/index')
    },
    naviToResult(){
        route.navigateTo('../shop-result/index')
    },
    naviToRegister(){
        if(!storage.getStorageSync('nickName')){
            route.navigateTo('./register/index')
        } else {
            let nickName = storage.getStorageSync('nickName') || '点击登录';
            let avatarUrl = storage.getStorageSync('avatarUrl') || '../../img/mine/home-robot.png';
            this.setData({
                nickName: nickName,
                avatarUrl: avatarUrl,
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
        this.naviToRegister()
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                activeIdx: 2
            })
        }
        this.regPermissions();
    },
})