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
    goNextPage: (e) => {
      console.log(e)
      // wx.navigateTo({
      //   url: '../setting/setting'
      // });
    },
  }
})
