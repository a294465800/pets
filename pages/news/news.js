// news.js
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

    news: [],

    //效果长度
    width: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    wx.showLoading({
      title: '加载中',
    })

    //请求文章类标题
    wx.request({
      url: app.globalData.host + 'articletypes',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        that.setData({
          nav_head: [...that.data.nav_head, ...res.data.data],
        })
        that.setData({
          width: Math.floor(100 / that.data.nav_head.length)
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
          'news[0]': [...res.data.data]
        })
        wx.hideLoading()
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

  //动画封装
  animationNav(id) {
    const that = this
    const length = that.data.nav_head.length
    let left = (that.data.width) * id + '%'
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    return animation.left(left).step()
  },

  //导航选择
  changeNav(e) {
    wx.showLoading({
      title: '加载中',
    })
    const that = this
    let id = e.target.id
    let news = 'news[' + id + ']'
    wx.request({
      url: app.globalData.host + 'articles/list',
      data: {
        page: 1,
        type: that.data.nav_head[id].id || 0
      },
      success(res) {
        that.setData({
          [news]: [...res.data.data]
        })
        wx.hideLoading()
      }
    })
    that.setData({
      animationData: that.animationNav(id).export(),
      current: id,
    })
  },

  //switch切换
  switchPage(e) {
    wx.showLoading({
      title: '加载中',
    })
    const that = this
    let index = e.detail.current
    let news = 'news[' + index + ']'
    wx.request({
      url: app.globalData.host + 'articles/list',
      data: {
        page: 1,
        type: that.data.nav_head[index].id || 0
      },
      success(res) {
        that.setData({
          [news]: [...res.data.data]
        })
        wx.hideLoading()
      }
    })
    that.setData({
      animationData: that.animationNav(index).export(),
      current: index,
    })
  },

  //具体文章跳转
  goToArticle(e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.id,
    })
  },

  //上拉加载
  toTop() {
    const that = this
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    animation.height('400rpx').step()
    that.setData({
      animationDataImg: animation.export()
    })
  },

  onPullDownRefresh(e) {
    const that = this
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    animation.height('400rpx').step()
    that.setData({
      animationDataImg: animation.export()
    })
    wx.showLoading({
      title: '加载中',
    })
    let index = that.data.current
    let news = 'news[' + index + ']'
    wx.request({
      url: app.globalData.host + 'articles/list',
      data: {
        page: 1,
        type: that.data.nav_head[index].id || 0
      },
      success(res) {
        that.setData({
          [news]: [...res.data.data]
        })
        wx.hideLoading()
        wx.showToast({
          title: '刷新成功',
        })
      }
    })
    wx.stopPullDownRefresh()
  },

  //获取用户初始触摸位置
  startTouch(e) {
    startY = e.touches[0].clientY
  },

  //根据用户结束触摸位置进行判断
  endTouch(e) {
    const that = this
    let moveY = e.changedTouches[0].clientY
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    if (startY > moveY) {
      animation.height(0).step()
      that.setData({
        animationDataImg: animation.export(),
      })
    }
  },

  //文章触底加载
  toBottom() {
    wx.showLoading({
      title: '加载中',
    })
    const that = this
    let index = that.data.current
    let news = 'news[' + index + ']'
    wx.request({
      url: app.globalData.host + 'articles/list',
      data: {
        page: 1,
        type: that.data.nav_head[index].id || 0
      },
      success(res) {
        that.setData({
          [news]: [...that.data.news[index], ...res.data.data]
        })
        wx.hideLoading()
        wx.showToast({
          title: '刷新成功',
        })
      }
    })
  }
})