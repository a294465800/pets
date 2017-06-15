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
    sex_radio: [{
      name: '男',
      unique: 0
    },
    {
      name: '女',
      unique: 1
    },
    {
      name: '秘密',
      unique: 2
    }],
    sexHide: true,
    telHide: true,
    today: app.globalData.today,
    birthday: '',
    telNum: '',
    telPhone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
  },

  //登录信息请求
  login() {
    const that = this
    wx.openSetting({
      success:res => {
        if (res.authSetting["scope.userInfo"] == true) {
          app.getUserInfo((userInfo) => {
            that.setData({
              userInfo: userInfo
            })
          })
        } else if (res.authSetting["scope.userInfo"] == false) {
          that.setData({
            userInfo: null
          })
          app.globalData.userInfo = null
        }
      },
      fail: res => {
      }
    })
  },

  sexHidden(e) {
    this.setData({
      sexHide: true,
    })
  },
  sexConfirm(e) {
    this.setData({
      sex: e.detail.value,
      sexHide: true
    })
  },

  //生日修改
  birthSet(e) {
    this.setData({
      birthday: e.detail.value
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
      that.setData({
        telPhone: telP,
        telHide: true
      })
    }
  }
})