// pages/index/search-list/index.js
const { route } = require("../../../utils/index")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        search: '',
        searchList: [],
        localList: ['莲花清瘟胶囊', '藿香正气水', '牛黄']
    },

    confirm(){
        let list = this.data.localList.reverse();
        list.push(this.data.search);
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
                ],
                localList: list.reverse()
            }) 
        } else {
            this.setData({
                searchList: [],
                localList: list.reverse()
            })
        }
    },
    naviToLocalhost(e){
        this.setData({
            search: e.currentTarget.dataset.title
        })
        this.confirm()
    },

    deleteKey(){
        this.setData({
            search: '',
            searchList: []
        })
    },
    naviBack(){
        route.navigateBack(1)
    },
    bindKeyInput(e){
        this.setData({
            search: e.detail.value,
        })
    },
    onLoad: function (options) {

    },
})