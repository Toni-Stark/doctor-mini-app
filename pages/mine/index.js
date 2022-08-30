const { route } = require("../../utils/index")
const storage = require("../../utils/storage")
const app = getApp()

// pages/mine/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nickName: '',
        avatarUrl: ''
    },
    naviToOrderList(){
        route.navigateTo('./order-list/index')
    },
    naviToEvaluateList(){
        route.navigateTo('./evaluation-list/index')
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
        this.naviToRegister()
        let headerHeight = app.globalData.navHeight
        let navTop = app.globalData.navTop
        this.setData({
            height: headerHeight,
            navTop: navTop
        })
    },
})