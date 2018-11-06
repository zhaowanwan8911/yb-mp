Component({
  properties: {
    leftText: {
      type: String,
      value: '',
    },
    rightValue: {
      type: String,
      value: '请选择',
    },
  },
  methods: {
    bindPickerChange: function (e) {
      this.setData({
        index: e.detail.value
      });
      this.triggerEvent('customevent', e);
    },
  }
})
