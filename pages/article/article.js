// article.js
//引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var article = '<div>我是HTML代码</div>';
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);
  },
})