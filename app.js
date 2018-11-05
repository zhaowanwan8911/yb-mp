import api from './utils/api.js'

App({
  onLaunch: function () {
    const userInfo = wx.getStorageSync('user');
    if (userInfo !== null) {
      this.user = userInfo;
    }
    api.getOptions((res) => {
      if (res.data.code == 200) {
        this.baseOptions = res.data.data;
      }
    });
  },
  user: { // 全局的用户信息，类似于vuex
    name: '', 
    mobile: '', 
    sex: null,
    birthday: null,
    id: null, 
    role: null, 
    profilePhoto: null,
    baseOptions: {},
  }
});