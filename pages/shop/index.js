// pages/shop/index.js
const { route } = require("../../utils/index")
const storage = require("../../utils/storage")
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabList: [
            {
                title: '商品一'
            },
            {
                title: '商品二'
            },
            {
                title: '商品三'
            },
        ],
        tabActive: 0,
        statusList: [
            {
                title: '综合'
            },
            {
                title: '销量'
            },
            {
                title: '上新'
            },
            {
                title: '价格'
            },
        ],
        tabStatus: 0,
        cardList: [
            {
                title: '百草味华夫饼，新鲜小麦，麦香浓郁',
                price: '27.9',
                num: '1298',
                url: '../../img/assets/cake1.jpg',
            },
            {
                title: '泓一小面包，细密软绵，纯享美味',
                price: '15.9',
                num: '508',
                url: '../../img/assets/cake2.jpg',
            },
            {
                title: '百草味华夫饼，新鲜小麦，麦香浓郁',
                price: '27.9',
                num: '1298',
                url: '../../img/assets/cake1.jpg',
            },
            {
                title: 'PAULKEI奶香面包，进口牛奶烘焙而成',
                price: '35.9',
                num: '105',
                url: '../../img/assets/cake3.jpg',
            },
            {
                title: '奶多味汤圆面包，细腻香甜',
                price: '44.9',
                num: '598',
                url: '../../img/assets/cake4.jpg',
            },
            {
                title: '长崎蛋糕，火山美食，为了更美好的明天',
                price: '49.9',
                num: '234',
                url: '../../img/assets/cake5.jpg',
            },
            {
                title: 'CANSO生日蛋糕，甜甜的惊喜',
                price: '98.8',
                num: '633',
                url: '../../img/assets/cake6.jpg',
            },
            {
                title: '蒸的味道，烘焙面包',
                price: '11.9',
                num: '44.9',
                url: '../../img/assets/cake7.jpg',
            },
            {
                title: '知印蛋糕，精品手工蛋糕',
                price: '49.9',
                num: '98.8',
                url: '../../img/assets/cake8.jpg',
            },
            {
                title: '冰淇淋蛋糕，多重口味，多种选择',
                price: '145.9',
                num: '304',
                url: '../../img/assets/cake9.jpg',
            },
        ]
    },
    checkTab(e){
        this.setData({
            tabActive: e.currentTarget.dataset.index
        })
    },
    checkTabStatus(e){
        this.setData({
            tabStatus: e.currentTarget.dataset.index
        })
    },
    naviToWeb(){
        // wx.navigateToMiniProgram({
        //     appId: 'wx91d27dbf599dff74',
        //     path: '/pages/item/detail/detail?sku=100007810999',
        //     envVersion: 'release',
        //     success(res) {
        //         // 打开成功
        //       console.log(res, 'success');
        //     }
        // })
        route.navigateTo('./shop-result/index')
        wx.openEmbeddedMiniProgram({
            appId: 'wx91d27dbf599dff74',
            path: '/pages/item/detail/detail?sku=100007810999',
            envVersion: 'release',
            success(res) {
                console.log(res, 'success');
            }
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
    },
})