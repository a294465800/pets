// health.js
var app = getApp()
let page = 2
let close = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pet_id: 0,
    time: app.globalData.time,
    date: '今天',
    images: [],
    grow_records: null,
    index: 0,
    health: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    that.setData({
      time: app.globalData.time,
      pet_id: options.id
    })

    wx.request({
      url: app.globalData.host + 'record/lists/health/' + options.id + '/1',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        let arr = []
        for (let i in res.data.data) {
          arr.push(res.data.data[i])
        }

        if (!res.data.data) { return }
        that.setData({
          grow_records: arr
        })
      }
    })
  },

  onShow() {
    page = 2
    close = false
  },

  //触底刷新
  onReachBottom() {
    const that = this
    if (close) { return }

    wx.request({
      url: app.globalData.host + 'record/lists/health/' + that.data.pet_id + '/' + page,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        let records = app.getRecords(that.data.grow_records.length, that.data.grow_records, res.data.data)
        if (records) {
          that.setData({
            grow_records: records
          })
          page++
        } else {
          close = true
        }
      }
    })
  },
  //时间日期监听函数
  timeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  dateChange(e) {
    if (e.detail.value == app.globalData.today) {
      this.setData({
        date: '今天'
      })
    } else {
      this.setData({
        date: e.detail.value
      })
    }
  },

  //目录选择函数
  // categoryChange(e) {
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },

  //选择图片函数
  imageChoose(e) {
    const that = this
    wx.chooseImage({
      count: 4,
      success: res => {
        that.setData({
          images: [...that.data.images, ...res.tempFilePaths]
        })
        if (that.data.images.length > 3) {
          let images = that.data.images
          images.length = 4
          that.setData({
            images: images
          })
        }
      }
    })
  },

  //图片预览
  preImage(e) {
    const that = this
    wx.previewImage({
      urls: [e.currentTarget.dataset.src],
    })
  },

  //图片删除
  delImg(e) {
    const that = this
    let id = e.currentTarget.id
    let index = that.data.images.indexOf(id)
    let images = that.data.images
    images.splice(index, 1)
    if (index != -1) {
      that.setData({
        images: images
      })
    }
  },

  //图片上传递归
  uploadImage(i) {
    const that = this
    wx.uploadFile({
      url: app.globalData.host + 'test',
      filePath: that.data.images[i],
      name: 'image',
      success: res => {
        if (that.data.images[i + 1]) {
          that.uploadImage(i + 1)
        }
      }
    })
  },

  //提交信息——生病
  formSubmit(e) {
    const that = this
    if (e.detail.value.illness && e.detail.value.symptom) {
      that.setData({
        health: e.detail.value,
        'health.time': (that.data.date == '今天' ? app.globalData.today : that.data.date) + ' ' + that.data.time
      })

      //图片上传
      that.uploadImage(0)

      wx.request({
        url: app.globalData.host + 'record/health/' + that.data.pet_id,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': app.globalData.LaravelID
        },
        data: that.data.health,
        success: res => {
          wx.showToast({
            title: '保存成功！',
            success: rs => {
              wx.navigateBack({})
            }
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '亲，还有信息没有填写哦~',
        showCancel: false
      })
    }
  }
})