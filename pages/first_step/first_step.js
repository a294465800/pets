// first_step.js
var app = getApp()

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
    pets: [
      {
        category: "dog",
        src: '/images/first_page/dogs.png',
        check: false,
        zn: "狗狗",
        unique: 0
      },
      {
        category: "cat",
        src: '/images/first_page/cats.png',
        check: false,
        zn: "猫咪",
        unique: 1
      }
    ],
    species: [{
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基',
      unique: 0
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基2',
      unique: 1
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基3',
      unique: 2
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基4',
      unique: 3
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基5',
      unique: 4
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基6',
      unique: 5
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基7',
      unique: 6
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基8',
      unique: 7
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基9',
      unique: 8
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基10',
      unique: 9
    }, {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基11',
      unique: 10
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基12',
      unique: 11
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基',
      unique: 12
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基2',
      unique: 13
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基3',
      unique: 14
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基4',
      unique: 15
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基5',
      unique: 16
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基6',
      unique: 17
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基7',
      unique: 18
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基8',
      unique: 19
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基9',
      unique: 20
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基10',
      unique: 21
    },
    {
      name: 'others',
      src: '/images/others.png',
      zn: '其他',
      unique: 22
    }],
    sex: [{
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
    bear: [{
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
    pet_info: {
      category: '',
      img: '',
      species: '',
      species_zn: '',
      name: '',
      birthday: '',
      sex: '',
      bear: '',
      weight: null
    },

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
  onLoad: function (options) {

  },
  onShow: function () {
    let that = this
    for (let i = 0; i < 7; i++) {
      let data_check = 'data_check[' + i + '].flag'
      that.setData({
        [data_check]: false
      })
    }
  },

  //第一页函数
  chooseCategory: function (e) {
    let that = this
    console.log(e)
    let pet_pets = 'pets[' + e.currentTarget.id + '].check'
    if (that.data.pets[e.currentTarget.id].check) {
      that.setData({
        current_index: 1
      })
    } else {
      that.setData({
        'pets[0].check': false,
        'pets[1].check': false,
      })
      that.setData({
        [pet_pets]: true,
        'pet_info.category': e.currentTarget.dataset.category,
        'data_check[0].flag': true,
        current_index: 1
      })
    }
  },
  //第二页函数
  //预览种类函数
  getOtherSpecies: function (e) {
    if (e.detail.value) {
      this.setData({
        'pet_info.species_zn': e.detail.value,
        'data_check[1].flag': true,
      })
    } else {
      this.setData({
        'data_check[1].flag': false,
      })
    }
  },
  chooseSpecies: function (e) {
    let that = this
    if (e.currentTarget.dataset.species_name == 'others') {
      that.setData({
        'flag.species_hide': true,
        'img.species_img': e.currentTarget.dataset.species_img,
        'pet_info.species': e.currentTarget.dataset.species_name
      })
    } else {
      that.setData({
        'flag.species_hide': false,
        'img.species_img': e.currentTarget.dataset.species_img,
        'input.species_input': e.currentTarget.dataset.species_zn,
        'pet_info.species': e.currentTarget.dataset.species_name,
        'pet_info.species_zn': e.currentTarget.dataset.species_zn,
        'data_check[1].flag': true,
      })
    }

  },

  //确认品种
  addSpecies: function (e) {
    this.setData({
      current_index: 2
    })
  },

  //第三页面函数
  //预览、上传图片
  chooseHead: function (e) {
    let that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.setData({
          'pet_info.img': res.tempFilePaths,
          'img.head_img': res.tempFilePaths,
          'flag.head_flag': false
        })
      },
    })
  },
  getHeadInput: function (e) {
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
  addPetName: function (e) {
    let that = this
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
  chooseBirthday: function (e) {
    let that = this
    if (e.detail.value) {
      this.setData({
        birthday: e.detail.value,
        'pet_info.birthday': e.detail.value,
        'data_check[3].flag': true,
      })
    }
  },
  addPetBirthday: function (e) {
    this.setData({
      current_index: 4
    })
  },

  //第五页函数
  //性别获取
  chooseSex: function (e) {
    let that = this
    let pet_sex = 'sex[' + e.currentTarget.id + '].check'
    if (that.data.sex[e.currentTarget.id].check) {
      that.setData({
        current_index: 5
      })
    } else {
      that.setData({
        'sex[0].check': false,
        'sex[1].check': false,
      })
      that.setData({
        [pet_sex]: true,
        'pet_info.sex': e.currentTarget.dataset.sex,
        'data_check[4].flag': true,
        current_index: 5
      })
    }
  },

  //第六页函数
  //绝育
  chooseBear: function (e) {
    let that = this
    let pet_bear = 'bear[' + e.target.id + '].check'
    if (that.data.bear[e.target.id].check) {
      that.setData({
        current_index: 6
      })
    } else {
      that.setData({
        'bear[0].check': false,
        'bear[1].check': false,
      })
      that.setData({
        [pet_bear]: true,
        'pet_info.bear': e.currentTarget.dataset.bear,
        'data_check[5].flag': true,
        current_index: 6
      })
    }
  },

  //第七页函数
  //体重
  getWeightInput: function (e) {
    let that = this
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
  submit: function (e) {
    let flag = true
    let that = this
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
          success: function (res) {
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
      let temp = []
      let pet = that.data.pet_info
      const length = app.globalData.pets.length
      pet.unique = length
      temp = [pet].concat(app.globalData.pets)
      app.globalData.pets = temp
      console.log(app.globalData.pets)
      wx.request({
        url: 'https://www.sennki.com/api/test',
        method: 'post',
        data: that.data.pet_info,
        success: function (res) {
          wx.switchTab({
            url: url
          })
        }
      })
    }
  }
})