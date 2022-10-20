// pages/shop/index.js
const app = getApp();

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
                title: '长崎蛋糕，火山美食，为了更美好的明天',
                price: '49.9',
                num: '234',
                appId: 'wx2c348cf579062e56',
                url: '../../img/assets/cake5.jpg',
                // path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?spu_id=3427238040&poi_id=971174970702077',
                // path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?poi_status=1&spu_id=1706345408&poi_id=999160977635181',
                // path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?spu_id=5551943869&poi_id=990790086420294',
                path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?spu_id=8102775758&poi_id=1103696186678084',
                name: '美团外卖'
            },
            {
                title: '泓一小面包，细密软绵，纯享美味',
                price: '15.9',
                num: '508',
                appId: 'wx91d27dbf599dff74',
                url: '../../img/assets/cake2.jpg',
                // path: '/pages/item/detail/detail?sku=100007810999',
                path: 'pages/item/detail/detail?sku=10051382571691',
                name: '京东购物'
            },
            {
                title: '百草味华夫饼，新鲜小麦，麦香浓郁',
                price: '27.9',
                num: '1298',
                appId: 'wx32540bd863b27570',
                url: '../../img/assets/cake1.jpg',
                // path: 'package_a/welfare_coupon/welfare_coupon?goods_id=173040386567',
                path: 'package_c/goods/goods?goods_id=366192265246',
                name: '拼多多'
            },
            // {
            //     title: 'PAULKEI奶香面包，进口牛奶烘焙而成',
            //     price: '35.9',
            //     num: '105',
            //     appId: 'wx91d27dbf599dff74',
            //     url: '../../img/assets/cake3.jpg',
            //     path: 'pages/item/detail/detail?sku=10051382571691',
            //     name: '京东购物'
            // },
            {
                title: '奶多味汤圆面包，细腻香甜',
                price: '44.9',
                num: '598',
                appId: 'wx2c348cf579062e56',
                url: '../../img/assets/cake4.jpg',
                path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?spu_id=902408678&poi_id=888818972843656',
                name: '美团外卖'
            },
            // {
            //     title: '长崎蛋糕，火山美食，为了更美好的明天',
            //     price: '49.9',
            //     num: '234',
            //     appId: 'wx2c348cf579062e56',
            //     url: '../../img/assets/cake5.jpg',
            //     // path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?activity_tag=undefined&poi_id_str=4BrV9pM7HObSTCgoJuXeWAI&poi_status=1&share_activity_uuid=null&sku_id=3839661886&spu_tag=undefined&spu_id=3427238040&poi_id=971174970702077&buz_type=9',
            //     // path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?sku_id=3839661886&spu_id=3427238040&poi_id=971174970702077',
            //     // path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?poi_id=971174970702077',
            //     path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?sku_id=3839661886&spu_id=3427238040',
            //     // path: 'sub_shangou/sg/package/goods-details-dynamic/goods-details?sku_id=3839661886',
            //     name: '美团外卖'
            // },
            // {
            //     title: 'CANSO生日蛋糕，甜甜的惊喜',
            //     price: '98.8',
            //     num: '633',
            //     appId: 'wxde8ac0a21135c07d',
            //     url: '../../img/assets/cake6.jpg',
            //     path: '/pages/index/index',
            //     name: '美团外卖'
            // },
            // {
            //     title: '蒸的味道，烘焙面包',
            //     price: '11.9',
            //     num: '44.9',
            //     appId: 'wx91d27dbf599dff74',
            //     url: '../../img/assets/cake7.jpg',
            //     path: '/pages/index/index',
            //     name: '京东购物'
            // },
            // {
            //     title: '知印蛋糕，精品手工蛋糕',
            //     price: '49.9',
            //     num: '98.8',
            //     appId: 'wxece3a9a4c82f58c9',
            //     url: '../../img/assets/cake8.jpg',
            //     // path: '/pages/index/index?id=E5353937299340460103',
            //     path: 'pages/container/index?href=https://h5.ele.me/newretail/p/goodsinfo/?store_id=300039241&item_id=656422349015&navType=4&rank_id=0fb1dd7ba4a2471b93c75be50ec5c756&spm=a2ogi.12414902.food-detail.d2&spm-pre=a2ogi.19718819.search.1&geolat=29.548363&geolng=106.497777&*geolat=29.548363&*geolng=106.497777&shelf_marketing_expression=0',
            //     name: '饿了么'
            // },
            // {
            //     title: '冰淇淋蛋糕，多重口味，多种选择',
            //     price: '145.9',
            //     num: '304',
            //     appId: 'wxece3a9a4c82f58c9',
            //     url: '../../img/assets/cake9.jpg',
            //     path: '#小程序://饿了么l外卖美食超市买菜水果/qOPHWvHwMsSeJiH',
            //     name: '饿了么'
            // },
        ],
        priceStatus: false
    },
    checkTab(e){
        this.setData({
            tabActive: e.currentTarget.dataset.index
        })
    },
    checkTabStatus(e){
        let index = e.currentTarget.dataset.index;
        if(this.data.statusList[index].title === "价格"){
            this.setData({
                tabStatus: index,
                priceStatus: !this.data.priceStatus
            })
        } else {
            this.setData({
                tabStatus: index
            })
        }
    },
    naviToWeb(e){
        // wx.navigateToMiniProgram({
        //     appId: 'wx91d27dbf599dff74',
        //     path: '/pages/item/detail/detail?sku=100007810999',
        //     envVersion: 'release',
        //     success(res) {
        //         // 打开成功
        //       console.log(res, 'success');
        //     }
        // })
        // route.navigateTo('./shop-result/index')
        wx.openEmbeddedMiniProgram({
            appId: e.currentTarget.dataset.appid,
            path: e.currentTarget.dataset.path,
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
        let headerHeight = app.globalData.navHeight;
        let navTop = app.globalData.navTop;
        let paddingTop = app.globalData.paddingTop;
        this.setData({
            height: headerHeight,
            navTop: navTop,
            padding: paddingTop
        })
    },
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                activeIdx: 1
            })
        }
    },
})