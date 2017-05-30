// new_pet.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: app.globalData.today,
    pet: {
      src: '',
      name: '',
      species: '',
      sex: '',
      birthday: ''
    },
    sex_radio: [{
      name: '男'
    },
    {
      name: '女'
    },
    {
      name: '秘密'
    }],
    sexHide: true,
    nameHide: true,
    nameTemp: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //宠物头像
  choosePetImg: function (e) {
    let that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.setData({
          'pet.src': res.tempFilePaths
        })
      },
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
      sexHide: true
    })
  },
  sexConfirm: function (e) {
    this.setData({
      'pet.sex': e.detail.value,
      sexHide: true
    })
  },

  //生日修改
  birthSet: function (e) {
    this.setData({
      'pet.birthday': e.detail.value
    })
  },

  //昵称
  nameChange: function (e) {
    this.setData({
      nameHide: false
    })
  },
  nameInput: function (e) {
    this.setData({
      nameTemp: e.detail.value
    })
  },
  nameHidden: function (e) {
    this.setData({
      nameHide: true
    })
  },
  nameSave: function (e) {
    let nameT = e.currentTarget.dataset.name
    let that = this
    if (!nameT) {
      wx.showModal({
        title: '提示',
        content: '亲，请输入爱宠昵称~',
        showCancel: false
      })
    } else {
      that.setData({
        'pet.name': nameT,
        nameHide: true
      })
    }
  }
})