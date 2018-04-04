// pages/fifth/fifth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'item-6'//第一次渲染时，<scroll_view>默认滚动到id值为“item-3”区域
  },

  scrollToUpper: function () {
    console.log('触发到滚动顶部事件');
  },
  scrollToLower: function () {
    console.log('触发滚动到底部事件');
  },
  scroll: function () {
    console.log('触发了滚动事件');
  },
  scrollToTop: function () {
    this.setData({
      scrollTop: '0'
    });
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