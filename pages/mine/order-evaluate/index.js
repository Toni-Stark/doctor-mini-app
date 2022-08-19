const app = getApp()
const { route } = require("../../../utils/index")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: 3,
        express: 3,
        fileList: [],
        currentId: '',
        cateList: [
            {
                title: '药到病除',  
                id: '13'
            },
            {
                title: '很管用',  
                id: '14'
            },
            {
                title: '药不贵',  
                id: '15'
            },
            {
                title: '一颗就生效',  
                id: '16'
            },
            {
                title: '药有点苦',  
                id: '17'
            }
        ]
    },
    checkOut(e){
        this.setData({
            currentId: e.currentTarget.dataset.id
        })
        console.log(this.data.currentId)
    },
    afterRead(event) {
        let list = this.data.fileList.concat(event.detail.file)
        this.setData({
            fileList: list
        })
    },
    back(){
        route.navigateBack(1)
    },
    onChange(event) {
        this.setData({
          value: event.detail,
        });
    },
    onChangeExpress(event) {
        this.setData({
            express: event.detail,
        });
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
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})