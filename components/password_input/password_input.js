// components/password_input/password_input.js
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
    bindPwInput: function (e) {
      this.triggerEvent('customevent', e);
    }
  }
})
