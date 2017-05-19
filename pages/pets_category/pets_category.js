// pets_category.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pets: [
      {
        category: "狗狗",
        src: '/images/head_img.jpg'
      },
      {
        category: "喵咪",
        src: '/images/head_img.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  goToPetImg: function(e){
    app.globalData.first_pet.category = e.currentTarget.dataset.pet
    wx.navigateTo({
      url: '/pages/add_pet/add_pet',
    })
  }
})