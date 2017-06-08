// mine_edit.js
var app = getApp()

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
  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },

  //登录信息请求
  login: function(){
    let that = this
    wx.openSetting({
      success: function(res){
        if (res.authSetting["scope.userInfo"] == true) {
          app.getUserInfo(function (userInfo) {
            that.setData({
              userInfo: userInfo
            })
          })
        } else if (res.authSetting["scope.userInfo"] == false){
          that.setData({
            userInfo: null
          })
          app.globalData.userInfo = null
        }
      },
      fail: function(res){
        console.log(res)
      }
    })
  },

  //性别选择
  sexChoose: function (e) {
    this.setData({
      sexHide: false
    })
  },
  sexHidden: function (e) {
    this.setData({
      sexHide: true,
    })
  },
  sexConfirm: function (e) {
    this.setData({
      sex: e.detail.value,
      sexHide: true
    })
  },

  //生日修改
  birthSet: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },

  //手机号码
  telChange: function (e) {
    this.setData({
      telHide: false
    })
  },
  telInput: function (e) {
    console.log(e.detail.value)
    this.setData({
      telNum: e.detail.value
    })
  },
  telHidden: function (e) {
    this.setData({
      telHide: true
    })
  },
  telSave: function (e) {
    let telP = e.currentTarget.dataset.tel
    let that = this
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