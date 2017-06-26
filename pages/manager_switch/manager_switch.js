// manager_switch.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pet_id: 0,
    remain: [{
      zn: '疫苗',
      unique: 0,
      img: '/images/remain/vaccine.png'
    },
    {
      zn: '体内驱虫',
      unique: 1,
      img: '/images/remain/insect.png'
    },
    {
      zn: '体外驱虫',
      unique: 2,
      img: '/images/remain/insect.png'
    },
    {
      zn: '洗澡',
      unique: 3,
      img: '/images/remain/bath.png'
    },
    {
      zn: '刷牙',
      unique: 4,
      img: '/images/remain/teeth.png'
    },
    {
      zn: '剪指甲',
      unique: 5,
      img: '/images/remain/nails.png'
    },
    {
      zn: '清洁眼睛',
      unique: 6,
      img: '/images/remain/eye.png'
    },
    {
      zn: '清洁耳朵',
      unique: 7,
      img: '/images/remain/ear.png'
    },
    {
      zn: '体检',
      unique: 8,
      img: '/images/remain/physical.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    let id = options.id
    wx.request({
      url: app.globalData.host + 'reminds/' + id,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        if (200 == res.data.code) {
          that.setData({
            reminds: res.data.data,
            pet_id: id
          })
        } else { return }
      }
    })
  },
  goToRemainIndex(e) {
    const that = this
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/remain_index/remain_index?pid=' + that.data.pet_id + '&&rid=' + id,
    })
  }

})