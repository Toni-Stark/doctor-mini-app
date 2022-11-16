// pages/mine/evaluation-list/index.js
const { getInterfaceList } = require("../../../common/interface");
const { route } = require("../../../utils/index");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        page: 1,
        dataList: [],
        refresh: false
    },
    back(){
        route.navigateBack(1)
    },
    naviToDetail(e){
      let id = e.currentTarget.dataset.id
      route.navigateTo('../order-evaluate/index?edit=1&id='+id)
    },
    addDataList(){
        let page = this.data.page + 1;
        getInterfaceList({p: page}).then(result=>{
          if(result.code!=200){
            return wx.showToast({
              title: result.msg,
              icon: 'none'
            })
          };
          if(result.data.length>0){
              let list = [...this.data.dataList, ...result.data.list];
              this.setData({
                  dataList: list,
                  page: page
              })
          }
        });
       
    },
    brashData(){
        this.setData({
            refresh: true
        })
        this.getDetailList({p: this.data.page});
    },
    getDetailList(params){
        getInterfaceList(params).then(res=>{
            this.setData({refresh: false})
            if(res.code!=200){
                return wx.showToast({
                    title: res.msg,
                    icon: 'none',
                })
            };
            this.setData({
                dataList: res.data.list,
            }) 
        });
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getDetailList({p: this.data.page});
    },
})