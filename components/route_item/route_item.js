Component({
  properties: {
    leftText: {
      type: String,
      value: '',
    },
  },
  methods: {
    onClick: function () {
      this.triggerEvent('customevent');
    }
  }
})
