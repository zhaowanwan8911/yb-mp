import api from '../../utils/api.js';
const app = getApp();

Page({
  data: {
    profilePhoto: '', 
    name: '', 
    mobile: '',
    birthday: '请选择', 
    sex: '', 
    address: '', 
    profession: '',
    sexText: '',
    headImage: '',
    photoName: '',
  },
  onShow: function () {
    const { profilePhoto, id, role, name, mobile, birthday, sex, address } = app.user;
    if (!id) {
      wx.navigateTo({ url: '../login/login' });
    } 
    birthday && this.setData({ birthday });
    this.setData({ sex });
    this.setData({ address });
    this.setData({ mobile });
    this.setData({ name });
    const sexText = sex !== null ? app.baseOptions.sexOpts[sex].text : '请选择';
    this.setData({ sexText });
    const photoName = id ? `p-${id}` : 'p-n';
    this.setData({ photoName });

    if (!profilePhoto) {
      this.setData({ headImage: '../../icons/defaultProfilePhoto.png' });
    } else {
      this.setData({ headImage: profilePhoto });
      this.setData({ profilePhoto });
    }
  },
  changeProfilePhoto: function (e) {
    this.setData({
      profilePhoto: e.detail.data,
    });
    this.setData({ headImage: e.detail.data });
  },
  selectSex: function (e) {
    const sex = e.detail.detail.value
    this.setData({
      sex,
    });
    const sexText = app.baseOptions.sexOpts[sex].text
    this.setData({
      sexText,
    });
  }, 
  resetUser: function () {
    const { id } = app.user;
    const { profilePhoto, birthday, address, sex, name } = this.data;
    const params = { profilePhoto, birthday, address, sex, name };
    if (!birthday || sex === null || !address) {
      wx.showToast({ icon: 'none', title: "有信息为空，请填写完毕再提交！" });
      return;
    }
    api.updateUser(id, params, (res) => {
      if (res.data.code === 0) {
        app.user.profilePhoto = profilePhoto;
        app.user.birthday = birthday;
        app.user.address = address;
        app.user.sex = sex;
        app.user.name = name;
        wx.setStorage({ key: "user", data: app.user });
        wx.showToast({ title: "更新信息成功！" });
        wx.navigateBack({
          delta: 1
        });
      } else {
        wx.showToast(res.data.msg);
      }
    });
  },
  selectBirthday: function (e) {
    this.setData({
      birthday: e.detail.detail.value,
    });
  },
  inputAddress: function (e) {
    this.setData({
      address: e.detail.detail.value,
    });
  },
});