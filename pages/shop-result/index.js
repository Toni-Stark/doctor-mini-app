const { route } = require("../../utils/index")
const storage = require("../../utils/storage")
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShow: false,
        shopList: ['京东','美团','饿了么','淘宝','拼多多'],
        selectValue: ''
    }, 
    naviBack(e){
        route.navigateBack(1)
    },
    delStatus(e){
        this.setData({
            selectValue: '',
            isShow: false
        })
    },
    selectStatus(e){
        this.setData({
            selectValue: e.currentTarget.dataset.title,
            isShow: false
        })
    },
    onFocus(){
        this.setData({
            isShow: !this.data.isShow
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let headerHeight = app.globalData.navHeight
        let navTop = app.globalData.navTop
        this.setData({
            height: headerHeight,
            navTop: navTop
        })
    },
})