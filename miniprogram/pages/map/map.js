// miniprogram/pages/map/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    he_tel: '18758266300',
    she_tel: '15201826331',
    latitude: 30.6206900000,
    longitude: 120.5510600000,
    hotelname: '桐乡新世纪大酒店凤栖宫',
    hoteladdress: '中国浙江省嘉兴市桐乡市庆丰南路6号',
    markers: [{
      id: 0, //must have or can't triggle event
      latitude: 30.6206900000,
      longitude: 120.5510600000,
      name: '桐乡新世纪大酒店凤栖宫'
    }],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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

  callhe: function (event) {
    wx.makePhoneCall({
      phoneNumber: this.data.he_tel
    })
  },
  callshe: function (event) {
    wx.makePhoneCall({
      phoneNumber: this.data.she_tel
    })
  },
  markertap: function (event) {
    wx.openLocation(
      {
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        scale: 18,
        name: this.data.hotelname,
        address: this.data.hoteladdress
      }
    )
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