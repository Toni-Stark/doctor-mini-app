// pages/logistics/search-code/index.js
let timer;
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
                selected: 0
            },
            {
                name: '999感冒灵',
                id: '6926378900626',
                address: '桐君阁大药房',
                count: 3,
                selected: 0
            },
            {
                name: '马来酸曲美布汀片',
                id: '6953345101229',
                address: '桐君阁大药房',
                count: 2,
                selected: 0
            },
            {
                name: '连花清瘟颗粒',
                id: '6903544060292',
                address: '桐君阁大药房',
                count: 1,
                selected: 0
            },
            {
                name: '阿莫西林胶囊',
                id: '6973009160164',
                address: '桐君阁大药房',
                count: 4,
                selected: 0
            }
        ],
        inputFocus: false,
        searchItem: null
    },

    currentInput(e){
        this.setData({
            inputCode: e.detail.value
        })
        wx.showToast({
            title: '加载中...',
            icon: 'loading'
        })
        timer && clearTimeout(timer);
        timer = null;
        timer = setTimeout(()=>{
            let list = this.data.requestList.filter(item=>item.id === e.detail.value);
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
            timer = null;
        }, 500);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
})