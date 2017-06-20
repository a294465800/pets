//index.js
//获取应用实例
let app = getApp()

Page({
  data: {
    first_time: true,
    pets: app.globalData.pets,
    pet_index: 0,
    pet: {},
    progress: 0,
    scroll_id: 0,
    nav_id: 0,
    nav_head: [{
      name: '今日安排',
      id: 0
    }, {
      name: '成长记录',
      id: 1
    }],
    daily_plan: [
      {
        unique: 0,
        daily_plan_head: '喂食',
        daily_plan_content: '2餐，400g干粮即可',
        daily_plan_punch: false
      },
      {
        unique: 1,
        daily_plan_head: '遛狗',
        daily_plan_content: '陪狗狗出外面耍耍',
        daily_plan_punch: false
      },
      {
        unique: 2,
        daily_plan_head: '洗澡',
        daily_plan_content: '狗狗要洗澡了哟',
        daily_plan_punch: false
      },
      {
        unique: 3,
        daily_plan_head: '驱虫',
        daily_plan_content: '今天狗狗要驱虫了哟',
        daily_plan_punch: false
      },
      {
        unique: 4,
        daily_plan_head: '喂药',
        daily_plan_content: '有没有准时给狗狗敷药呀',
        daily_plan_punch: false
      },
      {
        unique: 5,
        daily_plan_head: '疫苗',
        daily_plan_content: '需要打疫苗第三针咯',
        daily_plan_punch: false
      }
    ],
    manager_remaid: [
      {
        unique: 0,
        title: '注射疫苗',
        R_time: 1
      },
      {
        unique: 1,
        title: '剪指甲',
        R_time: 2
      },
      {
        unique: 2,
        title: '吃药',
        R_time: 2
      },
      {
        unique: 3,
        title: '玩',
        R_time: 2
      }
    ],
    managerShow: false,
    experience: [
      {
        unique: 0,
        title: '春季感冒高发期',
        R_time: 2
      },
      {
        unique: 1,
        title: '换毛期',
        R_time: 1
      },
      {
        unique: 2,
        title: '游泳',
        R_time: 1
      },
      {
        unique: 3,
        title: '飞',
        R_time: 1
      }
    ],
    experienceShow: false,
    daily_knowledge: {
      title: '这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
      tags: ['可爱', '认真', '呆萌'],
      add_time: '04-12',
      comment: 560,
      read: 999,
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
    },
    grow_nav: [
      {
        unique: 0,
        name: '喂食',
        src: '/images/grow_record/eat.png',
        en: 'eat'
      },
      {
        unique: 1,
        name: '健康',
        src: '/images/grow_record/health.png',
        en: 'health'
      },
      {
        unique: 2,
        name: '玩耍',
        src: '/images/grow_record/play.png',
        en: 'play'
      },
      {
        unique: 3,
        name: '身高体重',
        src: '/images/grow_record/grow.png',
        en: 'grow'
      },
      {
        unique: 4,
        name: '清洁',
        src: '/images/grow_record/clean.png',
        en: 'clean'
      },
      {
        unique: 5,
        name: '记账本',
        src: '/images/grow_record/paybook.png',
        en: 'paybook'
      }],
    grow_records: [
      {
        date: '2017-03-20',
        category: {
          name: '体重记录',
          age: '6个月',
          records: [
            {
              items: ['身高：60.0cm', '体重：37.0kg'],
              remark: '大胖子',
              src: []
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
  onLoad(options) {
    const that = this
    //更新数据
    app.getSetting((userInfo) => {
      if (userInfo.petNumber > 0) {
        wx.request({
          url: app.globalData.host + 'pets',
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            'Cookie': app.globalData.LaravelID
          },
          success: res => {
            if (200 == res.data.code) {
              //调用宠物年龄计算
              app.globalData.pets = res.data.data
              app.calPetsAge(app.globalData.pets)
              that.setData({
                first_time: false,
                pets: res.data.data,
                pet: res.data.data[that.data.pet_index],
              })
            }
          }
        })
      }
    })
  },
  onShow(e) {
    const that = this
    if (!app.globalData.pets) {
      that.setData({
        first_time: true
      })
    } else {
      app.calPetsAge(app.globalData.pets)
      that.setData({
        pets: app.globalData.pets,
        pet: app.globalData.pets[that.data.pet_index]
      })
    }
  },
  //记录当前时间
  timeRecord() {
    let time = new Date()
    app.globalData.time = (10 - time.getHours() <= 0 ? time.getHours() : '0' + time.getHours()) + ':' + ((10 - time.getMinutes()) <= 0 ? time.getMinutes() : '0' + time.getMinutes())
  },
  goToFirst() {
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

  //切换宠物信息
  shiftPet(e) {
    const that = this
    let index = that.data.pet_index + 1
    if (index > app.globalData.pets.length - 1) {
      index = 0
    }
    wx.showLoading({
      title: '切换中',
    })
    wx.request({
      url: app.globalData.host + 'pet/' + that.data.pets[index].id,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        that.setData({
          pet_index: index,
          pet: res.data.data
        })
        wx.hideLoading()
      }
    })
  },

  //改变导航样式
  changePart(e) {
    this.setData({
      nav_id: e.target.id,
      scroll_id: e.target.id
    })
  },

  //打卡
  daily_plan_punch(e) {
    let length = this.data.daily_plan.length
    let percent = 100 / length
    let progress = Math.ceil(Number(e.currentTarget.dataset.progress) + percent)
    let temp = 'daily_plan[' + e.target.id + '].daily_plan_punch'
    if (progress > 100) {
      progress = 100
    }
    this.setData({
      [temp]: 'true',
      progress: progress
    })
  },

  //展示管家提醒列表
  managerShow(e) {
    const that = this
    if (e.currentTarget.dataset.show) {
      that.setData({
        managerShow: false
      })
    } else {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(() => {
        wx.hideLoading()
        that.setData({
          managerShow: true
        })
      }, 200)
    }
  },

  //展示经历列表
  experienceShow(e) {
    const that = this
    if (e.currentTarget.dataset.show) {
      that.setData({
        experienceShow: false
      })
    } else {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(() => {
        wx.hideLoading()
        that.setData({
          experienceShow: true
        })
      }, 200)
    }
  },

  //成长记录各页面跳转
  eat(e) {
    const that = this
    that.timeRecord()
    wx.navigateTo({
      url: '/pages/eat/eat?id=' + that.data.pet.id,
    })
  },
  health(e) {
    const that = this
    that.timeRecord()
    wx.navigateTo({
      url: '/pages/health/health?id=' + that.data.pet.id,
    })
  },
  play(e) {
    const that = this
    that.timeRecord()
    wx.navigateTo({
      url: '/pages/play/play?id=' + that.data.pet.id,
    })
  },
  grow(e) {
    const that = this
    that.timeRecord()
    wx.navigateTo({
      url: '/pages/grow/grow?id=' + that.data.pet.id,
    })
  },
  clean(e) {
    const that = this
    that.timeRecord()
    wx.navigateTo({
      url: '/pages/clean/clean?id=' + that.data.pet.id,
    })
  },
  paybook(e) {
    const that = this
    that.timeRecord()
    wx.navigateTo({
      url: '/pages/paybook/paybook?id=' + that.data.pet.id,
    })
  },

  //图片预览
  preImage(e) {
    const that = this
    let src = e.currentTarget.dataset.src
    wx.previewImage({
      urls: [src],
    })
  },

  //提醒管理
  goToMangaer(e) {
    wx.navigateTo({
      url: '/pages/manager_switch/manager_switch',
    })
  },

  //文章跳转
  goTONews(e) {
    wx.switchTab({
      url: '/pages/news/news',
    })
  }

})
