// mine.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    pets: []
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
    that.setData({
      pets: app.globalData.pets
    })
  },
  onShow: function (e) {
    var that = this

    //调用宠物年龄计算
    app.calPetsAge(app.globalData.pets)

    that.setData({
      pets: app.globalData.pets
    })
  },

  //个人中心修改跳转
  goToMine_edit: function (e) {
    wx.navigateTo({
      url: '/pages/mine_edit/mine_edit',
    })
  },

  //添加宠物跳转
  goTONew_pet: function (e) {
    wx.navigateTo({
      url: '/pages/first_step/first_step',
    })
  },

  //宠物修改跳转
  goToAdd_pets: function (e) {
    wx.navigateTo({
      url: '/pages/add_pets/add_pets',
    })
  },

  //管家小铺跳转
  goToShop: function (e) {
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },

  //收藏页面跳转
  goToCollect: function (e) {
    wx.navigateTo({
      url: '/pages/collect/collect',
    })
  }
})