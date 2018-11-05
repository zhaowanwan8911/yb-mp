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

    api.register(this.data, (res) => {
      if (res.data.code === 0) {
        const fomatToken = `Bearer ${res.data.data.token}`;
        wx.setStorage({
          key: "token", data: fomatToken, success: () => {
            // api.getUserInfo((respones) => {
            //   if (respones.data.code === 200) {
            //     app.user = respones.data.data;
            //     wx.setStorage({ key: "user", data: respones.data.data });
            //   }
            // });
          }
        });
        wx.switchTab({ url: '../index/index' });
      } else {
        wx.showToast({ title: '请求失败', content: res.data.msg });
      }
    });
  }
});