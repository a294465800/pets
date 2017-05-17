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
    category: ['自查自救', '贴身医生'],
    rate: ['一天3次', '一天2次', '一天1次'],
    c_index: 0,
    r_index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      time: app.globalData.time
    })
  },
  //时间日期监听函数
  timeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  dateChange: function (e) {
    if (e.detail.value == app.globalData.today) {
      this.setData({
        date: '今天'
      })
    } else {
      this.setData({
        date: e.detail.value
      })
    }
  },

  //目录选择函数
  categoryChange: function (e) {
    this.setData({
      c_index: e.detail.value
    })
  },
  rateChange: function (e) {
    this.setData({
      r_index: e.detail.value
    })
  }
})