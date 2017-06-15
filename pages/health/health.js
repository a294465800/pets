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
    category: ['体内驱虫', '体外驱虫', '疫苗', '生病', '体检'],
    index: 0,
    health: {}
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
      index: e.detail.value
    })
  },

  //提交信息——生病
  formSubmit: function(e){
    const that = this
    that.setData({
      health: e.detail.value,
      'health.category': that.data.category[that.data.index]
    })
  }
})