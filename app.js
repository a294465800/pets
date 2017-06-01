//app.js

//获取时间
let time = new Date()

App({
  onLaunch: function () {
    let that = this
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //获取系统版本
    wx.getSystemInfo({
      success: function (res) {
        let system = res.system.toLowerCase()
        let temp_system = ''
        system.indexOf('ios') == -1 ? temp_system = 'others' : temp_system = 'ios'
        that.globalData.system = temp_system
      },
    })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  //全局数据
  globalData: {
    userInfo: null,
    time: (10 - time.getHours() <= 0 ? time.getHours() : '0' + time.getHours()) + ':' + ((10 - time.getMinutes()) <= 0 ? time.getMinutes() : '0' + time.getMinutes()),
    today: time.getFullYear() + '-' + (9 - time.getMonth() <= 0 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + '-' + ((10 - time.getDate()) <= 0 ? time.getDate() : '0' + time.getDate()),
    pets: [],
    pet: [{
      unique: 0,
      name: '狗蛋',
      age: '1岁半',
      img: '/images/head_img.jpg'
    }, {
      unique: 1,
      name: '狗蛋蛋蛋蛋蛋蛋蛋蛋',
      age: '2岁半',
      img: '/images/head_img.jpg'
    }],
    system: '',
  }
})