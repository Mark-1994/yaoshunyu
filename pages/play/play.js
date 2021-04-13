// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    action: {
      method: "play"
    },
    songName: '',
    songWord: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSingUrl(options.id)
    this.getSingLyrics(options.id)
    this.getSongInfo(options.id)
  },

  /**
   * 获取歌曲url
   */
  getSingUrl (id) {
    let _this = this
    wx.request({
      url: 'http://www.hjmin.com/song/url?id=' + id,
      success (res) {
        _this.setData({
          src: res.data.data[0].url
        })
      }
    })
  },

  /**
   * 获取歌词
   */
  getSingLyrics (id) {
    let _this = this
    wx.request({
      url: 'http://www.hjmin.com/lyric?id=' + id,
      success (res) {
        _this.setData({
          songWord: res.data.lrc.lyric
        })
      }
    })
  },

  /**
   * 获取歌曲详情
   */
  getSongInfo (id) {
    let _this = this
    wx.request({
      url: 'http://www.hjmin.com/song/detail?ids=' + id,
      success (res) {
        _this.setData({
          songName: res.data.songs[0].name
        })
      }
    })
  },

  /**
   * 歌曲控制器
   */
  controlItem () {
    this.setData({
      action: {
        method: this.data.action.method == "play" ? "pause" : "play"
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