// pages/index/customer-services/index.js
const { route, storage } = require("../../../utils/index")
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputBottom: 0,
        say: '',
        messageList: [
        ],
        locolhostList: [
            {
                msg: '你好',
                type: 'mine',
                id: 44,
            },
            {
                msg: '我是药药通',
                type: 'other',
                id: 49,
            },
            {
                msg: '再见',
                type: 'mine',
                id: 46,
            },
        ],
        customerList: [
            {
                title: '症状自诊',
                url: '../../../img/index/zizhen.png'
            },
            {
                title: '小病找医',
                url: '../../../img/index/zizhen.png'
            },
            {
                title: '用药管家',
                url: '../../../img/index/zizhen.png'
            },
            {
                title: '防疫问答',
                url: '../../../img/index/zizhen.png'
            },
            {
                title: '疾病知识',
                url: '../../../img/index/zizhen.png'
            },
            {
                title: '药品说明',
                url: '../../../img/index/zizhen.png'
            },
        ],
        askList: [
            {
                title: '咳嗽是怎么回事'
            },
            {
                title: '呕吐是怎么回事'
            },  
            {
                title: '咳嗽用什么药'
            },  
            {
                title: '感冒的治疗方法'
            },  
            {
                title: '清开灵颗粒的注意事项'
            }  
        ],
        showMode: false,
        showLabel: false,
        scrollTop: '',
        nickName: ''
    },

    naviToDetail(e){
        route.navigateTo('../recommend-detail/index?title='+e.currentTarget.dataset.title)
    },
    naviToServices(e){
        this.setData({
            showLabel: false,
            showMode: false,
            say: e.currentTarget.dataset.title
        })
        this.sendMessage()
    },
    setAskSay(e){
        this.setData({
            showLabel: !this.data.showLabel
        })
    },
    showMode(e){
        this.setData({
            showMode: !this.data.showMode
        })
    },
    bindKeyInput: function(e){
        this.setData({
            say: e.detail.value
        })
    },
    sendMessage: function(e){
        let data = [...this.data.messageList, {
            type: 'mine',
            msg: this.data.say
        }];
        this.setData({
            messageList: data,
            say: ''
        })
        this.setData({
            scrollTop: app.globalData.screenHeight
        })
    },
    foucus: function (e) {
        var that = this;
        that.setData({
            inputBottom: e.detail.height
        })
    },
    blur: function (e) {
        var that = this;
        that.setData({ 
            inputBottom: 0
        })
    },
    onLoad: function (options) {
        if(options.title){
            this.setData({
                say: options.title,
            });
            this.sendMessage()
        }
        let nickName = storage.getStorageSync('nickName');
        this.setData({
            nickName: nickName,
            nick: nickName.slice(0, 1) 
        })
    },
})