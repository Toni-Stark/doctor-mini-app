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
          route.navigateBack(-1);
        })
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

    getDetail(){
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let headerHeight = app.globalData.navHeight
        let navTop = app.globalData.navTop
        this.setData({
            height: headerHeight,
            navTop: navTop
        })
        this.getDetail();
        if(wx.getStorageSync('channel')){
          this.setData({
            channel: wx.getStorageSync('channel'),
          })
        }
    },
})