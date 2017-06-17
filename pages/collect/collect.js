// collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    LaravelID: null,
    collects: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onShow() {
    let that = this
    wx.getStorage({
      key: 'LaravelID',
      success: res => {
        wx.request({
          url: 'https://www.sennki.com/api/collects',
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            'Cookie': res.data
          },
          success: res => {
            that.setData({
              collects: res.data.data
            })
          }
        })
      },
    })
  },

  //文章跳转
  goToArticle(e){
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id,
    })
  }
})