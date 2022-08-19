// components/back/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type:String,
            value:''
        },
        height: {
            type:Number,
            value:''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

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
