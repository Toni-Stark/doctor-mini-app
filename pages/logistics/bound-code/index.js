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
        let remaining = list.find(item=> item.count !== item.selected);
        if(!remaining){
            this.setData({
                hadRemaining: true
            })
            wx.showToast({
                icon: 'loading',
                title: '上传中...',
            })
            setTimeout(()=>{
                wx.hideToast();
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
            }, 2500);
        } else if (this.data.hadRemaining){
            this.setData({
                hadRemaining: false
            });
        }
    },

    setCount(e){
        let index = e.currentTarget.dataset.index;
        this.data.requestList[index].selected = Number(e.detail);
        let list = this.data.requestList;
        this.setData({
            requestList: list,
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
        this.setData({
            // requestCodes: ['243833105279','2647280845879638942'],
            requestCodes: ['2647280845879638942'],
            requestList: JSON.parse(JSON
                .stringify(this.data.responseData)),
            inputCode: '',
            hadExpressSingle: true,
        })
        wx.hideToast();
    },

    setOrderItem(value){
        // 6914329004530
        this.setData({
            inputCode: value,
        })
        let obj = this.data.requestList.filter(item=>item.id === value);
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
        let index = this.data.requestList.findIndex(item => item.id === value);
        let list = [];
        if (index>=0) {
            if(this.data.requestList[index].selected == this.data.requestList[index].count){
                wx.showToast({
                    icon: 'none',
                    title: '此项商品数量已足够',
                })
                this.setData({inputCode: ''});
                return;
            }
            this.data.requestList[index].selected ++ ;
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
        console.log(e)
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