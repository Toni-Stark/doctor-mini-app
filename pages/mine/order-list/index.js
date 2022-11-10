const { route } = require("../../../utils/index")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList: {}
    },
    back(){
        route.navigateBack(1)
    },
    naviToDetail(){
        route.navigateTo('../order-detail/index')
    },
    getDataList(params){
        getCommentList(params).then(res=>{
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getDataList({p: this.data.page})
    },
})