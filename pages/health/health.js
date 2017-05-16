// health.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: app.globalData.time,
    date: '今天',
    images: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //时间日期监听函数
  timeChange: function (e) {
    this.setData({
      time: app.timeChange(e)
    })
  },
  dateChange: function (e) {
    if (e.detail.value == app.globalData.today) {
      this.setData({
        date: '今天'
      })
    } else {
      this.setData({
        date: app.dateChange(e)
      })
    }
  }
})