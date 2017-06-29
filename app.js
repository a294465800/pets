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
                      if(! e.header){
                        wx.showModal({
                          title: '提示',
                          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
                          showCancel: false
                        })
                        return
                      }
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
                      if (!e.header) {
                        wx.showModal({
                          title: '提示',
                          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
                          showCancel: false
                        })
                        return
                      }
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

  //获取成长记录函数
  getRecords(length, records, data){
    let arr = []
    for (let i in data) {
      arr.push(data[i])
    }
    if (!arr) {
      return null
    } else if (records[length - 1].date == arr[0].date) {
      let grow_record = [...records[length - 1].data, ...arr[0].data]
      records[length - 1].data = grow_record
      arr.splice(0, 1)
      return [...records, ...arr]
    } else {
      return [...records, ...arr]
    }
  },

  //全局数据
  globalData: {
    //全局服务器
    host: 'http://sennkisystem.cn/api/',

    //key
    LaravelID: null,

    userInfo: null,
    time: (10 - time.getHours() <= 0 ? time.getHours() : '0' + time.getHours()) + ':' + ((10 - time.getMinutes()) <= 0 ? time.getMinutes() : '0' + time.getMinutes()),
    today: time.getFullYear() + '-' + (9 - time.getMonth() <= 0 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + '-' + ((10 - time.getDate()) <= 0 ? time.getDate() : '0' + time.getDate()),
    pets: null
  }
})