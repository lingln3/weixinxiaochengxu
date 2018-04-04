//index.js
//获取应用实例
const app = getApp()
var next_con = require('../../utils/api.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myPages:[
      {
        "id":1,
        "url":'../forth/forth'
      },
      {
        "id": 2,
        "url": '../second/second'
      },
      {
        "id": 3,
        "url": '../third/third'
      },
      {
        "id": 4,
        "url": '../forth/forth'
      },
      {
        "id": 5,
        "url": '../fifth/fifth'
      },
      {
        "id": 6,
        "url": '../logs/logs'
      }
    ],
    list: [
      {
        "id":1,
        "title": "第一个标题",
        "content": "第一个内容"
      },
      {
        "id":2,
        "title": "第二个标题",
        "content": "第二个内容"
      },
      {
        "id":3,
        "title": "第三个标题",
        "content": "第三个内容"
      }
    ]
  },
  readDetail: function (e) {
    var id = e.currentTarget.dataset.id; //打印可以看到，此处已获取到了对应的id
    console.log('新闻：'+id);
  },
 
  //页面跳转函数
  pages(e){
    //获取当前item的下表id，通过currentTarget.id
    //var id=e.currentTarget.id;
    var id=e.currentTarget.dataset.id;
    var url=e.currentTarget.dataset.url;
    console.log('第'+id+'页'+'          '+url);
    next_con.next(url);//页面跳转
   
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 下一页页面跳转
   */
  Next:function(){
    // wx.navigateTo({
    //   url: '../second/second',
    // })
   // next_con.next('../forth/forth')
    wx.redirectTo({
      url: '../forth/forth',
    })
  },
  /**
   * log跳转到日志页
   */
  Log:function(){
    console.log('日志页面');
    wx.switchTab({
      url: '../logs/logs',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  } ,
   clickMe: function () {
      this.setData({ msg: "你好啊" })
    }
})
