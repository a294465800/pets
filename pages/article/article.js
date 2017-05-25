// article.js
//引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js')
var app = getApp()
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
      flag: false
    },
    bad: {
      src: '/images/icon/bad_g.png',
      src_e: '/images/icon/bad_g.png',
      count: 156,
      flag: false
    },

    //控制点赞
    article_first: false,

    // 隐藏底部，拉起输入框
    article_input: false,
    //清空value
    value: '',
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var article = '<div style="color:red">我是<br>HTML代码</div>'
    WxParse.wxParse('article', 'html', article, that, 5)
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },

  //点赞
  articleGood: function (e) {
    let that = this
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
        'bad.flag': false,
        'bad.count': that.data.article_first ? (that.data.bad.count - 1) : that.data.bad.count,
        article_first: true
      })
    }
  },

  //踩文章
  articleBad: function (e) {
    let that = this
    if (that.data.bad.flag) {
      wx.showModal({
        title: '提示',
        content: '亲，踩这么多次会遭天谴的喔~',
        showCancel: false
      })
    } else {
      that.setData({
        'bad.count': (that.data.bad.count + 1),
        'bad.flag': true,
        'good.flag': false,
        'good.count': that.data.article_first ? (that.data.good.count - 1) : that.data.good.count,
        article_first: true
      })
    }
  },

  //拉起键盘
  pullArticleInput: function (e) {
    this.setData({
      article_input: true
    })
  },

  //获取当前输入
  getInput: function(e){
    this.setData({
      value: e.detail.value
    })
  },

  //评论提交
  articleCommentPost: function (e) {
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
  },

  //评论区域隐藏
  hideArticleComment: function (e) {
    this.setData({
      article_input: false
    })
  },

  //分享
  onShareAppMessage: function(){
    return {
      title: '宠物养成记',
      path: '/pages/article/article',
      success: function (){
        
      }
    }
  }
})