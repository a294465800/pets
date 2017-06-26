// add_remain.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rid: 0,
    pid: 0,
    type: 0,
    title: '',
    help: '',

    today: app.globalData.today,
    nextTime: '',
    periodTime: '请选择上次时间',
    index: 0,
    remain_plan: [
      {
        id: 0,
        name: '当天提醒'
      },
      {
        id: 1,
        name: '前一天提醒'
      },
      {
        id: 2,
        name: '前两天提醒'
      },
      {
        id: 3,
        name: '前三天提醒'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      rid: options.rid,
      pid: options.pid,
      type: options.type,
      help: options.help,
      title: options.title
    })
  },

  //设置日期函数
  setDate(before) {
    let date = new Date
    date.setDate(date.getDate() - before)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    return (y + '-' + m + '-' + d)
  },

  //选择上次时间
  periodTime(e) {
    const that = this
    wx.request({
      url: app.globalData.host + 'compute/remind',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: {
        rid: that.data.rid,
        pid: that.data.pid,
        stage: 0,
        type: that.data.type,
        time: e.detail.value
      },
      success: res => {
        if (200 == res.data.code) {
          that.setData({
            periodTime: e.detail.value,
            nextTime: res.data.data.time
          })
        }
      }
    })
  },
  nextTIme(e) {
    this.setData({
      nextTime: e.detail.value
    })
  },
  //选择提醒时间
  remainTime(e) {
    const that = this
    if (isNaN(parseInt(that.data.periodTime))) {
      wx.showModal({
        title: '提示',
        content: '请先选择上次时间',
        showCancel: false,
        success: res => {
          if (res.confirm) { return }
        }
      })
      return
    }
    let index = e.detail.value
    that.setData({
      index: index
    })
    let time = that.setDate(index)
    wx.request({
      url: app.globalData.host + 'compute/remind',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: {
        rid: that.data.rid,
        pid: that.data.pid,
        stage: 0,
        type: that.data.type,
        time: time
      },
      success: res => {
        if (200 == res.data.code) {
          that.setData({
            nextTime: res.data.data.time
          })
        }
      }
    })
  },

  //保存
  addRemind() {
    const that = this
    wx.request({
      url: app.globalData.host + 'remind/schedule/add',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: {
        rid: that.data.rid,
        pid: that.data.pid,
        stage: 0,
        start: that.data.periodTime,
        remindTime: that.data.nextTime
      },
      success: res => {
        if (200 == res.data.code) {
          wx.showToast({
            title: '保存成功',
          })
          wx.navigateTo({
            url: '/pages/index/index',
          })
        } else {
          wx.showToast({
            title: '保存失败',
          })
        }
      }
    })
  }
})