// pages/mine/auth-staff/index.js
import { setAuthLogin } from "../../../common/interface"
import {route} from'../../../utils/index'
import storage from "../../../utils/storage"
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
            storage.setStorageSync('staff_id', res.data.staff_id)
            wx.showToast({
                title: '绑定成功',
                icon: 'none'
            })
            setTimeout(()=>{
                route.navigateBack(1);
            }, 500)
        })
    },
    onLoad: function (options) {

    },
})