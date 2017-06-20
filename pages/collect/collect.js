// collect.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collects: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onShow() {
    let that = this
    wx.request({
      url: app.globalData.host + 'collects',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        that.setData({
          collects: res.data.data
        })
      }
    })
  },

  //文章跳转
  goToArticle(e){
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id,
    })
  }
})