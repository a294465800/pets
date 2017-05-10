//index.js
//获取应用实例
Page({
  data: {
    nav_id: 0,
    nav_head: [{
      name: '今日安排',
      id: 0
    },{
      name: '成长记录',
      id: 1
    },{
      name: '问答广场',
      id: 2
    }]
  },
  onLoad: function () {
  },
  goToFirst: function(){
    wx.redirectTo({
      url: '/pages/first_step/first_step',
    })
  },
  //改变导航样式
  changePart: function(e){
    this.setData({
      nav_id: e.target.id
    })
  }
})
