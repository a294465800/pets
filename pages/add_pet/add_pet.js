// add_pet.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    img: '',
    input: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //预览、上传图片
  chooseImg: function (e) {
    let that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        app.globalData.first_pet.filePath = res.tempFilePaths
        that.setData({
          img: res.tempFilePaths,
          flag: false
        })
      },
    })
  },
  getInput: function (e) {
    this.setData({
      input: e.detail.value
    })
  },

  //检查名称，跳转下个页面
  goToSpecies: function (e) {
    let that = this
    if (!that.data.input) {
      wx.showModal({
        title: '提示',
        content: '亲，请输入爱宠昵称先哦~',
        showCancel: false
      })
    } else {
      app.globalData.first_pet.name = that.data.input
      wx.navigateTo({
        url: '/pages/species/species',
      })
    }
  }
})