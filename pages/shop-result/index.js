const { setRelateMember, getPlatformList } = require("../../common/interface");
const { route } = require("../../utils/index")
const storage = require("../../utils/storage")
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShow: false,
        shopList: {},
        selectValue: '',
        value: '',
        channel: '',
        selectTitle: ''
    }, 
    naviBack(e){
        console.log(storage.getStorageSync('token'), this.data.value, this.data.channel, this.data.selectValue)
        if(storage.getStorageSync('token')){
            let channel = this.data.channel || this.data.selectValue;
            setRelateMember({
                order_no: this.data.value,
                channel: channel
            }).then(res=>{
              if(res.code!=200){
                  return wx.showToast({
                    title: res.msg,
                    icon: 'none'
                  }) 
              };
              if(this.data.channel){
                route.redirectTo('../index/index')
              } else {
                route.navigateBack(-1);
              }
            })
        } else {
            route.navigateTo('../mine/register/index');
        }
    },
    bindChange(e){
        this.setData({
            value: e.detail.value
        })
    },
    delStatus(e){
        this.setData({
            selectValue: '',
            selectTitle: '-- 请选择渠道 --',
            isShow: false
        })
    },
    selectStatus(e){
        this.setData({
            selectValue: e.currentTarget.dataset.index,
            selectTitle: e.currentTarget.dataset.title,
            isShow: false
        })
    },
    onFocus(){
        this.setData({
            isShow: !this.data.isShow
        })
    },

    getDetail(options){
        getPlatformList().then(res=>{
            if(res.code!=200){
                return wx.showToast({
                    title: res.msg,
                    icon: 'none',
                })
            };
            if(options.order_no){
                let title = '';
                for (const i in res.data) {
                    if(res.data[i] == options.channel){
                        title = i;
                    }
                } 
                this.setData({
                    value: options.order_no,
                    channel: options.channel,
                    selectTitle: title,
                    selectValue: options.channel,
                    shopList: res.data,
                });
                return;
            }
           
            this.setData({
                shopList: res.data,
            }) 
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getDetail(options);
    },
    onShow: function (options) {
        console.log('onShow', options);
    }
})