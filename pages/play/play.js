// play.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pet_id: 0,
    time: app.globalData.time,
    timeEnd: app.globalData.time,
    calTime: '',
    date: '今天',
    images: [],
    grow_records: [
      {
        date: '2017-03-20',
        category: {
          name: '',
          age: '',
          records: [
            {
              items: ['11粮：600g', '22食：100g'],
              remark: '',
              src: []
            },
            {
              time: '22:30',
              items: ['干粮：400g'],
            },
            {
              time: '15:00',
              items: ['零食：50g'],
            },
            {
              time: '09:30',
              items: ['干粮：200g'],
            }
          ]
        }
      },
      {
        date: '2017-03-18',
        category: {
          name: '体重记录',
          age: '6个月',
          records: [
            {
              items: ['身高：60.0cm', '体重：37.0kg'],
              remark: '',
              src: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494579745940&di=3bb1663d4f94d5898651dab6aa6c46a6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120727%2F668573_151035361165_2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494579745940&di=3bb1663d4f94d5898651dab6aa6c46a6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120727%2F668573_151035361165_2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494579745940&di=3bb1663d4f94d5898651dab6aa6c46a6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120727%2F668573_151035361165_2.jpg'
              ]
            }
          ]
        }
      },
      {
        date: '2017-03-20',
        category: {
          name: '防疫记录',
          records: [
            {
              items: ['第二针：美国妙三多'],
              remark: '好兴奋啊，以后只要一年一次',
              src: []
            }
          ]
        }
      },
      {
        date: '2017-03-20',
        category: {
          name: '玩耍记录',
          records: [
            {
              items: ['散步、游泳'],
              remark: '逛了中山园，狗蛋很开心呢'
            },
            {
              time: '09:30',
              items: ['游泳'],
              remark: '碉堡了！！',
              src: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494579745940&di=3bb1663d4f94d5898651dab6aa6c46a6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120727%2F668573_151035361165_2.jpg'
              ]
            },
            {
              time: '11:30',
              items: ['散步']
            }
          ]
        }
      },
      {
        date: '2017-03-20',
        category: {
          name: '玩耍记录',
          records: [
            {
              items: ['游泳'],
              remark: '逛了中山园，狗蛋很开心呢,很开心呢很开心呢',
              src: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494579745940&di=3bb1663d4f94d5898651dab6aa6c46a6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120727%2F668573_151035361165_2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494579745940&di=3bb1663d4f94d5898651dab6aa6c46a6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120727%2F668573_151035361165_2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494579745940&di=3bb1663d4f94d5898651dab6aa6c46a6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120727%2F668573_151035361165_2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494579745940&di=3bb1663d4f94d5898651dab6aa6c46a6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120727%2F668573_151035361165_2.jpg'
              ]
            }
          ]
        }
      },
      {
        date: '2017-03-20',
        category: {
          name: '防疫记录',
          records: [{
            items: ['第二针：美国妙三多'],
            remark: '好兴奋啊，以后只要一年一次'
          }
          ]
        }
      }
    ],

    //提交信息
    play: {}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    //记录最新时间
    that.setData({
      time: app.globalData.time,
      timeEnd: app.globalData.time,
      pet_id: options.id
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

  //选择图片函数
  imageChoose(e) {
    const that = this
    wx.chooseImage({
      count: 4,
      success: res => {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          images: tempFilePaths
        })
      },
    })
  },

  //图片预览
  preImage(e) {
    const that = this
    wx.previewImage({
      urls: [e.currentTarget.dataset.src],
    })
  },

  //娱乐时间函数
  timeStart(e) {
    this.setData({
      time: e.detail.value,
      timeEnd: e.detail.value
    })
  },
  timeEnd(e) {
    this.setData({
      timeEnd: e.detail.value,
    })
  },

  //提交信息
  formSubmit(e) {
    const that = this
    that.setData({
      play: e.detail.value,
      'play.start': (that.data.date == '今天' ? app.globalData.today : that.data.date) + ' ' + that.data.time,
      'play.end': (that.data.date == '今天' ? app.globalData.today : that.data.date) + ' ' + that.data.timeEnd,
      // 'play.images': that.data.images
    })
    wx.request({
      url: app.globalData.host + 'record/play/' + that.data.pet_id,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: that.data.play,
      success: res => {
        console.log(res)
        wx.showToast({
          title: '保存成功！',
          success: rs => {
            wx.navigateBack({})
          }
        })
      }
    })
  }
})