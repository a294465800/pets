// paybook.js
let app = getApp()
let time_arr = app.globalData.today.split('-')
var startY = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    pet_id: 0,
    today: app.globalData.today,
    year: time_arr[0],
    month: Number(time_arr[1]),
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
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      pet_id: options.id
    })
  },
  paybookChoose(e) {
    let arr = e.detail.value.split('-')
    this.setData({
      year: arr[0],
      month: Number(arr[1])
    })
  },

  //图片预览
  preImage(e) {
    const that = this
    wx.previewImage({
      urls: [e.currentTarget.dataset.src],
    })
  },

  //选择上个月
  lastMonth(e) {
    let last_month = Number(e.currentTarget.dataset.month) - 1
    if (last_month < 1) {
      last_month = 1
    }
    this.setData({
      month: last_month
    })
  },

  //选择下个月
  nextMonth(e) {
    let next_month = Number(e.currentTarget.dataset.month) + 1
    if (next_month > 12) {
      next_month = 12
    }
    this.setData({
      month: next_month
    })
  },

  //触摸开始,记录开始坐标
  touchStart(e) {
    startY = e.touches[0].clientY
  },

  //触摸过程，滑动效果
  touchMove(e) {
    const that = this
    let moveY = e.touches[0].clientY
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    that.animation = animation
    if (startY > moveY) {
      animation.bottom(-80, 'rpx').step()
      that.setData({
        animationData: animation.export()
      })
    } else {
      animation.bottom(30, 'rpx').step()
      that.setData({
        animationData: animation.export()
      })
    }
  },

  //跳转添加账单
  addPaybook(e) {
    const that = this
    wx.navigateTo({
      url: '/pages/add_paybook/add_paybook?id=' + that.data.pet_id,
    })
  }
})