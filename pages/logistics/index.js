// pages/logistics/index.js
const { route } = require("../../utils/index")
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    naviToOrder(){
        route.navigateTo('./order-code/index');
    },
    naviToBound(){
        route.navigateTo('./bound-code/index');
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
})