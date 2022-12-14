import { getBoundReg, setBoundUpdate } from "../../../common/interface";

// pages/logistics/order-code/index.js
Page({
    data: {
        responseData: [
            {
                name: '藿香正气水',
                id: '6914329004530',
                address: '桐君阁大药房',
                count: 3,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
                selected: 0
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
                selected: 0
            },
            {
                name: '马来酸曲美布汀片',
                id: '6953345101229',
                address: '桐君阁大药房',
                count: 3,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
                selected: 0
            },
            {
                name: '连花清瘟颗粒',
                id: '6903544060292',
                address: '桐君阁大药房',
                count: 3,
                price: '23.2',
                createTime: '2022-10-21 13:47:46',
                removeTime: '2023-10-21 13:47:46',
                dose: '3mg:100µg*24粒/盒',
                selected: 0
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
                selected: 0
            },
        ],
        inputCode: "",
        requestList: [],
        requestCodes: [],
        inputFocus: false,
        hadRemaining: false,
        hadExpressSingle: false,
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
    regNumberRemaining(list){
        let remaining = list.delivery_items.find(item=> item.quantity != item.selected);
        if(!remaining){
            this.setData({
                hadRemaining: true
            })
            wx.showToast({
                icon: 'loading',
                title: '上传中...',
            })
            setBoundUpdate({express_no:this.data.requestCodes[0]}).then(res=>{
              wx.hideToast();
              if(res.code!=200) {
                return wx.showToast({
                  icon: 'none',
                  title: res.msg,
                })
              }
              wx.showToast({
                  icon: 'success',
                  title: '上传核验成功',
              })
              this.setData({
                  requestList: [],
                  requestCodes: [],
                  inputCode: '',
                  hadExpressSingle: false,
                  hadRemaining: false,
                  focus: true
              })
            })
        } else if (this.data.hadRemaining){
            this.setData({
                hadRemaining: false
            });
        }
    },

    setCount(e){
        let index = e.currentTarget.dataset.index;
        this.data.requestList.delivery_items[index].selected = Number(e.detail);
        let list = this.data.requestList;
        this.setData({
            requestList: JSON.parse(JSON.stringify(list)),
            focus: false
        });
        this.regNumberRemaining(list);
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

    setOrderList(value){
        getBoundReg({
            express_no: value,
        }).then(res => {
            if(res.code != 200){
              this.setData({
                requestCodes: '',
                requestList: [],
                inputCode: '',
                hadExpressSingle: true,
            })
                return wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
            }
            let data = res.data;
                data.delivery_items.map((item)=>{
                    item['selected'] = 0;
                    return item;
                });
            this.setData({
                requestCodes: [value],
                requestList: data,
                inputCode: '',
                hadExpressSingle: true,
            })
            wx.hideToast();
        })
    },

    setOrderItem(value){
        // 6914329004530
        this.setData({
            inputCode: value,
        })
        let obj = this.data.requestList.delivery_items.filter(item=>item.barcode === value);
        if(obj.length<=0){
            wx.showToast({
                icon: 'none',
                title: '订单中无此商品',
            })
            this.setData({
                inputCode: ''
            });
            return;
        }
        let index = this.data.requestList.delivery_items.findIndex(item => item.barcode === value);
        let list = [];
        if (index>=0) {
            if(this.data.requestList.delivery_items[index].selected == this.data.requestList.delivery_items[index].quantity){
                wx.showToast({
                    icon: 'none',
                    title: '此项商品数量已足够',
                })
                this.setData({inputCode: ''});
                return;
            }
            this.data.requestList.delivery_items[index].selected ++ ;
            list = this.data.requestList;
            this.setData({requestList: list})
        }
        wx.showToast({icon: 'none',title: '添加成功',duration: 1000});
        this.regNumberRemaining(list);
        this.setData({inputCode: ''})
    },

    setListData(event, reg){
        if(!this.data.hadExpressSingle){
            this.setOrderList(event);
        } else {
            if(reg){
                this.setOrderItem(event);
            } else {
                this.setData({
                    hadExpressSingle: false,
                });
                this.setOrderList(event);
            }
        }
        // 6914329004530
    },
    currentInput(e){
        let value = (e.detail).toString();
        let isCR = value.slice(value.length-1, value.length) == '\n';
        let notNull = value.trim().length>0;
        let reg = value.slice(0,2) == '69';
        if(notNull && isCR && !this.data.hadExpressSingle && reg){
            wx.showToast({
                title: '请先扫描快递单号以获取订单信息',
                icon: 'none'
            })
            this.setData({
                inputCode: ''
            })
            return;
        }
        if(notNull && isCR){
            let value = e.detail.slice(0, -1);
            this.setListData(value, reg);
        }
        if(!notNull){
            this.setData({
                inputCode: ''
            });
            wx.showToast({
                title: '请输入快递单号',
                icon: 'none'
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
})