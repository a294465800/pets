// mine.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    pets: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
  },
  onShow(e) {
    const that = this

    wx.request({
      url: app.globalData.host + 'pets',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        if (200 == res.data.code) {
          app.globalData.pets = res.data.data
          //调用宠物年龄计算
          app.calPetsAge(app.globalData.pets)

          that.setData({
            pets: app.globalData.pets,
            //获取用户信息
            userInfo: app.globalData.userInfo
          })
        } else {
          that.data.pets = null
          app.globalData.pets = null
        }
      }
    })
  },

  //个人中心修改跳转
  goToMine_edit(e) {
    wx.navigateTo({
      url: '/pages/mine_edit/mine_edit',
    })
  },

  //添加宠物跳转
  goTONew_pet(e) {
    if (!app.globalData.userInfo) {
      wx.showModal({
        title: '提示',
        content: '请先登录~',
        success: res => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/mine_edit/mine_edit',
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '/pages/first_step/first_step',
      })
    }
  },

  //宠物修改跳转
  goToAdd_pets(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/add_pets/add_pets?id=' + e.currentTarget.id,
    })
  },

  //管家小铺跳转
  goToShop(e) {
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },

  //收藏页面跳转
  goToCollect(e) {
    if (!app.globalData.userInfo) {
      wx.showModal({
        title: '提示',
        content: '请先登录~',
        success: res => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/mine_edit/mine_edit',
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '/pages/collect/collect',
      })
    }
  }
})