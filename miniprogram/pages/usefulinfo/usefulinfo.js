Page({
  data: {

  },
  tap2() {
    wx.makePhoneCall({
      phoneNumber:'18268363525'
    })
  },
  tap3() {
    wx.navigateTo({
      url: '../room/room',
    })
  }
})