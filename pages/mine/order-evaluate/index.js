const { route } = require("../../../utils/index")
const { setCommentPost, getInterfaceDetail } = require("../../../common/interface");

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
        failText: '',
        edit: false
    },
    checkOut(e){
        this.setData({
            currentId: e.currentTarget.dataset.id
        })
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

    getDetail(options){
      getInterfaceDetail({
        comment_id: options.id
      }).then(res=>{
        if(res.code!=200){
          return wx.showToast({
              title: res.msg,
              icon: 'none'
          })
        };
        this.setData({
          edit: true,
          id: options.id,
          order: options.order,
          info: res.data,
          failText: res.data.comment.content,
          express: res.data.comment.express,
          value: res.data.comment.overall,
        });
      })
      return;
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: options?.edit ? "评价信息":"发表评价"
      })

      if(options?.edit){
        this.getDetail(options)
      } else {
         this.setData({
            id: options.id,
            order: options.order_no,
            edit: false
        });
      }
    },
})