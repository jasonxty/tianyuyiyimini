// miniprogram/pages/photos/index.js
Page({
  data: {
    userInfo: {},
    slideList: [
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/1.jpg?sign=4a037993bd6b1326a4f6ad937264a1c0&t=1562924342',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/2.jpg?sign=00db6c995c88c07391ffe5fcda6a41fc&t=1562924379',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/3.jpg?sign=1d33ecd7ef3faacf4590db43493c6313&t=1562924405',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/4.jpg?sign=4dc1f7cfc9ae1a076e22341609423bfd&t=1563154765',
      'https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/5.jpg?sign=7dc9b16b323ae59669b19383f339d89c&t=1563154796'
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