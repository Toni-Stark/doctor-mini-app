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
        value: ''
    }, 
    naviBack(e){
        let res = setRelateMember({
            order_no: this.data.value,
            channel: this.data.selectValue
        })
        if(res.code!=200){
            return wx.showToast({
              title: res.msg,
              icon: 'none'
            }) 
        };
        route.navigateBack(-1);
    },
    bindChange(e){
        this.setData({
            value: e.detail.value
        })
    },
    delStatus(e){
        this.setData({
            selectValue: '',
            isShow: false
        })
    },
    selectStatus(e){
        this.setData({
            selectValue: e.currentTarget.dataset.index,
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
    },
})