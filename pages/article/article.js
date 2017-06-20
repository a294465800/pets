// article.js
//引入WxParse模块
let WxParse = require('../../wxParse/wxParse.js')
let app = getApp()
let timer
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    good: {
      src: '/images/icon/good_g.png',
      src_e: '/images/icon/good_r.png',
      flag: false,
      flag_plus: true
    },
    // good_count: 0,
    bad: {
      src: '/images/icon/bad_g.png',
      src_e: '/images/icon/bad_r.png',
      flag: false,
      flag_plus: true
    },
    // bad_count: 0,

    //控制点赞
    // article_first: false,

    // 隐藏底部，拉起输入框
    article_input: false,

    //清空value
    value: '',

    //文章id
    article_id: 0,

    //文章
    articles: null,

    //文章加载
    article_control: true,

    //分享提示
    share_tip: true,

    //评论页数
    page: 1,

    //评论加载完毕提示
    comment_end: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    let article
    that.setData({
      article_control: true
    })
    wx.showLoading({
      title: '加载中···',
    })
    wx.request({
      url: app.globalData.host + 'article/' + options.id,
      success: res => {
        //预留
        article = res.data.data.content.replace(/&amp;nbsp;/g, ' ')
        WxParse.wxParse('article', 'html', article, that, 5)
        that.setData({
          articles: res.data.data,
          good_count: res.data.data.like,
          bad_count: res.data.data.dislike,
          article_control: false
        })
        wx.hideLoading()
      }
    })
  },
  onShow() {
    const that = this
    that.setData({
      userInfo: app.globalData.userInfo
    })
  },

  //下拉请求新评论
  onReachBottom() {
    let that = this
    if (that.data.comment_end) { }
    else {
      wx.showLoading({
        title: '评论加载中···',
        mask: true
      })
      wx.request({
        url: app.globalData.host + 'comments',
        data: {
          id: that.data.articles.id,
          page: that.data.page + 1
        },
        success: res => {
          if (res.data.data[0]) {
            that.setData({
              'articles.comments': [...that.data.articles.comments, ...res.data.data],
              page: that.data.page + 1
            })
          } else {
            that.setData({
              comment_end: true
            })
          }
          wx.hideLoading()
        }
      })
    }
  },
  //点赞
  articleGood(e) {
    const that = this
    if (that.data.good.flag) {
      wx.showModal({
        title: '提示',
        content: '亲，你已经赞过啦~',
        showCancel: false
      })
    } else {
      that.setData({
        'articles.like': (that.data.articles.like + 1),
        'good.flag': true,
        'good.flag_plus': false,
      })
      wx.request({
        url: app.globalData.host + 'article/like/' + that.data.articles.id,
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': app.globalData.LaravelID
        },
      })
      setTimeout(() => {
        that.setData({
          'good.flag_plus': true,
        })
      }, 500)
    }
  },

  //踩文章
  articleBad(e) {
    const that = this
    if (that.data.bad.flag) {
      wx.showModal({
        title: '提示',
        content: '亲，踩这么多次可不好喔~',
        showCancel: false
      })
    } else {
      that.setData({
        'articles.dislike': (that.data.articles.dislike + 1),
        'bad.flag': true,
        'bad.flag_plus': false,
      })
      wx.request({
        url: app.globalData.host + 'article/dislike/' + that.data.articles.id,
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': app.globalData.LaravelID
        },
      })
      setTimeout(() => {
        that.setData({
          'bad.flag_plus': true,
        })
      }, 500)
    }
  },

  //拉起键盘
  pullArticleInput(e) {
    this.setData({
      article_input: true
    })
  },

  //获取当前输入
  getInput(e) {
    this.setData({
      value: e.detail.value
    })
  },

  //评论提交
  articleCommentPost(e) {
    let that = this
    if (app.globalData.userInfo) {
      let time = new Date()
      let article_item = {
        id: 0,
        avatar: that.data.userInfo.avatarUrl,
        userName: that.data.userInfo.nickName,
        createtime: (9 - time.getMonth() <= 0 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + '-' + ((10 - time.getDate()) <= 0 ? time.getDate() : '0' + time.getDate()) + ' ' + (10 - time.getHours() <= 0 ? time.getHours() : '0' + time.getHours()) + ':' + ((10 - time.getMinutes()) <= 0 ? time.getMinutes() : '0' + time.getMinutes()),
        content: e.detail.value.article_comment
      }
      that.setData({
        article_input: false,
        value: '',
        'articles.comments': [...[article_item], ...that.data.articles.comments],
        'article.commentNumber': that.data.article.commentNumber + 1
      })
      wx.hideKeyboard()
      wx.request({
        url: app.globalData.host + 'comment',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': app.globalData.LaravelID
        },
        data: {
          aid: that.data.articles.id,
          content: e.detail.value.article_comment
        },
        success: res => {
          wx.showToast({
            title: '评论成功',
            icon: 'success'
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您好，请先登录~',
        success: res => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/mine_edit/mine_edit',
            })
          }
        }
      })
    }
  },

  //评论区域隐藏
  hideArticleComment(e) {
    this.setData({
      article_input: false
    })
  },

  //收藏文章
  collectNews(e) {
    const that = this
    wx.request({
      url: app.globalData.host + 'collect/' + that.data.articles.id,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      data: {
        state: that.data.articles.collect == 0 ? 1 : 0
      },
      success: res => {
        that.setData({
          'articles.collect': res.data.data,
        })
        if (that.data.articles.collect == 1) {
          wx.showToast({
            title: '收藏成功'
          })
        }
      }
    })
  },

  //分享
  onShareAppMessage() {
    return {
      title: '宠物养成记',
      path: '/pages/article/article',
      success: () => { }
    }
  },

  //分享按鈕吐司提示
  share(e) {
    clearTimeout(timer)
    let that = this
    that.setData({
      share_tip: false
    })
    timer = setTimeout(() => {
      that.setData({
        share_tip: true
      })
    }, 1500)
  }
})