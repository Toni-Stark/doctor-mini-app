// components/back/index.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type:String,
            value:''
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
    },
    ready(){
        let headerHeight = app.globalData.navHeight
        let navTop = app.globalData.navTop
        this.setData({
            height: headerHeight,
            navTop: navTop
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {
        backPress(e){
            this.triggerEvent("onPress")
        }
    }
})
