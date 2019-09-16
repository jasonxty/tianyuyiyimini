//app.js
App({
  globalData: {
    userInfo: null,
    openid: '',
    isLogin: false,
    hasUserInfo: false,
    backIndex: false
  },
  onLaunch: function () {
    // cloud init
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'xtydtc01',
        traceUser: true,
      })
    }
    // 获取用户信息
    this.login();
    this.getUserInfo();
  },
  login:function() {
    if(!this.globalData.openid) {
      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res=> {
          this.globalData.openid = res.result.openid;
          this.globalData.isLogin = true;
          console.log('login successful!')
        },
        fail: res=> {
          ws.showToast({
            icon: 'none',
            title: 'get the openid file',
          })
          console.log('login fail, err info:', err)
        }
      })
    }
  },
  getUserInfo:function() {
    var that = this;
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;
              this.globalData.hasUserInfo = true;
              console.log(res.userInfo);
            }
          })
        }
      }
    })
  }
})

