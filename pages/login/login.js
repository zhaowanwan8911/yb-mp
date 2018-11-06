import api from '../../utils/api.js'
const app = getApp();

Page({
  login: function (e) {
    api.login(e.detail.value, (res) => {
      if (res.data.code === 0) {
        const fomatToken = `Bearer ${res.data.data.token}`;
        wx.setStorage({ key: "token", data: fomatToken });
        app.user = res.data.data.userInfo;
        wx.setStorage({ key: "user", data: app.user });
        wx.switchTab({ url: '../index/index' });
        } else {
        wx.showModal({
          showCancel: false,
          title: '登录失败',
          content: res.data.msg,
        });
      }
    });
  },
});