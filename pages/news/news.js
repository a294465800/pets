// news.js
let flag1 = 0
let flag2 = 0
let timer = null
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //版本
    system: app.globalData.system,
    system_flag: true,
    imgUrls: [
      'http://img1.3lian.com/2015/a1/119/d/197.jpg',
      'http://img2.3lian.com/2014/f4/77/d/68.jpg',
      'http://img1.3lian.com/img13/c3/52/d/1.jpg',
      'http://img1.3lian.com/img013/v3/81/d/69.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,

    //动画
    animationData: {},

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
    news: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    //手机版本控制
    if (app.globalData.system != 'ios') {
      that.setData({
        system_flag: false
      })
    }

    //请求文章类标题
    wx.request({
      url: app.globalData.host + 'articletypes',
      success: res => {
        that.setData({
          nav_head: [...that.data.nav_head, ...res.data.data]
        })
      }
    })

    //初次请求文章列表
    wx.request({
      url: app.globalData.host + 'articles/list',
      data: {
        page: 1
      },
      success: res => {
        that.setData({
          news: res.data.data
        })
      }
    })
  },

  //导航选择
  changeNav(e) {
    if (!this.data.bug) {
      // wx.request({
      //   url: 'https://www.sennki.com/api/articles/list',
      //   data: {
      //     page: 1,
      //     type: e.currentTarget.dataset.type
      //   },
      //   success(res) {
      //     that.setData({
      //       news: res.data.data
      //     })
      //   }
      // })
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

  //导航固定
  fixNav(e) {
    const that = this
    if (e.detail.scrollTop >= 200) {
      flag2 = 0
      if (flag1 == 1) {
        return
      } else {
        flag1 = 1
        that.setData({
          fix_nav: true
        })
      }
    } else if (e.detail.scrollTop < 200) {
      flag1 = 0
      if (flag2 == 0) {
        console.log(1)
        flag2 = 1
        that.setData({
          fix_nav: false
        })
      } else {
        return
      }
    } else {
      return
    }
  },

  //具体文章跳转
  goToArticle(e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.id,
    })
  }
})