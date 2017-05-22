// shop.js
var flag1 = 0
var flag2 = 0

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
    fix_nav: false,
    shop_nav: [
      {
        kind: 'species',
        array: ['喵咪', '狗狗'],
        index: 0
      },
      {
        kind: 'food',
        array: ['新鲜主粮', '狗粮', '猫粮'],
        index: 0
      },
      {
        kind: 'others',
        array: ['你猜', '我猜', '不猜'],
        index: 0
      }
    ],
    shop_list: [
      {
        index: 0,
        src: '/images/first_page/cake.png',
        title: '【全犬型-清热去火】',
        price: '36.00',
      },
      {
        index: 0,
        src: '/images/first_page/cake.png',
        title: '【全犬型-清热去火】 尝鲜版深海鱼肉鸡肉喵粮',
        price: '36.00',
      },
      {
        index: 0,
        src: '/images/first_page/cake.png',
        title: '【全犬型-清热去火】 尝鲜版深海鱼肉鸡肉喵粮',
        price: '36.00',
      },
      {
        index: 0,
        src: '/images/first_page/cake.png',
        title: '【全犬型-清热去火】 尝鲜版深海鱼肉鸡肉喵粮',
        price: '36.00',
      },
      {
        index: 0,
        src: '/images/first_page/cake.png',
        title: '【全犬型-清热去火】 尝鲜版深海鱼肉鸡肉喵粮',
        price: '36.00',
      },
      {
        index: 0,
        src: '/images/first_page/cake.png',
        title: '【全犬型-清热去火】 尝鲜版深海鱼肉鸡肉喵粮',
        price: '36.00',
      },
      {
        index: 0,
        src: '/images/first_page/cake.png',
        title: '【全犬型-清热去火】 尝鲜版深海鱼肉鸡肉喵粮',
        price: '36.00',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //导航固定
  fixNav: function (e) {

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

  //导航改变
  changeNav: function (e) {
    let that = this
    let target = e.currentTarget.id
    let value = e.detail.value
    let shop = 'shop_nav[' + target + '].index'
    that.setData({
      [shop]: value,
    })
  }
})