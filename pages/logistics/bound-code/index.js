// pages/logistics/order-code/index.js
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
        hadRemaining: false,
    },

    regNumberRemaining(list){
        let remaining = list.find(item=> item.count !== item.selected);
        console.log(remaining);
        if(!remaining){
            this.setData({
                hadRemaining: true
            })
        } else if (this.data.hadRemaining){
            this.setData({
                hadRemaining: false
            })
        }
    },

    setCount(e){
        let index = e.currentTarget.dataset.index;
        this.data.requestList[index].selected = Number(e.detail);
        let list = this.data.requestList;
        this.setData({
            requestList: list
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
            let obj = this.data.requestList.filter(item=>item.id === e.detail.value);
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
            let index = this.data.requestList.findIndex(item => item.id === e.detail.value);
            if (index>=0) {
                this.data.requestList[index].selected ++ ;
                let list = this.data.requestList;
                this.setData({requestList: list})
            }
            wx.hideToast();
            wx.showToast({icon: 'none',title: '添加成功',duration: 1000});
            this.regNumberRemaining(list);
            // 6914329004530
            timer = null;
            this.setData({inputCode: ''})
        }, 500);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
})