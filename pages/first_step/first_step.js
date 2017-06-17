// first_step.js
let app = getApp()

Page({

  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    circular: true,
    current_index: 0,

    //种类选择控制
    category: -1,

    //性别控制
    sex_control: -1,

    //绝育控制
    bear_control: -1,
    pets: [],
    kinds: [],
    kind: [
      {
        EnglishName: 'others',
        img: '/images/others.png',
        Name: '其他',
        id: 0
      }
    ],
    sex: [
      {
        name: 'boy',
        src: '/images/first_page/boy.png',
        zn: '大汉子',
        check: false,
        unique: 0
      },
      {
        name: 'girl',
        src: '/images/first_page/girl.png',
        zn: '软妹子',
        check: false,
        unique: 1
      }],
    bear: [
      {
        name: 'cut',
        src: '/images/first_page/no.png',
        src_yes: '/images/first_page/yes.png',
        zn: '已绝育',
        check: false,
        unique: 0
      },
      {
        name: 'nocut',
        src: '/images/first_page/no.png',
        src_yes: '/images/first_page/yes.png',
        zn: '未绝育',
        check: false,
        unique: 1
      }],
    today: app.globalData.today,
    birthday: '请输入爱宠的生日',

    //存放用户宠物信息，用于上传
    pet_info: {},

    //输入要用的所有数据
    flag: {
      head_flag: true,
      species_hide: false
    },
    img: {
      head_img: '',
      weight_img: '/images/first_page/weight.png',
      species_img: ''
    },
    input: {
      species_input: '请选择爱宠品种',
      weight_input: null
    },

    //数据校验
    data_check: []
  },
  onLoad(options) {

  },
  onShow() {
    const that = this
    for (let i = 0; i < 7; i++) {
      let data_check = 'data_check[' + i + '].flag'
      that.setData({
        [data_check]: false
      })
    }
    wx.request({
      url: app.globalData.host + 'categorys',
      success: res => {
        that.setData({
          pets: res.data.data
        })
      }
    })
  },

  //第一页函数
  chooseCategory(e) {
    const that = this
    const id = e.currentTarget.id
    if (that.data.category == id) {
      that.setData({
        current_index: 1
      })
    } else {
      that.setData({
        category: id,
        'pet_info.category': e.currentTarget.dataset.category,
        'data_check[0].flag': true,
        kinds: [...that.data.pets[id].kinds, ...that.data.kind],
        current_index: 1
      })
    }
  },
  //第二页函数
  //预览种类函数
  getOtherSpecies(e) {
    if (e.detail.value) {
      this.setData({
        'pet_info.kindname': e.detail.value,
        'data_check[1].flag': true,
      })
    } else {
      this.setData({
        'data_check[1].flag': false,
      })
    }
  },
  chooseSpecies(e) {
    const that = this
    if (e.currentTarget.dataset.species_name == 0) {
      that.setData({
        'flag.species_hide': true,
        'img.species_img': e.currentTarget.dataset.species_img,
        'pet_info.species': e.currentTarget.dataset.species_name,
        'pet_info.kind': 0
      })
    } else {
      that.setData({
        'flag.species_hide': false,
        'img.species_img': e.currentTarget.dataset.species_img,
        'input.species_input': e.currentTarget.dataset.species_zn,
        'pet_info.kind': e.currentTarget.dataset.species_name,
        'pet_info.kindname': e.currentTarget.dataset.species_zn,
        'data_check[1].flag': true,
      })
    }
  },

  //确认品种
  addSpecies(e) {
    this.setData({
      current_index: 2
    })
  },

  //第三页面函数
  //预览、上传图片
  chooseHead(e) {
    const that = this
    wx.chooseImage({
      count: 1,
      success: res => {
        wx.uploadFile({
          url: app.globalData.host + 'upload',
          filePath: res.tempFilePaths[0],
          name: 'image',
          success: res => {
            let json = JSON.parse(res.data)
            that.setData({
              'pet_info.imgUrl': json.baseurl
            })
          }
        })
        that.setData({
          'img.head_img': res.tempFilePaths,
          'flag.head_flag': false
        })
      },
    })
  },
  getHeadInput(e) {
    if (e.detail.value) {
      this.setData({
        'pet_info.name': e.detail.value,
        'data_check[2].flag': true,
      })
    } else {
      this.setData({
        'data_check[2].flag': false
      })
    }
  },
  //昵称检测
  addPetName(e) {
    const that = this
    if (!that.data.pet_info.name) {
      wx.showModal({
        title: '提示',
        content: '亲，请输入爱宠昵称先哦~',
        showCancel: false
      })
    } else {
      that.setData({
        current_index: 3
      })
    }
  },

  //第四页函数
  //动态获取选择的日期
  chooseBirthday(e) {
    const that = this
    if (e.detail.value) {
      this.setData({
        birthday: e.detail.value,
        'pet_info.birthday': e.detail.value,
        'data_check[3].flag': true,
      })
    }
  },
  addPetBirthday(e) {
    this.setData({
      current_index: 4
    })
  },

  //第五页函数
  //性别获取
  chooseSex(e) {
    const that = this
    const id = e.currentTarget.id
    if (that.data.sex_control == e.currentTarget.id) {
      that.setData({
        current_index: 5
      })
    } else {
      that.setData({
        sex_control: id,
        'pet_info.sex': id,
        'data_check[4].flag': true,
        current_index: 5
      })
    }
  },

  //第六页函数
  //绝育
  chooseBear(e) {
    const that = this
    const id = e.currentTarget.id
    if (that.data.bear_control == id) {
      that.setData({
        current_index: 6
      })
    } else {
      that.setData({
        bear_control: id,
        'pet_info.sterilization': id,
        'data_check[5].flag': true,
        current_index: 6
      })
    }
  },

  //第七页函数
  //体重
  getWeightInput(e) {
    const that = this
    if (e.detail.value) {
      that.setData({
        'input.weight_input': e.detail.value,
        'pet_info.weight': e.detail.value,
        'data_check[6].flag': true,
      })
    } else {
      that.setData({
        'data_check[6].flag': false,
      })
    }
  },

  // 提交
  submit(e) {
    let flag = true
    const that = this
    let data_check = that.data.data_check
    //跳转
    let url = ''
    if (app.globalData.pets.length > 0) {
      url = '/pages/mine/mine'
    } else {
      url = '/pages/index/index'
    }

    //数据校验
    for (let i in data_check) {
      if (!data_check[i].flag) {
        flag = false
        wx.showModal({
          title: '提示',
          content: '您还有信息没有填写哦~',
          showCancel: false,
          success: res => {
            if (res.confirm) {
              that.setData({
                current_index: i
              })
            }
          }
        })
        break
      }
    }

    //宠物信息保存
    if (flag) {
      // let temp = []
      // let pet = that.data.pet_info
      // const length = app.globalData.pets.length
      // app.globalData.pets = [...[pet], ...app.globalData.pets]
      wx.request({
        url: app.globalData.host + 'pet/add',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': app.globalData.LaravelID
        },
        data: that.data.pet_info,
        success: res => {
          wx.showToast({
            title: '录入完成',
            complete: () => {
              wx.switchTab({
                url: url
              })
            }
          })
        }
      })
    }
  }
})