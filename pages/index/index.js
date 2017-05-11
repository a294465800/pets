//index.js
//获取应用实例
Page({
  data: {
    scroll_id: 0,
    nav_id: 0,
    nav_head: [{
      name: '今日安排',
      id: 0
    }, {
      name: '成长记录',
      id: 1
    }, {
      name: '问答广场',
      id: 2
    }],
    daily_plan: [
      {
        daily_plan_head: '喂食',
        daily_plan_content: '2餐，400g干粮即可',
        daily_plan_punch: false
      },
      {
        daily_plan_head: '遛狗',
        daily_plan_content: '陪狗狗出外面耍耍',
        daily_plan_punch: false
      },
      {
        daily_plan_head: '洗澡',
        daily_plan_content: '狗狗要洗澡了哟',
        daily_plan_punch: false
      },
      {
        daily_plan_head: '驱虫',
        daily_plan_content: '今天狗狗要驱虫了哟',
        daily_plan_punch: false
      },
      {
        daily_plan_head: '喂药',
        daily_plan_content: '有没有准时给狗狗敷药呀',
        daily_plan_punch: false
      },
      {
        daily_plan_head: '疫苗',
        daily_plan_content: '需要打疫苗第三针咯',
        daily_plan_punch: false
      }
    ],
    manager_remaid: [
      {
        title: '注射疫苗',
        R_time: 1
      }, {
        title: '剪指甲',
        R_time: 2
      }, {
        title: '吃药',
        R_time: 2
      }, {
        title: '玩',
        R_time: 2
      }
    ],
    managerShow: false,
    experience: [
      {
        title: '春季感冒高发期',
        R_time: 2
      },
      {
        title: '换毛期',
        R_time: 1
      },
      {
        title: '游泳',
        R_time: 1
      },
      {
        title: '飞',
        R_time: 1
      }
    ],
    experienceShow: false,
    daily_knowledge: {
      title: '这只狗狗因为表情太拽而被人嫌弃，被人嫌弃，被人嫌弃，被人嫌弃',
      tags: ['可爱','认真','呆萌'],
      add_time: '04-12',
      comment: 560,
      read: 999,
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494497805444&di=d53add15ca64b8d47258ffe17b39b48c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F77%2Fd%2F68.jpg'
    },
    daily_shop: {
      title: '小鲜粮肉卷10KG 5条装',
      price: '36.00',
      intro: '满足主粮需求 每日提供2000大卡能量 \n 搭配每天1500ml水健康成长',
      src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3352940552,2713165205&fm=23&gp=0.jpg'
    }
  },
  onLoad: function () {
  },
  goToFirst: function () {
    wx.redirectTo({
      url: '/pages/first_step/first_step',
    })
  },

  //改变导航样式
  changePart: function (e) {
    this.setData({
      nav_id: e.target.id,
      scroll_id: e.target.id
    })
  },

  //打卡
  daily_plan_punch: function (e) {
    let id = Number(e.target.id)
    let temp = 'daily_plan[' + id + '].daily_plan_punch';
    this.setData({
      [temp]: 'true'
    })
  },

  //展示管家提醒列表
  managerShow: function (e) {
    this.setData({
      managerShow: !e.currentTarget.dataset.show
    })
  },

  //展示经历列表
  experienceShow : function(e){
    this.setData({
      experienceShow: !e.currentTarget.dataset.show
    })
  }
})
