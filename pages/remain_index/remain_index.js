// remain_index.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid: 0,
    rid: 0,
    remind: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    let rid = options.rid
    let pid = options.pid

    wx.request({
      url: app.globalData.host + 'remind/' + rid,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        if(200 == res.data.code){
          that.setData({
            remind: res.data.data,
            pid: pid,
            rid: rid,
          })
        }
      }
    })
  },
  goToAddRemain(){
    const that = this
    wx.navigateTo({
      url: '/pages/add_remain/add_remain?rid=' + that.data.rid + '&&pid=' + that.data.pid + '&&type=' + that.data.remind.type + '&&help=' + that.data.remind.help + '&&title=' + that.data.remind.title,
    })
  }
})