// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    action: {
      method: "play"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSingUrl(options.id)
  },

  /**
   * 获取歌曲url
   */
  getSingUrl (id) {
    let _this = this
    wx.request({
      url: 'http://localhost:3000/song/url?id=' + id,
      success (res) {
        _this.setData({
          src: res.data.data[0].url
        })
      }
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

  }
})