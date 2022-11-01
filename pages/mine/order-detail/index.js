const { route } = require("../../../utils/index");

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
                    },
                    {
                        name: '云南白药喷雾',
                        count: '3盒',
                    },
                    {
                        name: '999感冒灵颗粒',
                        count: '3瓶',
                    },
                    {
                        name: '999感冒灵颗粒',
                        count: '3瓶',
                    },
                ]
            },
        ]
    },
    back(){
        route.navigateBack(1)
    },
    naviToPrice(){
        route.navigateTo('../order-evaluate/index')
    },
    naviToService(){
        route.navigateTo('../order-service/index')
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
    },
})