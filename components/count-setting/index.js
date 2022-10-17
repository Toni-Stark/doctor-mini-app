// components/count-settting/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        count: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        setCountLeft(){
            if(this.data.count>0){
                this.setData({
                    count: this.data.count-1
                })
            }
        },
        setCountRight(e){
            console.log(this.data.count + 1);
            this.setData({
                count: this.data.count+1
            })
        },
    }
})
