var config = require('../config/index')
var storage = require("./storage")
var route = require('./router')

// 看着很不爽. 直接用es6语法.
function request(url, params, method, options) {
  var url = config.baseUri + url;
  var app = getApp(),
    token = storage.getStorageSync('token') || '',
    options = options || {},
    headers = options.headers || {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': token, // 这里是验证信息. 看情况是否需要这个.
    }
  params = params || [];
  method = method || 'get';

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      method: method,
      header: headers,
      dataType: 'json',
      success: (response) => {
        // 直接异常就可以了.
        if (response.statusCode != 200) {
          return config.debug ? reject(response) : abort(url, params, method, '', 0, '请求响应失败，状态码:' + response.statusCode);
        }

        if (response.data && response.data.code == 401) {
          getApp().globalData.user = null;
          storage.removeStorageSync('token')
            wx.showToast({
              title: response.data.msg,
              icon: 'none'
            })
          return route.navigateTo('/pages/mine/register/index');
        }

        // 响应成功的信息.
        return resolve(response.data);
      },
      fail: () => {
        if (config.debug) {
          return reject({
            msg: '请求失败',
            url: url,
            method: method,
            data: params
          });
        }
        abort(url, params, method, '', 0, '请求响应失败');
      },
    })
  });
}

function getWait(url, params, is_wait = false) {
  is_wait = is_wait || false
  if (is_wait) {
    Toast.loading({
      forbidClick: true,
      zIndex: 9999,
      message: '加载中...',
      mask: true
    })
  }

  return get(url, params).then((resolve, reject) => {
    is_wait && Toast.clear()
    resolve()
  });
}

function postWait(url, params, is_wait = false) {
  is_wait = is_wait || false
  if (is_wait) {
    Toast.loading({
      forbidClick: true,
      zIndex: 9999,
      message: '加载中...',
      mask: true
    })
  }
  return post(url, params).then((resolve, reject) => {
    is_wait && Toast.clear()
    resolve()
  });
}

function get(url, params) {
  return request(url, params, 'get');
}

function post(url, params) {
  return request(url, params, 'post')
}

// 异常报错.
function abort(url, params, method, file, line, msg) {
  file = file || ''
  line = line || 0

  var data = {
    url: url,
    params: JSON.stringify(params),
    method: method,
    file,
    line,
    msg: JSON.stringify(msg)
  }

  return post('/error/capture', data).then(() => {})
}

module.exports = {
  get: get,
  post: post,
  abort: abort,
  postWait: postWait,
  getWait: getWait
}