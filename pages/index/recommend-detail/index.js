// pages/index/recommend-detail/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: '无痛分娩'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.title){
            this.setData({
                title: options.title
            })
        }
    },
})