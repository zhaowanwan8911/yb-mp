import api from '../../utils/api.js'
const app = getApp();

Page({
  data: {
    user: {},
    headImage: '',
    childConfigs: [],
  },
  onShow: function () {
    this.setData({ user: app.user });
    if (!app.user.id) {
      // wx.navigateTo({ url: '../login/login' });
    } 
    if (!app.user.profilePhoto) {
      this.setData({ headImage: '../../icons/defaultProfilePhoto.png' });
    } else {
      this.setData({ headImage: app.user.profilePhoto });
    }
  },
});