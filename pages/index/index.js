// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    bannerData: [],
    // 歌曲列表
    songList: []
  },
  onLoad() {
    this.getBannerData()
    this.getSongList()
  },
  // 获取banner数据
  getBannerData () {
    let _this = this
    wx.request({
      url: 'http://localhost:3000/banner',
      success (res) {
        _this.setData({
          bannerData: res.data.banners
        })
      }
    })
  },
  // 获取歌曲列表
  getSongList () {
    let _this = this
    wx.request({
      url: 'http://localhost:3000/search?keywords=尧顺宇&limit=10',
      success (res) {
        _this.setData({
          songList: res.data.result.songs
        })
      }
    })
  },
  // 跳转播放页面
  goToPlay () {
    wx.navigateTo({
      url: '/pages/play/play'
    })
  }
})
