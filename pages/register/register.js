import api from '../../utils/api.js'
const app = getApp();

Page({
  data: {
    name: '',
    studentName: '',
    address: '',
    mobile: '',
    password: '',
    confirmPass: '',
    smsCode: '',
  },
  inputName: function (e) {
    this.setData({
      name: e.detail.detail.value,
    });
  },
  inputStudentName: function (e) {
    this.setData({
      studentName: e.detail.detail.value,
    });
  },
  inputAddress: function (e) {
    this.setData({
      address: e.detail.detail.value,
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
  inputSms: function (e) {
    this.setData({
      smsCode: e.detail.detail.value,
    });
  },
  register: function () {
    const { mobile, password, confirmPass, smsCode, name, studentName, address } = this.data;
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
    if (!smsCode) {
      wx.showToast({ title: "请输入验证码！" });
    }
    if (!name) {
      wx.showToast({ title: "请输入真实姓名！" });
      return;
    }
    if (!studentName) {
      wx.showToast({ title: "请输入孩子姓名！" });
      return;
    }
    if (!address) {
      wx.showToast({ title: "请输入家庭住址！" });
      return;
    }

    api.register(this.data, (res) => {
      if (res.data.code === 200) {
        const fomatToken = `Bearer ${res.data.data.token}`;
        wx.setStorage({
          key: "token", data: fomatToken, success: () => {
            api.getUserInfo((respones) => {
              if (respones.data.code === 200) {
                app.user = respones.data.data;
                wx.setStorage({ key: "user", data: respones.data.data });
              }
            });
          }
        });
        wx.switchTab({ url: '../index/index' });
      } else {
        wx.showToast({ title: '请求失败', content: res.data.msg });
      }
    });
  }
});