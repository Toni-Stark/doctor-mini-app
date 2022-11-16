// pages/logistics/index.js
const { route, storage } = require("../../utils/index")
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userScan: 0,
        tabList: [
          {
            title: '订单查询',
            navigate: './query-code/index',
            icon: '../../img/logistics/query.png',
            class: 'card-item'
          },
          {
            title: '商品查询',
            navigate: './search-code/index',
            icon: '../../img/logistics/search.png',
            class: 'card-item  card-dual'
          },
          {
            title: '发货核验',
            navigate: './bound-code/index',
            icon: '../../img/logistics/outbound.png',
            class: 'card-item fill',
          },
          // {
          //   title: '清点入库',
          //   navigate: './order-code/index',
          //   icon: '../../img/logistics/order.png',
          //   class: 'card-item card-dual'
          // },
        ],
        isStaff: false
    },

    naviToQuery(e){
        if(wx.getStorageSync('token')){
         return route.navigateTo(e.currentTarget.dataset.navigate);
        }
        return wx.showToast({
          title: '请先登录后再使用扫码功能',
          icon: 'none'
        })
    },    
    naviToAuth(){
      if(storage.getStorageSync('token')){
        route.navigateTo('../mine/auth-staff/index')
      } else {
        route.navigateTo('../mine/register/index?staff=1')
      }
    },  
    regPermissions(){
        let nickName = storage.getStorageSync('nickName');
        if (typeof this.getTabBar === 'function') {
            let userScan = nickName ? 1 : 0;
            this.setData({
                userScan:1
            })
        }
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
        this.regPermissions();
          this.setData({
            isStaff: storage.getStorageSync('is_staff') != 0
          })
    },
})