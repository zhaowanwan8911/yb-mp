import api from '../../utils/api.js'
const app = getApp();

Page({
  data: {
    records: [],
    imgUrls: [
      'http://img.yibiankeji.com/ybkj/slide01.png',
      'http://img.yibiankeji.com/ybkj/slide02.png',
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
