const { route } = require("../../../utils/index")
const { setCommentPost } = require("../../../common/interface");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: '',
        value: 3,
        express: 3,
        fileList: [],
        currentId: '',
        cateList: [
            {
                title: '药到病除',  
                id: '13'
            },
            {
                title: '很管用',  
                id: '14'
            },
            {
                title: '药不贵',  
                id: '15'
            },
            {
                title: '一颗就生效',  
                id: '16'
            },
            {
                title: '药有点苦',  
                id: '17'
            }
        ],
        failText: ''
    },
    checkOut(e){
        this.setData({
            currentId: e.currentTarget.dataset.id
        })
        console.log(this.data.currentId)
    },
    afterRead(event) {
        let list = this.data.fileList.concat(event.detail.file)
        this.setData({
            fileList: list
        })
    },
    back(){
        route.navigateBack(1)
    },
    onChange(event) {
        this.setData({
          value: event.detail,
        });
    },
    onChangeExpress(event) {
        this.setData({
            express: event.detail,
        });
    },
    onChangeFail(event){
        this.setData({
            failText: event.detail.value,
        });
    },
    setComment(){
        setCommentPost({
            member_order_id: this.data.id,
            overall: this.data.value,
            express: this.data.express,
            content: this.data.failText
        }).then(res=>{
            if(res.code!=200){
                return wx.showToast({
                    title: res.msg,
                    icon: 'none'
                })
            };
            wx.showToast({
                title: "评价成功",
                icon: 'none'
            })
            setTimeout(()=>{
                route.navigateBack(-1)
            }, 500)
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id: options.id
        })
    },
})