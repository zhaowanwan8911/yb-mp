import api from '../../utils/api.js';

Component({
  properties: {
    mobile: {
      type: String,
      value: '',
    },
  },
  data: {
    sendSmsTxt: '发送验证码'
  },
  methods: {
    bindSmsInput: function (e) {
      this.triggerEvent('customevent', e);
    },
    sendSms: function () {
      const mobile = this.properties.mobile;
      if (!/^\d{11}$/.test(mobile) || !mobile) {
        wx.showToast({ title: "手机号码有误，请重填" });
        return;
      }
      if (this.data.sendSmsTxt !== '发送验证码') {
        return;
      }
      api.sendSms({ mobile }, (res) => {
        if(res.data.code === 200) {
          this.setTime(60);
        }
      });
    },
    setTime: function(time) {
      if (!time) {
        this.setData({ sendSmsTxt: '发送验证码' })
        return;
      }
      this.setData({ sendSmsTxt: `重新发送(${time})` })
      time--;
      setTimeout(() => {
        this.setTime(time);
      }, 1000);
    },
  }
});
