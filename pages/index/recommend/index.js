// pages/index/recommend/index.js
const { route } = require("../../../utils/index")
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    naviToDetail(){
        route.navigateTo('../recommend-detail/index')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
})