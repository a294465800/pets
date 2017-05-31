// add_pets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pet: {
      src:'/images/head_img.jpg',
      name: '撕家',
      species: '阿拉斯加',
      sex: '男',
      birthday: '2017-01-05'
    },
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
    nameHide: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  //昵称
  nameChange: function (e) {
    this.setData({
      nameHide: false
    })
  },
  nameInput: function (e) {
    this.setData({
      telNum: e.detail.value
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
    //正则判断手机号码
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