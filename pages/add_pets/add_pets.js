// add_pets.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: app.globalData.today,
    pet_id: 0,
    pet: {},
    sex: {
      0: "汉子",
      1: "妹子"
    },
    sex_radio: [{
      name: '汉子',
      sex: 0,
      unique: 0
    },
    {
      name: '妹子',
      sex: 1,
      unique: 1
    }],
    sexHide: true,
    nameHide: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    wx.request({
      url: app.globalData.host + 'pet/' + options.id,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        that.setData({
          pet: res.data.data,
          pet_id: options.id
        })
      }
    })
  },

  //头像修改
  chooseImg(){
    const that = this
    wx.chooseImage({
      count: 1,
      success: res => {
        wx.uploadFile({
          url: app.globalData.host + 'upload',
          filePath: res.tempFilePaths[0],
          name: 'image',
          success: rs => {
            let json = JSON.parse(rs.data)
            console.log(rs)
            that.setData({
              'pet.img': res.tempFilePaths[0]
            })
          }
        })
      },
    })
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
    let that = this
    wx.request({
      url: app.globalData.host + 'pet/modify/' + that.data.pet_id,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: {
        sex: e.detail.value
      },
      success: res => {
        that.setData({
          'pet.sex': e.detail.value,
          sexHide: true
        })
      }
    })
  },

  //生日修改
  birthSet(e) {
    const that = this
    wx.request({
      url: app.globalData.host + 'pet/modify/' + that.data.pet_id,
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
          'pet.birthday': e.detail.value
        })
      }
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
      nameTemp: e.detail.value
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
    if (!nameT) {
      wx.showModal({
        title: '提示',
        content: '亲，请输入爱宠昵称~',
        showCancel: false
      })
    } else {
      wx.request({
        url: app.globalData.host + 'pet/modify/' + that.data.pet_id,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': app.globalData.LaravelID
        },
        data: {
          name: nameT
        },
        success: res => {
          that.setData({
            'pet.name': nameT,
            nameHide: true
          })
        }
      })
    }
  },

  //删除宠物
  deletePet(){
    const that = this
    wx.showModal({
      title: '提示',
      content: '是否删除该宠物信息？（删除后无法恢复！）',
      success: res => {
        if(res.confirm){
          wx.request({
            url:  app.globalData.host + 'pet/del/' + that.data.pet_id,
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'Cookie': app.globalData.LaravelID
            },
            success: res => {
              console.log(res)
              wx.showToast({
                title: '删除成功！',
              })
              wx.navigateBack({})
            }
          })
        }
      }
    })
  }
})