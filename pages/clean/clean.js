// clean.js
var app = getApp()
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
  onLoad: function (options) {

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

  //选择图片函数
  imageChoose: function (e) {
    let that = this
    wx.chooseImage({
      count: 4,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          images: tempFilePaths
        })
      },
    })
  },

  //图片预览
  preImage: function (e) {
    let that = this
    let src = e.currentTarget.dataset.src
    wx.previewImage({
      urls: [src],
    })
  },

  //提交信息
  formSubmit: function(e){
    let that = this
    that.setData({
      clean: e.detail.value,
      'clean.images': that.data.images
    })
    console.log(that.data.clean)
  }
})