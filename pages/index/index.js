// index.js
const { route, storage } = require("../../utils/index")
const app = getApp()

Page({
    data: {
        userScan: 0,
        show: false,
        doctorMobile: 18434332504
    },
    naviToDetail(){
        route.navigateTo('../mine/order-detail/index')
    },
    copyWechatId(){
        let that = this;
        wx.setClipboardData({
            data: this.data.doctorMobile.toString(),
            success (res) {
                that.setData({
                    show: false
                })
                wx.hideToast()
                wx.showToast({
                    icon: 'none',
                    title: '已经复制微信号，请打开微信添加医生微信号',
                    duration: 2000
                })
            }
        })
    },
    addWechat(){
        this.setData({
            show: true,
        })
    },
    onClose(){
        this.setData({
            show: false,
        })
    },
    onLoad() {
        if (wx.getUserProfile) {
            let headerHeight = app.globalData.navHeight;
            let navTop = app.globalData.navTop;
            let paddingTop = app.globalData.paddingTop;
            this.setData({
                height: headerHeight,
                navTop: navTop,
                headerHeight: headerHeight,
                canIUseGetUserProfile: true,
                padding: paddingTop
            })
        }
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
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                activeIdx: 0
            })
        };
        this.regPermissions();
    },
    onShareAppMessage(){
        return {
            title: '药药线上通',
            path: '/pages/index/index'
        }  
    }
})
