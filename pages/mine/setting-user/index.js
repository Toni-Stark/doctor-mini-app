// pages/mine/setting-user/index.js
const {storage, upload} = require('../../../utils/index');
const {setUserInfo} = require('../../../common/interface')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "../../../img/app-logo/0.png",
    nickname: ''
  },
  getFocus(){
    this.setData({
        nickname: ' ',
    })
  },
  
  onInput(e){
    const { value } = e.detail 
    this.setData({
        nickname: value,
    })
    storage.setStorageSync('nickname', value);
    setUserInfo({nickname: value}).then(res=>{
        if(res.code != 200){
            return wx.showToast({
              title: 'title',
              icon: 'none'
            })
        }
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
    upload.uploadUrl({url: avatarUrl}).then((res)=>{
        setUserInfo({avatar: res.key}).then(res=>{
            if(res.code != 200){
                return wx.showToast({
                  title: 'title',
                  icon: 'none'
                })
            }
            storage.setStorageSync('avatarUrl', res.data.avatar);
        })
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      let avatar = storage.getStorageSync('avatarUrl');
      let nickname = storage.getStorageSync('nickname');
    this.setData({
        avatarUrl: avatar,
        nickname: nickname,
    })
  },
})