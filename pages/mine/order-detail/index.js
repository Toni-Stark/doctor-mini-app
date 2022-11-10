const { getOrderDetail } = require("../../../common/interface");
const { route, request } = require("../../../utils/index");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList: [
            {
                companyName: '美团',
                orderId: '24234234645878797122',
                payTime: '2022年12月13日 13点25分',
                price: '30元',
                people: '孙仲谋',
                shopList: [
                    {
                        name: '999感冒灵颗粒',
                        count: '3瓶',
                        unitPrice: '12元',
                    },
                    {
                        name: '云南白药喷雾',
                        count: '3盒',
                        unitPrice: '9元',
                    },
                    {
                        name: '复方感冒灵颗粒',
                        count: '3瓶',
                        unitPrice: '3元',
                    },
                    {
                        name: '葵花胃康灵',
                        count: '3瓶',
                        unitPrice: '6元',
                    },
                ]
            },
        ],
        dataInfo: {}
    },

    back(){
        route.navigateBack(1)
    }, 
    naviToPrice(){
        route.navigateTo('../order-evaluate/index?id='+this.data.id)
    },
    naviToService(){
        route.navigateTo('../order-service/index?id='+this.data.id)
    },
    getDetails(params) {
        getOrderDetail(params).then(res=>{
            if(res.code!=200){
                return wx.showToast({
                    title: res.msg,
                    icon: 'none'
                })
            };
            this.setData({
                dataInfo: res.data
            }) 
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id: options.id
        })
        this.getDetails({member_order_id: options.id})
    },
})