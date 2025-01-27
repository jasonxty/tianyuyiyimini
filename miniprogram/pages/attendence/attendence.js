// miniprogram/pages/attendence/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    signSta: false,
    nickname: '',
    face: '',
    city: '',
    gender: 0,
    language: '',
    login: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  signIn: function () {
    this.setData({
      signSta: true
    })
  },
  cancelMsg: function () {
    this.setData({
      signSta: false
    })
  },

  formSubmit(event) {
    var name = event.detail.value.name;
    if (name == '') {
      wx.showToast({
        title: '请填写您的姓名',
        icon: 'none'
      })
      return;
    }
    var tel = event.detail.value.tel;
    if (tel == '') {
      wx.showToast({
        title: '请填写您的电话',
        icon: 'none'
      })
      return;
    }
    var reg_tel = new RegExp('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$');
    if (!reg_tel.test(tel)) {
      wx.showToast({
        title: '请填写正确的手机号码',
        icon: 'none'
      })
      return;
    }
    var plan = event.detail.value.plan;
    var extra = event.detail.value.extra;
    const db = wx.cloud.database();
    db.collection('attendencelist').add({
      data: {
        'nickname': this.data.nickname,
        'face': this.data.face,
        'gender': this.data.gender,
        'language': this.data.language,
        'city': this.data.city,
        'login': this.data.login,
        'tel': tel,
        'name': name,
        'plan': plan,
        'extra': extra
      },
      success: res => {
        wx.showModal({
          title: '提示',
          content: '提交成功 欢迎您的到来',
          showCancel: false
        })
      },
      fail: err => {
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false
        })
      }
    })
  },
  onGetUserInfo: function (e) {
    console.log('onGetUserInfo is called!');
    if (e.detail.userInfo) {
      console.log('onGetUserInfo is called successfully!');
      var userInfo = e.detail.userInfo;
      this.data.nickname = userInfo.nickName;
      this.data.face = userInfo.avatarUrl;
      this.data.gender = userInfo.gender;
      this.data.city = userInfo.city;
      this.data.language = userInfo.language;
      this.data.login = app.globalData.isLogin;
      console.log(this.data);
    }
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
})