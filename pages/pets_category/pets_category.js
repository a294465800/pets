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
        src: '/images/dogs.png'
      },
      {
        category: "喵咪",
        src: '/images/cats.png'
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