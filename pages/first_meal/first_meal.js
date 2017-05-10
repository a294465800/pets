// first_meal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  goToHome: function(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  }
})