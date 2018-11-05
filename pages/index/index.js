import api from '../../utils/api.js'
const app = getApp();

Page({
  data: {
    records: [],
    imgUrls: [
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onShow: function () {
    // api.getHomeRecords((res) => {
    //   if (res.data.code == 200) {
    //     this.setData({ records: res.data.data });
    //   }
    // });
  },
});
