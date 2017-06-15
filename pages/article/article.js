// article.js
//引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js')
var app = getApp()
var timer
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    good: {
      src: '/images/icon/good_g.png',
      src_e: '/images/icon/good_r.png',
      count: 156,
      flag: false,
      flag_plus: true
    },
    bad: {
      src: '/images/icon/bad_g.png',
      src_e: '/images/icon/bad_r.png',
      count: 156,
      flag: false,
      flag_plus: true
    },

    //控制点赞
    article_first: false,

    // 隐藏底部，拉起输入框
    article_input: false,
    //清空value
    value: '',

    //文章
    articles: null,
    article_list: [
      {
        unique: 0,
        head_img: '/images/head_img.jpg',
        nick_name: '小糯米',
        time: '04-12 12:20',
        comment: '如果你无法简洁表达你的想法，那只说明你还不够了解他'
      },
      {
        unique: 1,
        head_img: '/images/head_img.jpg',
        nick_name: '小糯米',
        time: '04-12 12:20',
        comment: '如果你无法简洁表达你的想法，那只说明你还不够了解他啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊哇啊啊啊啊啊啊啊啊大多数哇啊阿达啊啊'
      }
    ],

    //收藏提示
    collect_tip: false,

    //分享提示
    share_tip: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let article
    wx.request({
      url: 'https://www.sennki.com/api/article/' + options.id,
      success: function (res) {
        that.setData({
          articles: res.data.data
        })
        article = res.data.data.content
        WxParse.wxParse('article', 'html', article, that, 5)        
      }
    })
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  //点赞
  articleGood: function (e) {
    const that = this
    if (that.data.good.flag) {
      wx.showModal({
        title: '提示',
        content: '亲，你已经赞过啦~',
        showCancel: false
      })
    } else {
      that.setData({
        'good.count': (that.data.good.count + 1),
        'good.flag': true,
        'good.flag_plus': false,
        'bad.flag': false,
        'bad.count': that.data.article_first ? (that.data.bad.count - 1) : that.data.bad.count,
        article_first: true
      })
      setTimeout(function () {
        that.setData({
          'good.flag_plus': true,
        })
      }, 500)
    }
  },

  //踩文章
  articleBad: function (e) {
    const that = this
    if (that.data.bad.flag) {
      wx.showModal({
        title: '提示',
        content: '亲，踩这么多次可不好喔~',
        showCancel: false
      })
    } else {
      that.setData({
        'bad.count': (that.data.bad.count + 1),
        'bad.flag': true,
        'bad.flag_plus': false,
        'good.flag': false,
        'good.count': that.data.article_first ? (that.data.good.count - 1) : that.data.good.count,
        article_first: true
      })
      setTimeout(function () {
        that.setData({
          'bad.flag_plus': true,
        })
      }, 500)
    }
  },

  //拉起键盘
  pullArticleInput: function (e) {
    this.setData({
      article_input: true
    })
  },

  //获取当前输入
  getInput: function (e) {
    this.setData({
      value: e.detail.value
    })
  },

  //评论提交
  articleCommentPost: function (e) {
    if (app.globalData.userInfo.nickName) {
      let time = new Date()
      const length = this.data.article_list.length
      let that = this
      let article_item = {
        unique: length,
        head_img: that.data.userInfo.avatarUrl,
        nick_name: that.data.userInfo.nickName,
        time: (9 - time.getMonth() <= 0 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + '-' + ((10 - time.getDate()) <= 0 ? time.getDate() : '0' + time.getDate()) + ' ' + (10 - time.getHours() <= 0 ? time.getHours() : '0' + time.getHours()) + ':' + ((10 - time.getMinutes()) <= 0 ? time.getMinutes() : '0' + time.getMinutes()),
        comment: e.detail.value.article_comment
      }
      that.data.article_list = [article_item].concat(that.data.article_list)
      let path = 'article_list[' + length + ']'
      that.setData({
        article_input: false,
        value: '',
        article_list: that.data.article_list
      })
      wx.hideKeyboard()
      wx.showToast({
        title: '评论成功',
        icon: 'success'
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您好，请先登录~',
        success: function (res) {
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
  hideArticleComment: function (e) {
    this.setData({
      article_input: false
    })
  },

  //收藏文章
  collectNews: function (e) {
    let that = this
    that.setData({
      collect_tip: !that.data.collect_tip
    })
    if (that.data.collect_tip) {
      wx.showToast({
        title: '已加入收藏',
        icon: 'success'
      })
    }
  },

  //分享
  onShareAppMessage: function () {
    return {
      title: '宠物养成记',
      path: '/pages/article/article',
      success: function () {

      }
    }
  },

  //分享按鈕吐司提示
  share: function (e) {
    clearTimeout(timer)
    let that = this
    that.setData({
      share_tip: false
    })
    timer = setTimeout(function () {
      that.setData({
        share_tip: true
      })
    }, 1500)
  }
})