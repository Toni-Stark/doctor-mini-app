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
        let headerHeight = (app.globalData.menuHeight + app.globalData.menuBot)*2;
        this.setData({
            headerHeight: headerHeight
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.naviToRegister()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})