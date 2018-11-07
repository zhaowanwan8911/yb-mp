import api from '../../utils/api.js'
const app = getApp();

Page({
  data: {
    password: '',
    oldPassword: '',
    confirmPass: '',
  },
  changePassword: function () {
    const password = this.data.password;
    const confirmPass = this.data.confirmPass;
    if (!/^.{6,}$/.test(password) || !password) {
      wx.showToast({ title: "密码不足6位，请重填" });
      return;
    }
    if (password !== confirmPass) {
      wx.showToast({ title: "两次密码不一致，请重填" });
      return;
    }
    const id = app.user.id;
    const params = {
      oldPassword: this.data.oldPassword,
      password,
    };
    api.updatePassword(id, params, (res) => {
      if (res.data.code === 0) {
        wx.navigateTo({ url: '../login/login' });
      } else {
        wx.showToast(res.data.msg);
      } 
    });
  },
  oldPwChange: function (e) {
    this.setData({
      oldPassword: e.detail.detail.value,
    });
  },
  newPwChange: function (e) {
    this.setData({
      password: e.detail.detail.value,
    });
  },
  conPwChange: function (e) {
    this.setData({
      confirmPass: e.detail.detail.value,
    });
  },
})