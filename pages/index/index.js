// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    bannerData: [],
    // 歌曲列表
    songList: [],
    limitDefault: 10
  },
  onLoad() {
    this.getBannerData()
    this.getSongList()
  },
  // 获取banner数据
  getBannerData () {
    let _this = this
    wx.request({
      url: 'https://www.autumnfish.cn/banner',
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
      url: 'https://www.autumnfish.cn/search?keywords=尧顺宇&limit=10',
      success (res) {
        _this.setData({
          songList: res.data.result.songs
        })
      }
    })
  },
  // 跳转播放页面
  goToPlay (e) {
    wx.navigateTo({
      url: '/pages/play/play?id=' + e.currentTarget.dataset.id
    })
  },
  onReachBottom () {
    let _this = this
    this.data.limitDefault += 10
    wx.request({
      url: 'https://www.autumnfish.cn/search?keywords=尧顺宇&limit=' + this.data.limitDefault,
      success (res) {
        if (res.data.code !== 200) return
        _this.setData({
          songList: res.data.result.songs
        })
      }
    })
  }
})
