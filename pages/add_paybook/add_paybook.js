// add_paybook.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pet_id: 0,
    paybook_id: 0,
    paybook_item: [
      // {
      //   src: '/images/paybook/others.png',
      //   name: 'others',
      //   zn: '其他',
      //   unique: 0
      // },
      // {
      //   src: '/images/paybook/food.png',
      //   name: 'food',
      //   zn: '食物',
      //   unique: 1
      // },
      // {
      //   src: '/images/paybook/facial.png',
      //   name: 'facial',
      //   zn: '美容',
      //   unique: 2
      // },
      // {
      //   src: '/images/paybook/medical.png',
      //   name: 'medical',
      //   zn: '医疗',
      //   unique: 3
      // },
      // {
      //   src: '/images/paybook/clean.png',
      //   name: 'clean',
      //   zn: '洗护用品',
      //   unique: 4
      // },
      // {
      //   src: '/images/paybook/play.png',
      //   name: 'play',
      //   zn: '玩具',
      //   unique: 5
      // },
      // {
      //   src: '/images/paybook/tool.png',
      //   name: 'tool',
      //   zn: '器具',
      //   unique: 6
      // },
      // {
      //   src: '/images/paybook/cloth.png',
      //   name: 'cloth',
      //   zn: '服饰',
      //   unique: 7
      // },
      // {
      //   src: '/images/paybook/live.png',
      //   name: 'live',
      //   zn: '寄养',
      //   unique: 8
      // },
      // {
      //   src: '/images/paybook/train.png',
      //   name: 'train',
      //   zn: '训练'
      // }
      ],
    //判断选中的项目
    item_select: -1,
    input_show: true,
    reset: '',

    //存放账单内容
    paybook: {
      name: '',
      remark: '',
      price: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    wx.request({
      url: app.globalData.host + 'record/types/account',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': app.globalData.LaravelID
      },
      success: res => {
        that.setData({
          pet_id: options.id,
          paybook_item: res.data.data
        })
      }
    })
  },
  //打开账单输入
  paybook_input(e) {
    let index = e.currentTarget.id
    const that = this
    that.setData({
      // 'paybook.title': that.data.paybook_item[index].title,
      paybook_id: e.currentTarget.dataset.id,
      item_select: index,
      input_show: false,
      reset: ''
    })
  },

  //表单提交动作
  sendPaybook(e) {
    const that = this
    if (!e.detail.value.price) {
      wx.showModal({
        title: '提示',
        content: '亲，还没输入花费金额呢~',
        showCancel: false,
        success:() => {
          that.setData({
            input_show: false,
          })
        }
      })
    } else {
      that.setData({
        'paybook.remark': e.detail.value.remark,
        'paybook.price': e.detail.value.price,
        reset: '',
        input_show: true
      })
      wx.showToast({
        title: '保存成功！',
        complete:() => {
          that.setData({
            input_show: true
          })
        }
      })
    }
  },

  //遮罩层隐藏
  hideInput(e) {
    this.setData({
      input_show: true
    })
  },
  showInput(e) {
    const that = this
    if (that.data.input_show) {
      that.setData({
        input_show: false
      })
    }
  }
})