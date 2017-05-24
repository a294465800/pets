// add_paybook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paybook_item: [{
      src: '/images/paybook/others.png',
      name: 'others',
      zn: '其他'
    },
    {
      src: '/images/paybook/food.png',
      name: 'food',
      zn: '食物'
    },
    {
      src: '/images/paybook/facial.png',
      name: 'facial',
      zn: '美容'
    },
    {
      src: '/images/paybook/medical.png',
      name: 'medical',
      zn: '医疗'
    },
    {
      src: '/images/paybook/clean.png',
      name: 'clean',
      zn: '洗护用品'
    },
    {
      src: '/images/paybook/play.png',
      name: 'play',
      zn: '玩具'
    },
    {
      src: '/images/paybook/tool.png',
      name: 'tool',
      zn: '器具'
    },
    {
      src: '/images/paybook/cloth.png',
      name: 'cloth',
      zn: '服饰'
    },
    {
      src: '/images/paybook/live.png',
      name: 'live',
      zn: '寄养'
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
    this.setData({
      'paybook.content': e.detail.value.remark,
      'paybook.price': e.detail.value.price,
      reset: ''
    })
    console.log(this.data.paybook)
    wx.showToast({
      title: '保存成功！',
      icon: 'sucess',
      complete: function () {
        setTimeout(function () {
          wx.navigateBack({
          })
        }, 500)
      }
    })
  }

})