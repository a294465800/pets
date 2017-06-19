// health.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pet_id: 0,
    time: app.globalData.time,
    date: '今天',
    images: [],
    category: [],
    categorys: [],
    index: 0,
    health: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    wx.request({
      url: app.globalData.host + 'record/types/health',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        let category = []
        for (let i in res.data.data) {
          category.push(res.data.data[i].title)
        }
        that.setData({
          category: category,
          categorys: res.data.data,
          time: app.globalData.time,
          pet_id: options.id
        })
      }
    })
  },
  //时间日期监听函数
  timeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  dateChange(e) {
    if (e.detail.value == app.globalData.today) {
      this.setData({
        date: '今天'
      })
    } else {
      this.setData({
        date: e.detail.value
      })
    }
  },

  //目录选择函数
  categoryChange(e) {
    this.setData({
      index: e.detail.value
    })
  },

  //提交信息——生病
  formSubmit(e) {
    const that = this
    that.setData({
      health: e.detail.value,
      'health.type': that.data.categorys[that.data.index].id,
      'health.time': (that.data.date == '今天' ? app.globalData.today : that.data.date) + ' ' + that.data.time
    })
    wx.request({
      url: app.globalData.host + 'record/health/' + that.data.pet_id,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: that.data.health,
      success: res => {
        console.log(res)
        wx.showToast({
          title: '保存成功！',
          success: rs => {
            wx.navigateBack({})
          }
        })
      }
    })
  }
})