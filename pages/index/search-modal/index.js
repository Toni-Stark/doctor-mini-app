const { route } = require("../../../utils/index")

// pages/index/search-modal/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: false,
        tabList: [
            "心血管系统药物",
            "中枢神经系统药物",
            "自主神经系统药物",
            "呼吸系统药物",
            "消化新系统药物",
            "内科止咳平喘类药物",
            "内科开窍类药物",
            "内科固涩类药物",
            "内科安神类药物",
            "内科补益类药物",
            "内科理血类药物"],
        tabActive: 0
    },
    naviToSearch(){
        route.navigateTo("../search-list/index")
    },
    changeActive(){
        this.setData({
            active: !this.data.active
        })
    },
    changeTab(e){
        this.setData({
            tabActive: e.currentTarget.dataset.index
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
})