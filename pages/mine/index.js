const { regLoginStatus, getUserInfoSync } = require("../../common/interface")
const { route, storage } = require("../../utils/index")
const app = getApp()

// pages/mine/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nickName: '',
        avatarUrl: '',
        userScan: 0,
        commonConfig: [
            {
                label: "订单列表",
                icon: "../../img/mine/user-icon-mine.png",
                navigate: '../index/index',
                type: 'switch'
            },
            {
                label: "我的评价",
                icon: "../../img/mine/user-icon-zzzz.png",
                navigate: './evaluation-list/index',
                type: 'navigate'
            },
            {
                label: "订单录入",
                icon: "../../img/mine/order.png",
                navigate: '../shop-result/index',
                type: 'navigate'
            },
            {
                label: "医师列表",
                icon: "../../img/index/talk-about2.png",
                navigate: './doctor-list/index',
                type: 'navigate'
            },
        ],
        authConfig: [
            {
                label: "员工绑定",
                icon: "../../img/mine/user-icon-mine.png",
                navigate: './auth-staff/index',
                type: 'navigate'
            },
        ],
        isAuth: false,
    },
    getFocus(){
      this.setData({
        nickName: ' ',
      })
    },
    getUser(){
        this.getUserInfoApI(true);
    },
    onInput(e){
      const { value } = e.detail 
      this.setData({
        nickName: value,
      })
      storage.setStorageSync('nickName', value);
    },
    onChooseAvatar(e) {
      const { avatarUrl } = e.detail 
      this.setData({
        avatarUrl,
      })
      storage.setStorageSync('avatarUrl', avatarUrl);
    },
    navigateTo(e){ 
        let config = e.currentTarget.dataset.item;
        if(config.type == "navigate"){
            route.navigateTo(config.navigate);
        } else if (config.type == "switch") {
            route.switchTab(config.navigate);
        }
    },
    naviToRegister(){
        if(!storage.getStorageSync('token')){
            route.navigateTo('./register/index')
        } else {
            this.getUserInfoApI();
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let headerHeight = app.globalData.navHeight;
        let navTop = app.globalData.navTop;
        let paddingTop = app.globalData.paddingTop;
        this.setData({
            height: headerHeight,
            navTop: navTop,
            padding: paddingTop
        })
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
    regLogin: async (params) => {
      const openid = wx.getStorageSync('openid')
      const result = regLoginStatus({type: 'mini', openid});
      if(result.code!=200){
          return wx.showToast({
            title: result.msg,
            icon: 'none'
          })
      };
    },
    regAuthServer(){
        this.setData({
            isAuth: true
        })
    },
    getUserInfoApI(isBtn){
        let avatar = storage.getStorageSync('avatarUrl');
        let nickname = storage.getStorageSync('nickname');
        if(avatar && nickname){
            return;
        }
        getUserInfoSync().then(res => {
            if(res.code != 200){
                return wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
            };
            if(res.data.nickname && res.data.avatar) {
                this.setData({
                    nickName: res.data.nickname,
                    avatarUrl: res.data.avatar,
                })
                storage.setStorageSync('avatarUrl', res.data.avatar);
                storage.setStorageSync('nickname', res.data.nickname);
            } else if(isBtn){
                route.navigateTo('./setting-user/index')
            } else {
                this.setData({
                    nickName: '点击设置昵称头像',
                    avatarUrl: '../../img/app-logo/0.png',
                })
            }
        })
    },
    onShow() {
        // this.regLogin();
        this.naviToRegister()
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                activeIdx: 2
            })
        }
        this.regPermissions();
        this.regAuthServer();
    },
})