// index.js
import Toast from '@vant/weapp/toast/toast';
import { getHomeOrderList, getPlatformList, setRelateMember } from '../../common/interface';
const { route, storage } = require("../../utils/index")
const app = getApp()

Page({
    data: {
        userScan: 0,
        show: false,
        refresh: false,
        doctorMobile: 18434332504,
        dataList: [],
        page: 1,
        shopList: {},
        isLogin: false
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
            this.setData({
                dataList: res.data.list,
                page: 1,
                refresh: false,
            }) 
        });
    },

    naviToDetail(e){
      let {id, order, edit, comment} = e.currentTarget.dataset;
      route.navigateTo('../mine/order-detail/index?order_no='+order+'&id='+id+'&edit='+edit+'&comment='+comment)
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
        let {id, order} = e.currentTarget.dataset;
        route.navigateTo('../mine/order-evaluate/index?order_no='+order+'&id='+id)
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
        getHomeOrderList({p: page}).then(res=>{
          if(res.code!=200){
              return wx.showToast({
                title: res.msg,
                icon: 'none'
              })
          };
          if(res.data.list.length>0){
              let list = [...this.data.dataList, ...res.data.list];
              this.setData({
                  dataList: list,
                  page: page
              })
          }
        });
        
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
            wx.hideLoading()
        })
    },
 
    onLoad(options) {
      if(options.order_no){
        storage.setStorageSync('channel', options.channel)
        if(storage.getStorageSync('token')){
          route.navigateTo('../mine/order-detail/index?id='+options.order_no);
          return;
        } else {
          route.navigateTo('../mine/register/index');
          return;
        }
      } else {
        storage.removeStorage('channel');
      }
      wx.showToast({
        title: '加载中...',
        icon: 'loading'
      })
        this.setStatusHeight();
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
    naviToAuth(){
      if(storage.getStorageSync('token')){
        // route.navigateTo('../mine/auth-staff/index')
        route.navigateTo('../shop-result/index')
      } else {
        route.navigateTo('../mine/register/index?order=1')
      }
    },
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                activeIdx: 0
            })
        };
        if(storage.getStorageSync('token')){
          this.setData({
            isLogin: true
          })
        }
        this.getDetail()
        this.regPermissions();
        this.getPlatform()
    },
    onShareAppMessage(){
        return {
            title: '药药线上通 - 药药线上通测试商户',
            path: '/pages/index/index'
        }  
    }
})
