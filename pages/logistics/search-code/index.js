const { getOrderData, setOrderData } = require("../../../common/interface");

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
                code: '6914329004530',
                id:'15',
                address: '桐君阁大药房',
                count: 2,
                price: '23.2',
                create: '13.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '999感冒灵',
                code: '6926378900626',
                id:'55',
                address: '桐君阁大药房',
                count: 3,
                price: '23.2',
                create: '13.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '马来酸曲美布汀片',
                code: '6953345101229',
                id:'35',
                address: '桐君阁大药房',
                count: 2,
                price: '23.2',
                create: '13.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '连花清瘟颗粒',
                code: '6903544060292',
                id:'33',
                address: '桐君阁大药房',
                count: 1,
                price: '23.2',
                create: '13.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '阿莫西林胶囊',
                code: '6973009160164',
                id:'123',
                address: '桐君阁大药房',
                count: 4,
                price: '23.2',
                create: '13.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            }
        ],
        inputFocus: false,
        searchItem: null,
        focus: true
    },
    getFocus(){
        this.setData({
            focus: true
        });
    },
    removeFocus(){
        this.setData({
            focus: false
        });
    },
    getDetailInfo(value) {
        setOrderData({
            // type: 2,
            barcode: value,
        }).then((res)=>{
            if(res.code != 200){
                this.setData({
                    inputCode: '',
                    searchItem: null
                });
                return wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
            }
            this.setData({
                searchItem: res.data,
                inputCode: ''
            })
            wx.hideToast();
        })
        // let list = this.data.requestList.filter(item=>item.id === value);
        // if(list.length<=0){
        //     wx.showToast({
        //       icon: 'none',
        //       title: '没有此商品的信息',
        //     })
        //     this.setData({
        //         inputCode: '',
        //         searchItem: null
        //     });
        //     return;
        // }
        // if (list.length>0) {
        //     this.setData({
        //         searchItem: list[0],
        //         inputCode: ''
        //     })
        // }
        // wx.hideToast();
        // 6914329004530
    },

    currentInput(e){
        let value = (e.detail).toString();
        let notNull = value.trim().length>0;
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