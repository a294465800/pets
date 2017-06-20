// remain_index.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  
  },
  goToAddRemain(){
    wx.navigateTo({
      url: '/pages/add_remain/add_remain',
    })
  }
})