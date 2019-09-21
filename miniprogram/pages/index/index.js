// pages/invitation/index.js
const app = getApp();
const back = wx.getBackgroundAudioManager();
var touchDot = 0; //触摸时的原点  
var time = 0; // 时间记录，用于滑动时且时间小于1s则执行左右滑动 
var interval = ""; // 记录/清理时间记录 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: "",
    isPlayingMusic: true,
    mainInfo: {
      cover: "https://7874-xtydtc01-1259619275.tcb.qcloud.la/miscpics/cover.jpg?sign=63ffbb16b8dae40530979a6944e50243&t=1567834137",
      date: "2019年10月1日",
      lunar: "九月初三",
      hotel: "桐乡新世纪大酒店",
     },
     hasUserInfo: false,
     userInfo: null,
     realSta:false,
     showModal:false,
     dfinvitation: "很感谢有婚礼这个机会可以和你沟通，相信一定是特别的缘分让我们彼此认识，相互影响，诚挚的邀请你来参加我们10月1号在桐乡的婚礼，希望你有一个开心的时光。",
     invitation: "",
     nickName: ""
  },
  backmusic: function() {
    player();
    function player() {
      back.title = "JEweddingmusic",
      back.src = 'https://7874-xtydtc01-1259619275.tcb.qcloud.la/jayzhouwedding.mp3?sign=efdd7e8734bb9bfa2ca04ce227859d84&t=1565089175',
      back.onEnded(() => {
        player();
      }) 
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    });
    this.backmusic();
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
    console.log('run hereerer')
    console.log('backIndex', app.globalData.backIndex)
    if (app.globalData.backIndex) {
      console.log('run herere4')
      this.showrealInv()
    }
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
  getrealInv: function() {
    if (!app.globalData.hasUserInfo) {
      console.log('run here1')
      wx.navigateTo({
        url: './authorize',
      })
    } else {
      this.showrealInv()
    }
  },

  showrealInv: function() {
    console.log('run here2');
    const db = wx.cloud.database()
    db.collection('invitation').where({
      nickName: app.globalData.userInfo.nickName
    }).get({
      success: res => {
        console.log('XTYDBGsucessful');
        console.log(app.globalData.userInfo.nickName);
        console.log(this.data.dfinvitation);
        this.setData({
          invitation: this.data.dfinvitation,
          nickName: app.globalData.userInfo.nickName
        })
        if(res){
          this.setData({
            invitation: (res.data[0]).invitation,
            nickName: (res.data[0]).realName
          })
        }
      },
      fail: res => {
        console.log('failure')
        this.setData({
          nickName: app.globalData.userInfo.nickName
        })
      }
    })
    this.submit()
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
      this.backmusic();
      this.setData({
        isPlayingMusic: true
      })
    }
  },

  submit: function() {
    this.setData({
      showModal:true
    })
  },

  preventTouchMove: function() {

  },

  go: function() {
    this.setData({
      showModal:false
    })
  }
})
