// add_paybook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paybook_item: [{
      src: '/images/paybook/others.png',
      name: 'others',
      zn: '其他',
      unique: 0
    },
    {
      src: '/images/paybook/food.png',
      name: 'food',
      zn: '食物',
      unique: 1
    },
    {
      src: '/images/paybook/facial.png',
      name: 'facial',
      zn: '美容',
      unique: 2
    },
    {
      src: '/images/paybook/medical.png',
      name: 'medical',
      zn: '医疗',
      unique: 3
    },
    {
      src: '/images/paybook/clean.png',
      name: 'clean',
      zn: '洗护用品',
      unique: 4
    },
    {
      src: '/images/paybook/play.png',
      name: 'play',
      zn: '玩具',
      unique: 5
    },
    {
      src: '/images/paybook/tool.png',
      name: 'tool',
      zn: '器具',
      unique: 6
    },
    {
      src: '/images/paybook/cloth.png',
      name: 'cloth',
      zn: '服饰',
      unique: 7
    },
    {
      src: '/images/paybook/live.png',
      name: 'live',
      zn: '寄养',
      unique: 8
    },
    {
      src: '/images/paybook/train.png',
      name: 'train',
      zn: '训练'
    }],
    //判断选中的项目
    item_select: -1,
    input_show: true,
    reset: '',

    //存放账单内容
    paybook: {
      name: '',
      content: '',
      price: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //打开账单输入
  paybook_input: function (e) {
    let index = e.currentTarget.id
    let that = this
    that.setData({
      'paybook.name': that.data.paybook_item[index].name,
      item_select: index,
      input_show: false,
      reset: ''
    })
  },

  //表单提交动作
  sendPaybook: function (e) {
    let that = this
    if (!e.detail.value.price) {
      wx.showModal({
        title: '提示',
        content: '亲，还没输入花费金额呢~',
        showCancel: false
      })
    } else {
      that.setData({
        'paybook.content': e.detail.value.remark,
        'paybook.price': e.detail.value.price,
        reset: '',
        input_show: true
      })
      console.log(that.data.paybook)
      wx.showToast({
        title: '保存成功！',
        icon: 'sucess',
        // complete: function () {
        //   setTimeout(function () {
        //     wx.navigateBack({
        //     })
        //   }, 100)
        // }
      })
    }
  },

  //遮罩层隐藏
  hideInput: function (e) {
    this.setData({
      input_show: true
    })
  },
  showInput: function (e) {
    let that = this
    if (that.data.input_show) {
      that.setData({
        input_show: false
      })
    }
  }

})