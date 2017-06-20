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
      success: res => {
        let system = res.system.toLowerCase()
        let temp_system = ''
        system.indexOf('ios') == -1 ? temp_system = 'others' : temp_system = 'ios'
        that.globalData.system = temp_system
      }
    })
  },
  onShow() {
    const that = this
    that.getSetting()
  },
  onHide() {
    const that = this
    wx.request({
      url: that.globalData.host + 'logout',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': that.globalData.LaravelID
      }
    })
    wx.removeStorage({
      key: 'LaravelID'
    })
  },

  //获取用户设置
  getSetting(cb) {
    let that = this
    wx.getSetting({
      success: setting => {
        if (setting.authSetting["scope.userInfo"] == true) {
          //调用登录接口
          wx.login({
            withCredentials: true,
            success: rs => {
              wx.getUserInfo({
                success: res => {
                  wx.request({
                    url: that.globalData.host + 'login',
                    method: 'post',
                    data: {
                      code: rs.code,
                      encryptedData: res.encryptedData,
                      iv: res.iv
                    },
                    success: e => {
                      wx.request({
                        url: that.globalData.host + 'checkLogin',
                        method: 'post',
                        header: {
                          'content-type': 'application/x-www-form-urlencoded',
                          'Cookie': e.header['Set-Cookie'].split(";")[0]
                        },
                        success: res => {
                          if (200 == res.data.code) {
                            wx.setStorage({
                              key: 'LaravelID',
                              data: e.header['Set-Cookie'].split(";")[0],
                            })
                            if (that.globalData.userInfo) {
                              typeof cb == "function" && cb(that.globalData.userInfo)
                            }
                            else {
                              that.globalData.userInfo = res.data.data
                              that.globalData.LaravelID = e.header['Set-Cookie'].split(";")[0]
                              wx.showToast({
                                title: '登录成功',
                              })
                              typeof cb == "function" && cb(that.globalData.userInfo)
                            }
                          } else {
                            wx.showToast({
                              title: '登录失败',
                            })
                          }
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  },

  //直接登录
  Login() {
    const that = this
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"] == true) {
          wx.request({
            url: that.globalData.host + 'checkLogin',
            method: 'post',
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'Cookie': that.globalData.LaravelID
            },
            success: rs => {
              if (200 == rs.data.code) {
                that.globalData.userInfo = rs.data.data
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            }
          })
        }
      }
    })
  },

  getUserInfo(cb) {
    let that = this
    //调用登录接口
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"] == true) {
          wx.login({
            withCredentials: true,
            success: rs => {
              wx.getUserInfo({
                success: res => {
                  wx.request({
                    url: that.globalData.host + 'login',
                    method: 'post',
                    data: {
                      code: rs.code,
                      encryptedData: res.encryptedData,
                      iv: res.iv
                    },
                    success: e => {
                      wx.request({
                        url: that.globalData.host + 'checkLogin',
                        method: 'post',
                        header: {
                          'content-type': 'application/x-www-form-urlencoded',
                          'Cookie': e.header['Set-Cookie'].split(";")[0]
                        },
                        success: res => {
                          if (200 == res.data.code) {
                            wx.setStorage({
                              key: 'LaravelID',
                              data: e.header['Set-Cookie'].split(";")[0],
                            })
                            wx.showToast({
                              title: '登录成功',
                            })
                            that.globalData.LaravelID = e.header['Set-Cookie'].split(";")[0]
                            that.globalData.userInfo = res.data.data
                            typeof cb == "function" && cb(that.globalData.userInfo)
                          } else {
                            wx.showToast({
                              title: '登录失败',
                            })
                          }
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  },

  //计算宠物年龄
  // calPetsAge(pets) {
  //   let that = this
  //   let today = that.globalData.today.replace(/-/g, '/')
  //   today = new Date(today)
  //   for (let i in pets) {
  //     if (!pets[i].birthday) {
  //       pets[i].age = ''
  //     } else {
  //       let birthday = pets[i].birthday.replace(/-/g, '/')
  //       birthday = new Date(birthday)
  //       let days = today.getTime() - birthday.getTime()
  //       let time = parseInt(days / (1000 * 60 * 60 * 24))

  //       //小于1个月
  //       if (time <= 30) {
  //         pets[i].age = (time == 0 ? 1 : time) + '天'
  //       }
  //       //小于3个月
  //       else if (time <= 90) {
  //         pets[i].age = parseInt(time / 30) + '个月' + (time % 30) + '天'
  //       }
  //       //小于一年 
  //       else if (time <= 365) {
  //         pets[i].age = parseInt(time / 30) + '个月'
  //       }
  //       //大于一年
  //       else {
  //         pets[i].age = parseInt(time / 365) + '岁' + (parseInt((time % 365) / 30) == 0 ? 1 : parseInt((time % 365) / 30)) + '个月'
  //       }
  //     }
  //   }
  // },

  //全局数据
  globalData: {
    //全局服务器
    host: 'http://119.23.202.220/api/',

    //key
    LaravelID: null,

    userInfo: null,
    time: (10 - time.getHours() <= 0 ? time.getHours() : '0' + time.getHours()) + ':' + ((10 - time.getMinutes()) <= 0 ? time.getMinutes() : '0' + time.getMinutes()),
    today: time.getFullYear() + '-' + (9 - time.getMonth() <= 0 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + '-' + ((10 - time.getDate()) <= 0 ? time.getDate() : '0' + time.getDate()),
    pets: null,
    system: ''
  }
})