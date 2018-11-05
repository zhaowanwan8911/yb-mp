Component({
  properties: {
    btnText: {
      type: String,
      value: '',
    },
  },
  data: {
  },
  methods: {
    onClick: function () {
      this.triggerEvent('customevent', {});
    }
  }
})
