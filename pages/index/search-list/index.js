// pages/index/search-list/index.js
const { route } = require("../../../utils/index")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        search: '',
        searchList: []
    },

    confirm(){
        if (this.data.search.length>0){
            this.setData({
                searchList: [
                    {
                        name: '阿莫西林',
                        desc: '北京复方药公司'
                    },
                    {
                        name: '阿莫西林',
                        desc: '北京复方药公司'
                    },
                    {
                        name: '阿莫西林',
                        desc: '北京复方药公司'
                    },
                    {
                        name: '阿莫西林',
                        desc: '北京复方药公司'
                    },
                    {
                        name: '阿莫西林',
                        desc: '北京复方药公司'
                    },
                    {
                        name: '阿莫西林',
                        desc: '北京复方药公司'
                    },
                    {
                        name: '阿莫西林',
                        desc: '北京复方药公司'
                    },
                ]
            }) 
        } else {
            this.setData({
                searchList: []
            })
        }
    },

    deleteKey(){
        this.setData({
            search: ''
        })
    },
    naviBack(){
        route.navigateBack(1)
    },
    bindKeyInput(e){
        this.setData({
            search: e.detail.value
        })
    },
    onLoad: function (options) {

    },
})