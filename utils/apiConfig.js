// 封装post请求函数

const get = (url, successCallback) => {
  const token = wx.getStorageSync('token');
  let loaded = false;
  setTimeout(() => {
    if (!loaded) {
      wx.showLoading();
    }
  }, 500);

  const heaherCongfig = {
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": token
  };

  wx.request({
    url,
    header: heaherCongfig,
    method: "GET",
    success: (res) => {
      if (res.data.code !== 0) {
        wx.showToast(res.data.msg);
      } else {
        successCallback(res);
      }
    },
    fail: (e) => {
      wx.showToast({ title: "服务器请求有误！" })
    },
    complete: (res) => {
      loaded = true;
      wx.hideLoading();
    }
  });
};

const post = (url, params, successCallback) => {
  const token = wx.getStorageSync('token');
  let loaded = false;
  setTimeout(() => {
    if (!loaded) {
      wx.showLoading();
    }
  }, 500);
  
  const heaherCongfig = {
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": token  
  };
  wx.request({
    url,
    data: params,
    header: heaherCongfig,
    method: "POST",
    success: (res) => {
      if (res.data.code !== 0) {
        wx.showToast(res.data.msg);
      } else {
        successCallback(res);
      }
    },
    fail: (e) => {
      wx.showToast({ title: "服务器请求有误！" })
    },
    complete: (res) => {
      loaded = true;
      wx.hideLoading();
    }
  });
};

const put = (url, params, successCallback) => {
  const token = wx.getStorageSync('token');
  let loaded = false;
  setTimeout(() => {
    if (!loaded) {
      wx.showLoading();
    }
  }, 500);

  const heaherCongfig = {
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": token
  };
  wx.request({
    url,
    data: params,
    header: heaherCongfig,
    method: "PUT",
    success: (res) => {
      if (res.data.code !== 0) {
        wx.showToast(res.data.msg);
      } else {
        successCallback(res);
      }
    },
    fail: (e) => {
      wx.showToast({ title: "服务器请求有误！" })
    },
    complete: (res) => {
      loaded = true;
      wx.hideLoading();
    }
  });
};

const upload = (url, params, successCallback) => {
  const token = wx.getStorageSync('token');
  const { imgName } = params;
  
  wx.chooseImage({
    success(res) {
      const img = res.tempFilePaths[0];
      const imgType = img.split('.')[3];
      const now = Math.round(Date.now() / 1000); // 当前第几秒
      const rename = imgName ? `${imgName}-${now}.${imgType}` : 'p-${now}.${imgType}';
      wx.uploadFile({
        url: url,
        filePath: img,
        header: {
          "Content-Type": "multipart/form-data",
          'accept': 'application/json',
          "Authorization": token
        },
        name: 'file',
        formData: {
          'rename': rename
        },
        success(res) {
          const data = JSON.parse(res.data)
          if (data.code !== 0) {
            wx.showToast(res.data.msg);
          } else {
            successCallback(data);
          }
        }
      })
    }
  });
};

module.exports = {
  get,
  post,
  put,
  upload,
};



