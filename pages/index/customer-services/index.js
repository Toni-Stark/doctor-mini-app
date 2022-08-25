// pages/index/customer-services/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputBottom: 0,
        say: '',
        messageList: [
            {
                msg: 'Hello',
                type: 'other',
            },
            {
                msg: '你好',
                type: 'mine',
            },
            {
                msg: 'Hello',
                type: 'other',
            },
        ],
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

    },
})