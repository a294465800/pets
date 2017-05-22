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
        zn: "狗狗"
      },
      {
        category: "cat",
        src: '/images/first_page/cats.png',
        check: false,
        zn: "猫咪"
      }
    ],
    species: [{
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基2'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基3'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基4'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基5'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基6'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基7'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基8'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基9'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基10'
    }, {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基11'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基12'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基2'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基3'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基4'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基5'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基6'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基7'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基8'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基9'
    },
    {
      name: 'keji',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495452683874&di=bfb6f78d040d057a9facb059e41eb9f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201505%2F21%2F20150521021137_N5kde.jpeg',
      zn: '柯基10'
    },
    {
      name: 'others',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495459044542&di=71efa09c9056339e1e498750198bec19&imgtype=0&src=http%3A%2F%2Fcdn4.freepik.com%2Fimage%2Fth%2F426288.jpg',
      zn: '其他'
    }],
    sex: [{
      name: 'boy',
      src: '/images/first_page/boy.png',
      zn: '大汉子',
      check: false
    },
    {
      name: 'girl',
      src: '/images/first_page/girl.png',
      zn: '软妹子',
      check: false
    }],
    bear: [{
      name: 'cut',
      src: '/images/first_page/no.png',
      src_yes: '/images/first_page/yes.png',
      zn: '已绝育',
      check: false
    },
    {
      name: 'nocut',
      src: '/images/first_page/no.png',
      src_yes: '/images/first_page/yes.png',
      zn: '未绝育',
      check: false
    }],
    today: app.globalData.today,
    birthday: '请输入爱宠的生日',

    // //进度条
    // species_scroll: '',

    //存放用户宠物信息，用于上传
    pet_info: {
      category: '',
      img: '',
      species: '',
      species_other: '',
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
      head_input: '',
      species_input: '请选择爱宠品种',
      species_other: '',
      species_name: null,
      weight_input: null
    }
  },
  onLoad: function (options) {

  },

  //第一页函数
  chooseCategory: function (e) {
    let that = this
    let pet_pets = 'pets[' + e.target.id + '].check'
    if (that.data.pets[e.target.id].check) {
    } else {
      that.setData({
        'pets[0].check': false,
        'pets[1].check': false,
      })
      that.setData({
        [pet_pets]: true,
        'pet_info.category': e.currentTarget.dataset.category,
        current_index: 1
      })
    }
  },
  //第二页函数
  //预览种类函数
  getOtherSpecies: function(e){
    this.setData({
      'input.species_other': e.detail.value
    })
  },
  chooseSpecies: function (e) {
    let that = this
    if (e.currentTarget.dataset.species_name == 'others') {
      that.setData({
        'flag.species_hide': true,
        'img.species_img': e.currentTarget.dataset.species_img,
        'input.species_name': e.currentTarget.dataset.species_name
      })
    } else {
      that.setData({
        'flag.species_hide': false,
        'img.species_img': e.currentTarget.dataset.species_img,
        'input.species_input': e.currentTarget.dataset.species_zn,
        'input.species_name': e.currentTarget.dataset.species_name
      })
    }

  },

  // //滚动检测
  // species_scroll: function(e){
  //   let left = e.detail.scrollLeft
  //   this.setData({
  //     species_scroll: left + 'px'
  //   })
  //   console.log(left)
  // },
  //确认品种
  addSpecies: function (e) {
    let that = this
    that.setData({
      'pet_info.species': that.data.input.species_name,
      'pet_info.species_other': that.data.input.species_other,
      current_index: 2
    })
    console.log(that.data.pet_info)
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
    this.setData({
      'input.head_input': e.detail.value
    })
  },
  //昵称检测
  addPetName: function (e) {
    let that = this
    if (!that.data.input.head_input) {
      wx.showModal({
        title: '提示',
        content: '亲，请输入爱宠昵称先哦~',
        showCancel: false
      })
    } else {
      that.setData({
        'pet_info.name': that.data.input.head_input,
        current_index: 3
      })
      console.log(that.data.pet_info.name)
    }
  },

  //第四页函数
  //动态获取选择的日期
  chooseBirthday: function (e) {
    let that = this
    this.setData({
      birthday: e.detail.value,
      'pet_info.birthday': e.detail.value
    })
  },
  addPetBirthday: function (e) {
    this.setData({
      current_index: 4
    })
  },

  //第五页函数
  //性别获取
  chooseSex: function (e) {
    console.log(e)
    let that = this
    let pet_sex = 'sex[' + e.target.id + '].check'
    if (that.data.sex[e.target.id].check) {
    } else {
      that.setData({
        'sex[0].check': false,
        'sex[1].check': false,
      })
      that.setData({
        [pet_sex]: true,
        'pet_info.sex': e.currentTarget.dataset.sex,
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
    } else {
      that.setData({
        'bear[0].check': false,
        'bear[1].check': false,
      })
      that.setData({
        [pet_bear]: true,
        'pet_info.bear': e.currentTarget.dataset.bear,
        current_index: 6
      })
    }
  },

  //第七页函数
  //体重
  getWeightInput: function (e) {
    let that = this
    that.setData({
      'input.weight_input': e.detail.value,
      'pet_info.weight': e.detail.value,
    })
  },

  // 提交
  submit: function (e) {
    let that = this
    // wx.uploadFile({
    //   url: '',
    //   filePath: that.data.pet_info.img,
    //   name: 'test',
    // })
    wx.request({
      url: '',
      method: 'POST',
      data: that.data.pet_info,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('ok');
      },
      fail: function () {
        console.log('fail');
      }
    })
  }
})