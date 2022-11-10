const { route } = require("../../../utils/index")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataInfo: {}
    },
    onLongPress(){
     
    },
    onPress(){
        console.log(23423)
        wx.previewImage({
            // current: "../../../img/index/code.png",
            urls: ["http://bigdatascreen.bz.dev.jia10000.cn/refer/code.jpg"]
        })
    },
    phoneCall(){
        wx.makePhoneCall({
            phoneNumber: '19888888888',
            success: function () {
              console.log("拨打电话成功！")
            },
          })
    },
    back(){
        route.navigateBack(1)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({dataInfo: options})
    },
})