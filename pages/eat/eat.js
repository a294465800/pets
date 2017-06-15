// eat.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: app.globalData.time,
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
              items: ['干粮：600g', '零食：100g'],
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
    pet_eat: {}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //记录最新时间
    this.setData({
      time: app.globalData.time
    })
  },

  //时间日期监听函数
  timeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  dateChange: function (e) {
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
  imageChoose: function (e) {
    const that = this
    wx.chooseImage({
      count: 4,
      success: function (res) {
        that.setData({
          images: res.tempFilePaths
        })
      },
    })
  },

  //图片预览
  preImage: function (e) {
    const that = this
    let src = e.currentTarget.dataset.src
    wx.previewImage({
      urls: [src],
    })
  },

  //提交信息——吃
  formSubmit: function (e) {
    const that = this
    that.setData({
      pet_eat: e.detail.value,
      'pet_eat.images': that.data.images
    })
  }
})