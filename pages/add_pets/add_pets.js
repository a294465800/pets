// add_pets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pet: {
      src: '/images/head_img.jpg',
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
  onLoad(options) {

  },
  //性别选择
  sexChoose(e) {
    this.setData({
      sexHide: false
    })
  },
  sexHidden(e) {
    this.setData({
      sexHide: true
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

  //昵称
  nameChange(e) {
    this.setData({
      nameHide: false
    })
  },
  nameInput(e) {
    this.setData({
      telNum: e.detail.value
    })
  },
  nameHidden(e) {
    this.setData({
      nameHide: true
    })
  },
  nameSave(e) {
    let nameT = e.currentTarget.dataset.name
    const that = this
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