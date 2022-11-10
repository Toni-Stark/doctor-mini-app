// pages/mine/register/index.js
const { userLogin, getUserPhone } = require('../../../common/interface');
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
        isAgree: false,
        code: '',
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
        this.setData({needPhone:false});
        getUserPhone({code: e.detail.code}).then(res => {
            if(res.code!= 200){
                storage.removeStorage('token');
                storage.removeStorage('openid');
                storage.removeStorage('nickName');
                storage.removeStorage('avatarUrl');
                return wx.showToast({
                title: res.msg,
                icon: 'none'
                })
            }
            setTimeout(()=>{
                route.navigateBack(1);
            }, 500)
        });
   
    },

    handleLogin() {
        let that = this;
        that.showToast('登录中', 'loading')
        if(!that.data.isAgree) {
            return  that.showToast('请勾选并阅读《用户协议》和《隐私政策》', 'none')
        }
        wx.login({
            complete: res => {
                if(res.code){
                    userLogin({code: res.code, type: 'mini'}).then(result => {
                        console.log(423423423)
                        console.log(result)
                        console.log(423423423)
                        if(result.code!= 200){
                            return wx.showToast({
                            title: result.code,
                            icon: 'none'
                            })
                        }
                        storage.setStorageSync('token', result.data.token)
                        storage.setStorageSync('openid', result.data.openid)
                        that.setData({
                            code: res.code,
                            openid: result.data.openid
                        })
                    });
                }
            }
        })
        wx.getUserProfile({
            desc: '用于完善会员资料',
            success: res => {
                storage.setStorageSync('nickName', res.userInfo.nickName)
                storage.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
                that.setData({
                    name: res.userInfo.nickName,
                    avatar: res.userInfo.avatarUrl,
                    needPhone: true,
                })
            },
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarColor({
          backgroundColor: '#ffffff',
          frontColor: '#000000',
        })
    }
})