// index.js
import Toast from '@vant/weapp/toast/toast';
const { route, storage } = require("../../utils/index")
const app = getApp()
Page({
    data: {
        userScan: 0,
        show: false,
        doctorMobile: 18434332504,
        dataList: [
            {
                companyName: '美团',
                orderId: '24234234645878797122',
                payTime: '2022年12月13日 13点25分',
                price: '30元',
                people: '孙仲谋',
                shopList: [
                    {
                        name: '999感冒灵颗粒',
                        count: '3瓶',
                    },
                    {
                        name: '云南白药喷雾',
                        count: '3盒',
                    },
                ]
            },
            {
                companyName: '拼多多',
                orderId: '1221654645878797122',
                payTime: '2022年12月13日 16点35分',
                price: '24元',
                people: '曹孟德',
                shopList: [
                    {
                        name: '999感冒灵颗粒',
                        count: '2瓶',
                    },
                    {
                        name: '云南白药喷雾',
                        count: '3盒',
                    },
                ]
            },
            {
                companyName: '京东',
                orderId: '12216546458787243243',
                payTime: '2022年12月14日 17点35分',
                price: '65元',
                people: '刘玄德',
                shopList: [
                    {
                        name: '999感冒灵颗粒',
                        count: '3瓶',
                    },
                    {
                        name: '云南白药喷雾',
                        count: '4盒',
                    },
                ]
            },
        ]
    },
    naviToDetail(){
        // route.navigateTo('../mine/order-detail/index')
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
    getEvaluate (){
        route.navigateTo('../mine/order-evaluate/index')
    },
    addWechat(){
        // this.setData({
        //     show: true,
        // })
        route.navigateTo('../mine/order-service/index')
    },
    setAlarmClock(){
        Toast('用药提醒功能还在实验中...')
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
