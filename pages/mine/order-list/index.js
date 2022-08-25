const { route } = require("../../../utils/index")
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    back(){
        route.navigateBack(1)
    },
    naviToDetail(){
        route.navigateTo('../order-detail/index')
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
})