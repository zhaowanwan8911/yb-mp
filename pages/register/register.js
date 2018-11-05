import api from '../../utils/api.js'
const app = getApp();

Page({
  data: {
    name: '',
    realName: '',
    mobile: '',
    password: '',
    confirmPass: '',
    // smsCode: '',
  },
  inputName: function (e) {
    this.setData({
      name: e.detail.detail.value,
    });
  },
  inputRealName: function (e) {
    this.setData({
      realName: e.detail.detail.value,
    });
  },
  inputMobile: function (e) {
    this.setData({
      mobile: e.detail.detail.value,
    });
  },
  inputPassword: function (e) {
    this.setData({
      password: e.detail.detail.value,
    });
  },
  inputConfirmPass: function (e) {
    this.setData({
      confirmPass: e.detail.detail.value,
    });
  },
  // inputSms: function (e) {
  //   this.setData({
  //     smsCode: e.detail.detail.value,
  //   });
  // },
  register: function () {
    const { name, realName, mobile, password, confirmPass, smsCode } = this.data;
    if (!name) {
      wx.showToast({ title: "请输入昵称！" });
      return;
    }
    if (!realName) {
      wx.showToast({ title: "请输入姓名！" });
      return;
    }
    if (!/^\d{11}$/.test(mobile) || !mobile) {
      wx.showToast({ title: "手机号码有误，请重填" });
      return;
    }
    if (!/^.{6,}$/.test(password) || !password) {
      this.toast('密码不足6位，请重填');
      return;
    }
    if (password !== confirmPass) {
      wx.showToast({ title: "两次密码不一致，请重填" });
      return;
    }
    // if (!smsCode) {
    //   wx.showToast({ title: "请输入验证码！" });
    // }

    const params = {
      name: this.data.name,
      realName: this.data.realName,
      mobile: this.data.mobile,
      password: this.data.password,
    }

    api.register(params, (res) => {
      if (res.data.code === 0) {
        const fomatToken = `Bearer ${res.data.data.token}`;
        app.user = res.data.data.userInfo;
        wx.setStorage({ key: "token", data: res.data.data.token });
        wx.setStorage({ key: "user", data: app.user });
        wx.switchTab({ url: '../index/index' });
      } else {
        wx.showToast({ icon: 'none', title: res.data.msg });
      }
    });
  }
});