Component({
  properties: {
    leftText: {
      type: String,
      value: '',
    },
    rightValue: {
      type: String,
      value: '',
    },
  },
  data: {

  },
  methods: {
    showTips: function () {
      wx.showToast({ icon: 'none', title: "请去 设置->修改手机" });
    }
  }
});
