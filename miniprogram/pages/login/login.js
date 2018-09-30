// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputPswValue:'',//密码
    inputUserValue:'',//用户名
    wx_appId:'',//用户app_id
    _id:'',//用户id
  },
  /**
   * 登陆函数——用户名、密码匹配，同时上传open_id
   */
  login_btn: function(event){
    const db = wx.cloud.database();
    const col = db.collection('user_info');
    const _ =db.command;
    //查询数据库
   col.where({
      // name:this.data.inputUserValue,
      name: _.eq(this.data.inputUserValue),
      password: _.eq(this.data.inputPswValue)
      // id:'W6x0Ls9bC1ul1yxs'
      // key: "CVS"
      // password:this.data.inputPswValue,
    }).get({
        success: res=>{
          //如果查询结果为空，则表示无该用户，或用户密码错误
          if(res.data.length == 0){
            console.log('失败！！！！'),
              wx.showToast({
                title: '用户名或密码错误！',
              })
          }else{//查询成功
            console.log('成功！！！！')
            //获取记录ID值
            var id = res.data[0]._id;  
            this.setData({
              _id:id
            })    
            console.log(id);
            // 获取用户appid，并写入云端数据库
            //调用云函数，获取用户openid
            wx.cloud.callFunction({
              name: 'login',
              data: {
                _id:this.data._id
              },
              success: res => {
                //获取用户OPEN_ID
                getApp().globalData.openid = res.result.openid;
              },
              fail: err => {
                console.error('云函数login调用失败！'+err.errMsg)
              }
            })
            var app_id = getApp().globalData.openid;
      //       col.doc(id).update({
      //         data:{
      //           wx_appid:_.set(app_id)
      //         },
      //         success: function(res){
      //           console.log('成功')
      //           console.log(res.data)
      //         },
      //         fail: err => {
      //         icon: 'none',
      //         console.error('[数据库] [更新记录] 失败：', err)
      // }
      //       },)
          }
        }
    });
    /*
    var app_id = getApp().globalData.openid;
    col.doc(this.data._id).update({
      data: {
        wx_appid: _.set(app_id)
      },
      success: function (res) {
        console.log('成功')
        console.log(res.data)
      },
      fail: err => {
        icon: 'none',
          console.error('[数据库] [更新记录] 失败：', err)
      }
    }, )*/
  },
  /**
   * 获取输入的密码
   */
  bindPswInput: function (e) {
    this.setData({
      inputPswValue: e.detail.value
    })
  },
  /**
   * 获取输入的用户名
   */
  bindUserInput: function (e) {
    this.setData({
      inputUserValue: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})