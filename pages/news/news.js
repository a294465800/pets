// news.js
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
    console.log(e.detail)
    if (e.detail.scrollTop >= 200) {
      this.setData({
        fix_nav: true
      })
    }else {
      this.setData({
        fix_nav: false
      })
    }
  }
})