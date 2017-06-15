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
        console.log(res)
      }
    })
    that.getSetting()
  },

  //获取用户设置
  getSetting: function () {
    let that = this
    wx.checkSession({
      success: function () {
      },
      fail: function () {
        wx.getSetting({
          success: function (res) {
            if (res.authSetting["scope.userInfo"] == true) {
              //调用登录接口
              wx.login({
                withCredentials: true,
                success: function (rs) {
                  wx.getUserInfo({
                    success: function (res) {
                      that.globalData.userInfo = res.userInfo
                      that.globalData.encryptedData = res.encryptedData
                      wx.request({
                        url: 'https://www.sennki.com/api/login',
                        method: 'post',
                        data: {
                          code: rs.code,
                          encryptedData: res.encryptedData,
                          iv: res.iv
                        },
                        success: function (e) {
                          wx.request({
                            url: 'https://www.sennki.com/api/checkLogin',
                            method: 'post',
                            header: {
                              'content-type': 'application/x-www-form-urlencoded',
                              'Cookie': e.header['Set-Cookie'].split(";")[0]
                            },
                            success: function (res) {
                              wx.setStorage({
                                key: 'LaravelID',
                                data: e.header['Set-Cookie'].split(";")[0],
                              })
                              wx.showToast({
                                title: '登录成功',
                              })
                            },
                            fail: function () {
                              wx.showToast({
                                title: '登录失败',
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            } else if (res.authSetting["scope.userInfo"] == false) {
            }
          }
        })
      }
    })
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        withCredentials: true,
        success: function (rs) {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              wx.request({
                url: 'https://www.sennki.com/api/login',
                method: 'post',
                data: {
                  code: rs.code,
                  encryptedData: res.encryptedData,
                  iv: res.iv
                },
                success: function (e) {
                  wx.request({
                    url: 'https://www.sennki.com/api/checkLogin',
                    method: 'post',
                    header: {
                      'content-type': 'application/x-www-form-urlencoded',
                      'Cookie': e.header['Set-Cookie'].split(";")[0]
                    },
                    success: function (res) {
                      if (200 == res.data.code) {
                        wx.setStorage({
                          key: 'LaravelID',
                          data: e.header['Set-Cookie'].split(";")[0],
                        })
                        wx.showToast({
                          title: '登录成功',
                        })
                        typeof cb == "function" && cb(that.globalData.userInfo)
                      } else {
                        wx.showToast({
                          title: '登录失败',
                        })
                      }
                    },
                  })
                }
              })
            }
          })
        }
      })
    }
  },

  //计算宠物年龄
  calPetsAge: function (pets) {
    let that = this
    let today = that.globalData.today.replace(/-/g, '/')
    today = new Date(today)
    for (let i in pets) {
      if (!pets[i].birthday) {
        pets[i].age = ''
      } else {
        let birthday = pets[i].birthday.replace(/-/g, '/')
        birthday = new Date(birthday)
        let days = today.getTime() - birthday.getTime()
        let time = parseInt(days / (1000 * 60 * 60 * 24))

        //小于1个月
        if (time <= 30) {
          pets[i].age = (time == 0 ? 1 : time) + '天'
        }
        //小于3个月
        else if (time <= 90) {
          pets[i].age = parseInt(time / 30) + '个月' + (time % 30) + '天'
        }
        //小于一年 
        else if (time <= 365) {
          pets[i].age = parseInt(time / 30) + '个月'
        }
        //大于一年
        else {
          pets[i].age = parseInt(time / 365) + '岁' + (parseInt((time % 365) / 30) == 0 ? 1 : parseInt((time % 365) / 30)) + '个月'
        }
      }
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
      birthday: '2016-09-01',
      img: '/images/head_img.jpg'
    }, {
      unique: 1,
      name: '狗蛋蛋蛋蛋蛋蛋蛋蛋',
      birthday: '2017-03-05',
      img: '/images/head_img.jpg'
    }, {
      birthday: '2017-05-08'
    }, {
      birthday: '2014-05-03'
    }, {
      birthday: '2011-05-03'
    }],
    system: '',
    encryptedData: null
  }
})