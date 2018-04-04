// pages/second/second.js
var app = getApp();//获取应用实例
var start_time;
var end_time;
var next_con = require('../../utils/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:'拇指放在圆圈上\nReady?Go!',
    myArray:[
      {name:'value1'},
      {name:'value2'},
      {name: 'value3'}],
      myArray2:[
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]
  },
  push_start:function(event){
    start_time = new Date().getTime();
  },
  push_end:function(event){
    end_time = new Date().getTime();
    var dif_time_in_sec = (end_time-start_time)/1000.0;//ms转换为s
    var dif_time = Math.abs(dif_time_in_sec-1);//对求得的时间取绝对值
    var dif_ratio = new Number(dif_time*100).toFixed(2);
    var wording;
    if(0 <= dif_time && 0.05 > dif_time){
      wording = '太准时了，简直是天才！';
    }else if(dif_time >= 0.05 && dif_time <0.1){
      wording = '时间感不错！';
    }else if(dif_time >= 0.1 && dif_time <= 0.3){
      wording = '水平不错，不过可以再精确些！';
    } else if (dif_time >= 0.3 && dif_time <= 0.5){
      wording = '差强人意，继续努力！';
    } else if (dif_time >= 0.5 && dif_time <= 1){
      wording = '太差劲了，居然差这么多！';
    } else{
      wording = '无语了，差到爪哇岛了！';
    }
    var dif_time_sec = parseFloat(dif_time_in_sec);
    var wording_html = '你按出了'+dif_time_sec+'秒，误差是'+dif_ratio +'%\n';

    this.setData({
      result:wording_html
    });
  },
  /**
   * next下一页页面跳转函数
   */
  next:function(){
    // wx.navigateTo({
    //   url: '../third/third',
    // })
    next_con.next('../third/third')
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