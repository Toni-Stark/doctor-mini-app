// pages/shop/index.js
const { route } = require("../../utils/index")
const storage = require("../../utils/storage")
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabList: [
            {
                title: '商品一'
            },
            {
                title: '商品二'
            },
            {
                title: '商品三'
            },
        ],
        tabActive: 0,
        statusList: [
            {
                title: '综合'
            },
            {
                title: '销量'
            },
            {
                title: '上新'
            },
            {
                title: '价格'
            },
        ],
        tabStatus: 0,
    },
    checkTab(e){
        this.setData({
            tabActive: e.currentTarget.dataset.index
        })
    },
    checkTabStatus(e){
        this.setData({
            tabStatus: e.currentTarget.dataset.index
        })
    },
    naviToWeb(){
        // wx.navigateToMiniProgram({
        //     appId: 'wx91d27dbf599dff74',
        //     path: '/pages/item/detail/detail?sku=100007810999',
        //     envVersion: 'release',
        //     success(res) {
        //         // 打开成功
        //       console.log(res, 'success');
        //     }
        // })
        wx.openEmbeddedMiniProgram({
            appId: 'wx91d27dbf599dff74',
            path: '/pages/item/detail/detail?sku=100007810999',
            envVersion: 'release',
            success(res) {
                console.log(res, 'success');
            }
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