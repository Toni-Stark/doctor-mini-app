// pages/logistics/query-code/index.js
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
                payTime: '2022-10-21 13:47:46',
                address: '桐君阁大药房',
                dose: '3mg:100µg*24粒/盒',
                count: 1,
            },
            {
                name: '999感冒灵',
                id: '6926378900626',
                payTime: '2022-10-21 13:47:46',
                address: '桐君阁大药房',
                dose: '3mg:100µg*24粒/盒',
                count: 1,
            },
            {
                name: '连花清瘟颗粒',
                id: '6903544060292',
                payTime: '2022-10-21 13:47:46',
                address: '桐君阁大药房',
                dose: '3mg:100µg*24粒/盒',
                count: 1,
            }
        ],
        orderList: [],
        inputFocus: false,
        hasCode: false,
        currentCode: ''
    },

    currentBlur(){
        this.setData({
            inputFocus: true
        })
    },
    currentFocus(){
        this.setData({
            inputFocus: false
        })
    },

    setCount(e){
        let index = e.currentTarget.dataset.index;
            this.data.orderList[index].count = e.detail;
        let list = this.data.orderList;
        this.setData({
            orderList: list
        })
    },
    setListData(value){
        this.setData({
            currentCode:  value,
            inputCode: '',
        })
        if(value.slice(0, 2) == "69"){
            wx.showToast({
              title: '请扫描订单号条形码',
              icon: 'none'
            })
            this.setData({
                orderList: [],
                inputCode: '',
            })
            return;
        }
        this.setData({
            orderList: this.data.requestList,
        })
        wx.hideToast();
    },
    currentConfirm (e) {
        console.log(e, 'confirm')
        this.setListData(e.detail.value);
    },
    currentInput(e){
        let value = e.detail.value.toString()
        let notNull = value.trim().length>0;
        if(notNull){
            let isCR = value.slice(value.length-1,value.length) == '\n'
            if(isCR){
                wx.showToast({
                    title: '加载中...',
                    icon: 'loading'
                })
                let value = e.detail.value.slice(0, -1);
                this.setListData(value);
            }
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // this.setData({
        //     orderList: this.data.requestList
        // })
    },
})