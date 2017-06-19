// mine_edit.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    sex: '',
    telnum: '',
    people_name: '',
    sex: {
      0: "保密",
      1: "男",
      2: "女"
    },
    telHide: true,
    today: app.globalData.today,
    telNum: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    app.Login((userInfo) => {
      that.setData({
        userInfo: userInfo,
      })
    })
  },
  onShow() {
    this.setData({
      userInfo: app.globalData.userInfo,
    })
  },

  //登录信息请求
  login() {
    const that = this
    wx.openSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"] == true) {
          app.getUserInfo((userInfo) => {
            that.setData({
              userInfo: userInfo
            })
          })
        } else if (res.authSetting["scope.userInfo"] == false) {
          wx.request({
            url: app.globalData.host + 'logout',
            success: res => {
              that.setData({
                userInfo: null,
                pet: null,
                pets: null
              })
              app.globalData.userInfo = null
              app.globalData.pet = null
              app.globalData.pets = null
            }
          })
        } else if (!res.authSetting["scope.userInfo"]) {
          app.getUserInfo((userInfo) => {
            that.setData({
              userInfo: userInfo
            })
          })
        }
      },
      fail: res => {
      }
    })
  },

  //生日修改
  birthSet(e) {
    let that = this
    wx.request({
      url: app.globalData.host + 'setUser',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: {
        birthday: e.detail.value
      },
      success: res => {
        that.setData({
          'userInfo.birthday': e.detail.value
        })
      }
    })
  },

  //手机号码
  telChange(e) {
    this.setData({
      telHide: false
    })
  },
  telInput(e) {
    this.setData({
      telNum: e.detail.value
    })
  },
  telHidden(e) {
    this.setData({
      telHide: true
    })
  },
  telSave(e) {
    let telP = e.currentTarget.dataset.tel
    const that = this
    //正则判断手机号码
    if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(telP))) {
      wx.showModal({
        title: '提示',
        content: '亲，请输入正确的手机号码',
        showCancel: false
      })
    } else {
      wx.request({
        url: app.globalData.host + 'setUser',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': app.globalData.LaravelID
        },
        data: {
          number: telP
        },
        success: res => {
          that.setData({
            'userInfo.number': telP,
            telHide: true
          })
        }
      })
    }
  }
})