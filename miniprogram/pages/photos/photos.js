// miniprogram/pages/photos/index.js
Page({
  data: {
    userInfo: {},
    slideList: [
           'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-224-min.jpg?sign=ec0dc43397ddd697dc189cb8d3015aa3&t=1567834309',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-235-min.jpg?sign=5b975354e3aa83568deae3a2817d94d3&t=1567834343',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-007jx-min.jpg?sign=11fd58dde9e81a64d68bee4e534e4376&t=1567834357',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-074-min.jpg?sign=873905f880c63d33ba12789a77c3c6d3&t=1567837255', 

'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-002jx-min.jpg?sign=2e349f1707189d3fe445a2eeef1fee50&t=1567834374',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-061-min.jpg?sign=19e6b58ef595086eac5889c4eabe70f4&t=1567837345',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-136-min.jpg?sign=25b6f4aa085052f7dce4ed57c403ecbc&t=1567834395',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-008jx-min.jpg?sign=97ade7d27b355c0a5b6e86f409cf65b2&t=1567834432',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-005jx-min.jpg?sign=f79fc2af5122bb0a0ed52065d81a079a&t=1567834452',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-146-min.jpg?sign=664acb9f9ecdd017bb208837cff583dc&t=1567834466',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-131-min.jpg?sign=e28977fcf7fba94598753de052c1337b&t=1567834489',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/%E9%83%9D%E5%B1%B1%E5%90%9B20190629z-098-min.jpg?sign=306f9c17ee3f14c458269c8e56362e8b&t=1567834253'
    ]
  },
  onLoad: function () {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.slideList // 需要预览的图片http链接列表
    })
  },
})