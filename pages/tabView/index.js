// pages/tabView/index.js
Component({
    properties: {
        activeIdx: {
          type: Number,
          value: 0
        },
        userScan: {
            type: Number,
            value: 0
        }
      },
    data: {
        tabArray: [
          {"name":"首页","icon":"../../img/tabBar/index1.png","selectIcon":"../../img/tabBar/index.png","path":"/pages/index/index"},
          {"name":"购物","icon":"../../img/tabBar/shop1.png","selectIcon":"../../img/tabBar/shop.png","path":"/pages/shop/index"},
          {"name":"移动扫描枪","icon":"../../img/tabBar/logistics3.png","selectIcon":"../../img/tabBar/logistics2.png","path":"/pages/logistics/index"},
          {"name":"我的","icon":"../../img/tabBar/me1.png","selectIcon":"../../img/tabBar/me.png","path":"/pages/mine/index"},
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        swichNav(e) {
            let that = this;
            // console.log('swichNav',e);
            // console.log('swichNav this.data.activeIdx=',this.data.activeIdx);
            let count = e.currentTarget.dataset.current;
            if (count === this.data.activeIdx) {
              return false;
            } else {
              wx.switchTab({
                url: this.data.tabArray[count].path,
              })
            }
            // console.log('swichNav ========',this.data.activeIdx);
          },
    }
})
