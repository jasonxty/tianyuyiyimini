// pages/invitation/index.js
const app = getApp()

var touchDot = 0; //触摸时的原点  
var time = 0; // 时间记录，用于滑动时且时间小于1s则执行左右滑动 
var interval = ""; // 记录/清理时间记录 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: "",
    music_url: 'https://7874-xtydtc01-1259619275.tcb.qcloud.la/jayzhouwedding.mp3?sign=efdd7e8734bb9bfa2ca04ce227859d84&t=1565089175',
    isPlayingMusic: true,
    mainInfo: {
      cover: "https://7874-xtydtc01-1259619275.tcb.qcloud.la/weddingphotos/20190806.jpg?sign=1ce77b10cbda59d1a207f5fc3b175525&t=1565091560",
      date: "2019年10月1日",
      lunar: "九月初三",
      hotel: "桐乡新世纪大酒店",
     }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //创建动画
    var animation = wx.createAnimation({

      duration: 3600,
      timingFunction: "ease",
      delay: 600,
      transformOrigin: "50% 50%",

    })


    animation.scale(0.9).translate(10, 10).step(); //边旋转边放大


    //导出动画数据传递给组件的animation属性。
    this.setData({
      animationData: animation.export(),
    })

    var that = this
    wx.playBackgroundAudio({
      dataUrl: this.data.music_url,
      title: '',
      coverImgUrl: ''
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    //console.log(that.data);
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
  play: function (event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
})