// add_remain.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: app.globalData.today,
    nextTime: app.globalData.today + '（推荐）'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  nextTIme(e) {
    this.setData({
      nextTime: e.detail.value
    })
  }
})