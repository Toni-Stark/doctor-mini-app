// pages/mine/auth-staff/index.js
import { setAuthLogin } from "../../../common/interface"
Page({

    data: {
        name: '',
        password: '',
    },
    bindChangeName(e){
        this.setData({
            name: e.detail.value
        })
    },
    bindChangePass(e){
        this.setData({
            password: e.detail.value
        })
    },
    naviBack(){
        let params = {
            login_name: this.data.name,
            login_pwd: this.data.password,
        };
        setAuthLogin(params).then(res => {
            if(res.code!=200){
                return wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
            };
            wx.showToast({
                title: '绑定成功',
                icon: 'none'
            })
            setTimeout(()=>{
                route.naviBack(-1)
            }, 500)
        })
    },
    onLoad: function (options) {

    },
})