// mine.js
let app = getApp()

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
  onLoad(options) {
    const that = this

    that.setData({
      pets: app.globalData.pets
    })
  },
  onShow(e) {
    const that = this

    //调用宠物年龄计算
    app.calPetsAge(app.globalData.pets)

    that.setData({
      pets: app.globalData.pets,
      //获取用户信息
      userInfo: app.globalData.userInfo
    })
  },

  //个人中心修改跳转
  goToMine_edit(e) {
    wx.navigateTo({
      url: '/pages/mine_edit/mine_edit',
    })
  },

  //添加宠物跳转
  goTONew_pet(e) {
    wx.navigateTo({
      url: '/pages/first_step/first_step',
    })
  },

  //宠物修改跳转
  goToAdd_pets(e) {
    wx.navigateTo({
      url: '/pages/add_pets/add_pets',
    })
  },

  //管家小铺跳转
  goToShop(e) {
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },

  //收藏页面跳转
  goToCollect(e) {
    wx.navigateTo({
      url: '/pages/collect/collect',
    })
  }
})