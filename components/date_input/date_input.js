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
    array: ['男', '女'],
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
