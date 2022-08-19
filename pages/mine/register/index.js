// pages/mine/register/index.js
const {request, storage, route} = require('../../../utils/index');
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag: false,
        name: '',
        avatar: '',
        info: {},
        needPhone: false,
        isAgree: false
    },

    naviToAgreement(){
        route.navigateTo('./agreement/index');
    },
    naviToPolicy(){
        route.navigateTo('./policy/index');
    },
    checkboxChange(e){
        this.setData({
            isAgree: e.detail.value == '1'
        })
    },

    showToast(msg, type){
        wx.showToast({
            title: msg,
            icon: type,
            duration: 1500
        })
    },

    getPhone(e){
        console.log('手机号获取', e);
        this.setData({needPhone:false});
        setTimeout(()=>{
            route.navigateBack(1);
        }, 500)
    },

    handleLogin() {
        this.showToast('登录中', 'loading')
        if(!this.data.isAgree) {
            return  this.showToast('请勾选并阅读《用户协议》和《隐私政策》', 'none')
        }
        wx.login({
            success: res => {
            }
        })
        wx.getUserProfile({
            desc: '用于完善会员资料',
            success: res => {
                storage.setStorageSync('nickName', res.userInfo.nickName)
                storage.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
                this.setData({
                    name: res.userInfo.nickName,
                    avatar: res.userInfo.avatarUrl,
                    needPhone: true,
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: "登录"
        })
        wx.setNavigationBarColor({
          backgroundColor: '#ffffff',
          frontColor: '#000000',
        })
    }
})