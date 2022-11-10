// index.js
import Toast from '@vant/weapp/toast/toast';
import { getHomeOrderList, getPlatformList } from '../../common/interface';
const { route, storage } = require("../../utils/index")
const app = getApp()

const list = [
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
];
Page({
    data: {
        userScan: 0,
        show: false,
        refresh: false,
        doctorMobile: 18434332504,
        dataList: [],
        page: 1,
        shopList: {}
    },

    brashData(){
        this.setData({refresh: true});
        getHomeOrderList({p: 1}).then(res=>{
            if(res.code!=200){
                return wx.showToast({
                    title: res.msg,
                    icon: 'none'
                })
            };
            console.log(res.data.list)
            this.setData({
                dataList: res.data.list,
                page: 1,
                refresh: false,
            }) 
        });
    },

    naviToDetail(e){
        route.navigateTo('../mine/order-detail/index?id='+e.currentTarget.dataset.id)
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
    getEvaluate (e){
        let id = e.currentTarget.dataset.id
        route.navigateTo('../mine/order-evaluate/index?id='+id)
    },
    getEvaluateFalse(){
        wx.showToast({
            title: '此订单已经评价过了',
            icon: 'none'
        })
    },
    addWechat(){
        route.navigateTo('../mine/doctor-list/index')
    },
    setAlarmClock(){
        Toast('用药提醒功能还在实验中...')
    },
    onClose(){
        this.setData({
            show: false,
        })
    },

    setStatusHeight(){
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

    addDataList(e){
        let page = this.data.page + 1;
        const result = getHomeOrderList({p: page});
        if(result.code!=200){
            return wx.showToast({
              title: result.msg,
              icon: 'none'
            })
        };
        if(result.data.list.length>0){
            let list = [...this.data.dataList, ...result.data.list];
            this.setData({
                dataList: list,
                page: page
            })
        }
    },

    getDetail() { 
        getHomeOrderList({p: this.data.page}).then(res=>{
            if(res.code!=200){
                return wx.showToast({
                title: res.msg,
                icon: 'none'
                })
            };
            this.setData({
                dataList: res.data.list
            }) 
        });
        
    },

    getPlatform (){
        getPlatformList().then(res=>{
            if(res.code!=200){
                return wx.showToast({
                    title: res.msg,
                    icon: 'none',
                })
            };
            this.setData({
                shopList: res.data,
            }) 
        })
    },
 
    onLoad() {
        this.setStatusHeight();
        this.getDetail()
        this.getPlatform()
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
