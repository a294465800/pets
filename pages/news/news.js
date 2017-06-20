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
    imgUrls: null,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,

    //动画
    animationData: {},

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
          news: res.data.data
        })
      }
    })

    //banner请求
    wx.request({
      url: app.globalData.host + 'banners',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        let imgUrls = []
        for( let i in res.data.data){
          imgUrls.push(res.data.data[i].img)
        }
        that.setData({
          imgUrls: imgUrls,
          banners: res.data.data
        })
      }
    })
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