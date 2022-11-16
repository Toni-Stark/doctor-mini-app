// components/count-settting/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        count: {
            type: Number,
            value: 0
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
        setCountLeft(){
            if(this.properties.count>0){
                this.triggerEvent("setCount", this.properties.count-1)
            }
        },
        setInput(e){
            this.triggerEvent("setCount", e.detail.value)
        },
        setCountRight(e){
            this.triggerEvent("setCount", this.properties.count+1)
        },
    }
})
