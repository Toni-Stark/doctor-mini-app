const request = require("./request");

var upload = (file, callback) => {
      request.post('/upload/token', {}).then(res=> {
        wx.uploadFile({
          url: 'https://up-z2.qiniup.com/',
          filePath: file.url,
          name: 'file',
          header: {
            "Content-type": 'multipart/form-data'
          },
          formData: {
            'token': res.data.token,
            'key':  'avatar/'+new Date().getTime()+Math.floor(Math.random()*1000) +'.'+ file.url.split('.')[1]
          },
          success: (response) => {
            if (response.statusCode != 200) {
              wx.hideLoading();
              return wx.showToast({
                title: '上传失败',
                icon: 'none'
              })
            }
            let data = JSON.parse(response.data)
            callback(data);
          },
        })
      });
  }

const uploadUrl = (event) => {
  return new Promise((resolve, reject) => {
    upload(event, (res)=>{
        return resolve(res)
    })
  })
}

module.exports = {
    // upload: uploadFile,
    uploadUrl: uploadUrl
  }