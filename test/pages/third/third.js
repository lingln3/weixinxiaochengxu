// pages/third/third.js
var app = getApp();
var myPrivateData = '局部变量';
var next_con = require('../../utils/api.js')
app.myGlobalData.name+='app';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    count_array:0,
    count_txt:0,
    count_obj:0,
    count_new:0,
    count:0,
    data:'改变文字',
    txt:'normal data',
    object:{
      subObject:{
        objectTxt:'object data'
      }
    },
    array:[
      {arrayTxt:'array data'}
    ]
  },
  /**
   * 改变文字函数changeText
   */
  changeText:function(event){
    console.log(event)
    var name = event.target.dataset.name;
    this.setData({
      text:name+':文字已经发生改变'
    });
  },
  /**
   * 改变显示文字函数change_msg
   */
  change_msg:function(){
    this.setData({
      count: this.data.count + 1
});
  },
  changeTxt:function(){
    this.setData({
      txt:'new normal data'+(++this.data.count_txt)
    });
  },
  changeObjectTxt:function(){
    this.setData({
      'object.subObject.objectTxt': 'new object data' + (++this.data.count_obj) + app.myGlobalData.name+myPrivateData
    });
  },
  changeArrayTxt:function(){
    this.setData({
      'array[0].arrayTxt': 'new array data' + ' ' + (++this.data.count_array)
    });
  },
  addNewData:function(){
    this.setData({
      'newField.newFieldTxt':'new fiew text'+' '+(++this.data.count_new)
    });
  },
  /**
   * nextForth下一页，跳转到第四页
   */
  nextForth:function(){
    // wx.navigateTo({
    //   url: '../forth/forth',
    // })
    next_con.next('../forth/forth')
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