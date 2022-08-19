const setStorageSync = (key, value) => {
    try{
      return wx.setStorageSync(key, value);
    }catch(e) {
      return false;
    }
  }
  
  const getStorageSync = (key) => {
    try{
      return wx.getStorageSync(key);
    }catch(e) {
      return false;
    }
  }
  
  const setStorage = (key, value) => {
    try{
      return wx.setStorage({
        key: key,
        data: value
      });
    }catch(e) {
      return false;
    }
  }
  
  const getStorage = (key, callable) => {
    try{
      return wx.getStorage({
        key: key,
        success() {
          callable && callable()
        }
      });
    }catch(e) {
      return false;
    }
  }
  
  const clearStorage = () => {
    try{
      return wx.clearStorage();
    }catch(e) {
      return false;
    }
  }
  
  const clearStorageSync = () => {
    try{
      return wx.clearStorageSync();
    }catch(e) {
      return false;
    }
  }
  
  const removeStorage = (key, callable) => {
    try{
      return wx.removeStorage({
        key: key,
        success() {
          callable && callable()
        }
      });
    }catch(e) {
      return false;
    }
  }
  
  const removeStorageSync = (key, callable) => {
    try{
      return wx.removeStorageSync(key);
    }catch(e) {
      return false;
    }
  }
  
  module.exports = {
    removeStorageSync: removeStorageSync,
    removeStorage: removeStorage,
    clearStorageSync: clearStorageSync,
    clearStorage: clearStorage,
    getStorage: getStorage,
    getStorageSync: getStorageSync,
    setStorage: setStorage,
    setStorageSync: setStorageSync
  }