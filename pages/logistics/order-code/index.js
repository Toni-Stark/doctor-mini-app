// pages/logistics/order-code/index.js
import Dialog from '@vant/weapp/dialog/dialog';
import { getOrderData, setListInBox } from "../../../common/interface"
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
                quantity: 0,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '999感冒灵',
                id: '6903544060292',
                address: '桐君阁大药房',
                quantity: 0,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '连花清瘟颗粒',
                id: '6926378900626',
                address: '桐君阁大药房',
                quantity: 0,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
            },
            {
                name: '阿莫西林胶囊',
                id: '6973009160164',
                address: '桐君阁大药房',
                quantity: 4,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
                selected: 0
            },
            {
                name: '阿莫西林胶囊',
                id: '6953345101229',
                address: '桐君阁大药房',
                quantity: 4,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
                selected: 0
            },
        ],
        orderCode: '',
        orderList: [],
        inputFocus: false,
        show: false,
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
    comfirm(){
        wx.showToast({
            title: '上传中...',
            icon: 'loading'
        });
        var list = [];
        for(let i = 0; i < this.data.orderList.length; i++){
            list.push({ 
                goods_id: this.data.orderList[i].erp_id,
                number: this.data.orderList[i].quantity
            });
        }
        setListInBox({
            reason_type: 1,
            goods: JSON.stringify(list),
            note: ''
        }).then(res=>{
            if(res.code !=200){
                return wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
            }
            setTimeout(()=>{
                wx.hideToast()
                this.setData({
                    orderList: [],
                    show: false,
                    focus: true
                })
            }, 500)
        })
    },
    close(){
        console.log('取消')
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
    uploade(){
        this.setData({
            show: true
        })
    },

    setCount(e){
        let index = e.currentTarget.dataset.index;
            this.data.orderList[index].quantity = e.detail;
        let list = this.data.orderList;
        this.setData({
            orderList: list,
            focus: false
        })
    },
    setListData(value){
        wx.showToast({
            title: '加载中...',
            icon: 'loading'
        });
        getOrderData({
            type: 2,
            barcode: value,
        }).then((res)=>{
            if(res.code != 200){
                this.setData({
                    inputCode: ''
                });
                return wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
            }
            let obj = res.data;
            let index = this.data.orderList.findIndex(item => item.barcode == value);
            if(index<0){
                obj['quantity'] = 1;
                let list = this.data.orderList.concat(obj);
                this.setData({
                    orderList: list
                })
            } else {
                this.data.orderList[index].quantity ++ ;
                let list = this.data.orderList;
                this.setData({
                    orderList: list
                })
            }
            wx.hideToast();
            this.setData({
                inputCode: ''
            })
        })
        // let obj = this.data.requestList.filter(item=>item.id === value);
        // if(obj.length<=0){
        //     wx.showToast({
        //         icon: 'none',
        //         title: '未找到商品',
        //     })
        //     this.setData({
        //         inputCode: ''
        //     });
        //     return;
        // }
        // let index = this.data.orderList.findIndex(item => item.id === value);
        // if(index<0){
        //     console.log(obj);
        //     obj[0].count = 1;
        //     let list = this.data.orderList.concat(obj);
        //     this.setData({
        //         orderList: list
        //     })
        // } else {
        //     this.data.orderList[index].count ++ ;
        //     let list = this.data.orderList;
        //     this.setData({
        //         orderList: list
        //     })
        // }
        // wx.hideToast();
        // this.setData({
        //     inputCode: ''
        // })
    },
    currentConfirm (e) {
        this.setListData(e.detail.value);
    },
    currentInput(e){
        // let isCR = e.detail.keyCode == 10;
        let value = (e.detail).toString();
        let notNull = value.trim().length>0;
        if(notNull){
            let isCR = value.slice(value.length-1,value.length) == '\n'
            if(isCR){
                let reg = value.slice(0,2) == '69';
                if(reg) {
                    this.setListData(value.slice(0, -1));
                } else {
                    wx.showToast({ 
                        icon: 'none',
                        title: '请扫描货物条形码',
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