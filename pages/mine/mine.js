// mine.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },

  //个人中心修改跳转
  goToMine_edit: function (e) {
    wx.navigateTo({
      url: '/pages/mine_edit/mine_edit',
    })
  },

  //宠物添加跳转
  goToAdd_pets: function (e) {
    wx.navigateTo({
      url: '/pages/add_pets/add_pets',
    })
  },

  //管家小铺跳转
  goToShop: function(e){
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  }
})