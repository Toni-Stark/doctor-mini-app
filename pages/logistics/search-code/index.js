// pages/logistics/search-code/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputCode: "",
        requestList: [
            {
                name: '藿香正气水',
                id: '6914329004530',
                address: '桐君阁大药房',
                count: 2,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '999感冒灵',
                id: '6926378900626',
                address: '桐君阁大药房',
                count: 3,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '马来酸曲美布汀片',
                id: '6953345101229',
                address: '桐君阁大药房',
                count: 2,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '连花清瘟颗粒',
                id: '6903544060292',
                address: '桐君阁大药房',
                count: 1,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '阿莫西林胶囊',
                id: '6973009160164',
                address: '桐君阁大药房',
                count: 4,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            }
        ],
        inputFocus: false,
        searchItem: null
    },

    getDetailInfo(value) {
        let list = this.data.requestList.filter(item=>item.id === value);
        if(list.length<=0){
            wx.showToast({
              icon: 'none',
              title: '没有此商品的信息',
            })
            this.setData({
                inputCode: '',
                searchItem: null
            });
            return;
        }
        if (list.length>0) {
            this.setData({
                searchItem: list[0],
                inputCode: ''
            })
        }
        wx.hideToast();
        // 6914329004530
    },

    currentInput(e){
        let value = (e.detail.value).toString();
        let notNull = value.trim().length>0;
        console.log(e.detail.value)
        if(notNull){
            let isCR = value.slice(value.length-1,value.length) == '\n'
            if(isCR){
                let reg = value.slice(0,2) == '69';
                if(reg) {
                    this.getDetailInfo(value.slice(0, -1))
                } else {
                    wx.showToast({
                        icon: 'none',
                        title: '请扫描商品条形码',
                    });
                    this.setData({
                        inputCode: ''
                    })
                }
            }
        } else {
            this.setData({
                inputCode: ''
            })
        }
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
})