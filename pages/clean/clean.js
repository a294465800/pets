// clean.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: app.globalData.time,
    date: '今天',
    images: [],

    //需要提交的信息
    clean: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  //时间日期监听函数
  timeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  dateChange(e) {
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

  //选择图片函数
  imageChoose(e) {
    const that = this
    wx.chooseImage({
      count: 4,
      success: res => {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          images: tempFilePaths
        })
      },
    })
  },

  //图片预览
  preImage(e) {
    const that = this
    wx.previewImage({
      urls: [e.currentTarget.dataset.src],
    })
  },

  //提交信息
  formSubmit: function (e) {
    const that = this
    that.setData({
      clean: e.detail.value,
      'clean.images': that.data.images
    })
  }
})