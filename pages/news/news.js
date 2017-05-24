// news.js
let flag1 = 0
let flag2 = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    nav_id: 0,
    nav_head: [{
      name: '推荐',
      id: 0
    },
    {
      name: '有趣',
      id: 1
    },
    {
      name: '食谱',
      id: 2
    },
    {
      name: '疾病',
      id: 3
    },
    {
      name: '训练',
      id: 4
    },
    {
      name: '养护',
      id: 5
    }],
    fix_nav: false,
    news: [
      {
        title: '1这只狗狗因为表情',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      },
      {
        title: '2这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      },
      {
        title: '3这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      },
      {
        title: '4这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      },
      {
        title: '5这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      },
      {
        title: '6这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      },
      {
        title: '7这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      },
      {
        title: '这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      },
      {
        title: '这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
        tags: ['可爱', '认真', '呆萌'],
        add_time: '04-12',
        comment: 560,
        read: 999,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //导航选择
  changeNav: function (e) {
    this.setData({
      nav_id: e.target.id
    })
  },

  //导航固定
  fixNav: function (e) {
    // console.log(e)
    // let that = this
    // if (that.data.fix_nav == e.currentTarget.dataset.fixnav) {
    //   console.log(1)
    //   return;
    // } else {
    //   that.setData({
    //     fix_nav: !e.currentTarget.dataset.fixnav
    //   })
    // }

    let that = this
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
  goToArticle: function(e){
    wx.navigateTo({
      url: '/pages/article/article',
    })
  }
})