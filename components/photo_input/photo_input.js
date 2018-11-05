import api from '../../utils/api.js'

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
    photoName: {
      type: String,
      value: '',
    },
  },
  methods: {
    uploadPhoto: function () {
      const params = { imgName: this.properties.photoName };
      const that = this;
      api.uploadPhoto(params, (res) => {
        that.triggerEvent('customevent', res);
      });
    }
  }
});
