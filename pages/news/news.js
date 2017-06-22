// news.js
let flag1 = 0
let flag2 = 0
let timer = null
let timer2 = null
let app = getApp()
var startY = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,

    //动画
    animationData: {},
    animationDataImg: {},

    //banners
    banners: null,

    //swiper
    current: 0,
    nav_head: [{
      title: '推荐',
      id: 0
    }],

    //切换bug
    bug: false,

    //缓存文章
    news_flag: [{
      flag: true
    },
    {
      flag: false
    },
    {
      flag: false
    },
    {
      flag: false
    },
    {
      flag: false
    },
    {
      flag: false
    }],
    fix_nav: false,
    news: [{
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    },
    {
      title: '你好啊'
    }
      , {
      title: '你好啊'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this

    //请求文章类标题
    wx.request({
      url: app.globalData.host + 'articletypes',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        that.setData({
          nav_head: [...that.data.nav_head, ...res.data.data]
        })
      }
    })

    //初次请求文章列表
    wx.request({
      url: app.globalData.host + 'articles/list',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: {
        page: 1
      },
      success: res => {
        that.setData({
          news: [...that.data.news, ...res.data.data]
        })
      }
    })

    //banner请求
    // wx.request({
    //   url: app.globalData.host + 'banners',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Cookie': app.globalData.LaravelID
    //   },
    //   success: res => {
    //     let imgUrls = []
    //     for (let i in res.data.data) {
    //       imgUrls.push(res.data.data[i].img)
    //     }
    //     that.setData({
    //       imgUrls: imgUrls,
    //       banners: res.data.data
    //     })
    //   }
    // })
  },

  //导航选择
  changeNav(e) {
    if (!this.data.bug) {
      const that = this
      const length = that.data.nav_head.length
      let left = (750 / length) * e.target.id + 'rpx'
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      animation.left(left).step()

      that.setData({
        current: e.target.id,
        bug: true,
        animationData: animation.export()
      })
    }
  },

  //switch切换
  switchPage(e) {
    clearTimeout(timer)
    const that = this
    wx.request({
      url: app.globalData.host + 'articles/list',
      data: {
        page: 1,
        type: that.data.nav_head[e.detail.current].id || 0
      },
      success(res) {
        that.setData({
          news: res.data.data
        })
      }
    })
    if (that.data.current == e.detail.current) {
    } else {
      const length = that.data.nav_head.length
      let left = (750 / length) * e.detail.current + 'rpx'
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      animation.left(left).step()
      that.setData({
        animationData: animation.export(),
        current: e.detail.current,
      })
    }
    let object = 'news_flag[' + e.detail.current + '].flag'
    timer = setTimeout(() => {
      that.setData({
        [object]: true,
        bug: false
      })
    }, 1000)
  },

  //上拉加载
  toTop(e) {
    // clearTimeout(timer2)
    const that = this
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    that.animation = animation
    animation.scale(1).step()
    that.setData({
      fix_nav: false,
      animationDataImg: animation.export()
    })
    wx.stopPullDownRefresh()
  },

  //具体文章跳转
  goToArticle(e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.id,
    })
  },

  //获取用户初始触摸位置
  startTouch(e) {
    startY = e.touches[0].clientY
  },

  //根据用户结束触摸位置进行判断
  endTouch(e) {
    clearTimeout(timer2)
    const that = this
    let moveY = e.changedTouches[0].clientY
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    that.animation = animation
    if (startY > moveY) {
      animation.scale(.5).step()
      that.setData({
        animationDataImg: animation.export(),
      })
      timer2 = setTimeout(() => {
        that.setData({
          fix_nav: true
        })
      }, 300)
    }
  }
})