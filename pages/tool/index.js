// pages/tool/index.js
const { route } = require("../../utils/index")
const storage = require("../../utils/storage")
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList: [
            {
                background: 'linear-gradient(90deg, #8469FF, #1c698e)',
                title: '渝康码',
                icon: '../../img/app-logo/yukangma.png',
                id: 'wxb2d186a3e7fb7a3a',
                path: '/pages/index/index',
                result: true
            },
            {
                background: 'linear-gradient(90deg,  #1c698e, #1c8e83)',
                title: '京东',
                icon: '../../img/app-logo/jingdong.png',
                id: 'wx91d27dbf599dff74',
                path: '/pages/item/detail/detail?sku=100007810999'
            },
            {
                background: 'linear-gradient(90deg,  #1c8e83, #197d46)',
                title: '拼多多',
                icon: '../../img/app-logo/pdd.png',
                id: 'wx32540bd863b27570',
                path: '/pages/index/index'
            },
            {
                background: 'linear-gradient(90deg,  #197d46, #60ab0d)',
                title: '天猫',
                icon: '../../img/app-logo/tm.png',
                id: 'wx084af4cdf602f016',
                path: '#小程序://天猫小店金沙里/kCNvX1d5GemCbml'
            },
        ],
        touchIndex: '',
    },

    naviToDetail(e){
        let index = e.currentTarget.dataset.index;
        console.log( );
        if(!this.data.dataList[index]?.result){
            route.navigateTo('../shop-result/index');
        }
        wx.openEmbeddedMiniProgram({
            appId: this.data.dataList[index].id,
            path: this.data.dataList[index].path,
            envVersion: 'release',
            success(res) {
                console.log(res, 'success');
            }
        })
    },
    naviToAdd(e){
        route.navigateTo('./add-tool/index')
    },
    getStart(e){
        this.setData({
            touchIndex: e.currentTarget.dataset.index
        })
    },
    getEnd(e){
        this.setData({
            touchIndex: ''
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