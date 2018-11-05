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
    bindTextInput: function (e) {
      this.triggerEvent('customevent', e);
    }
  }
})
