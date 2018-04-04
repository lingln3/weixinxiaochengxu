// pages/forth/forth.js
var next_con = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'myTemplate',
    myObj:{
      key1:'value1'
    },
    myObj2:{
      key2:'value2',
      key3:'value3'
    },
    item:{
      index:0,
      msg:'this is a template',
      time:'2018-03-29'
    }
  },
  /**
   * 返回上一页back
   */
  back:function(){
    next_con.next('../second/second')
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