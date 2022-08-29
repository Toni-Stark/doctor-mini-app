// pages/index/search-more/index.js
const { route } = require("../../../utils/index")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchList: [
            {
                name: '阿莫西林',
                desc: '北京复方药公司'
            },
            {
                name: '阿莫西林',
                desc: '北京复方药公司'
            },
            {
                name: '阿莫西林',
                desc: '北京复方药公司'
            },
            {
                name: '阿莫西林',
                desc: '北京复方药公司'
            },
            {
                name: '阿莫西林',
                desc: '北京复方药公司'
            },
            {
                name: '阿莫西林',
                desc: '北京复方药公司'
            },
            {
                name: '阿莫西林',
                desc: '北京复方药公司'
            },
        ]
    },
    naviToDetail(e){
        route.navigateTo('../recommend-detail/index?title='+e.currentTarget.dataset.title)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: options.title
        })
    },
})