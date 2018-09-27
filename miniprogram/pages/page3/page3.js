//初始化云平台
wx.cloud.init({
  //env: 'test-x1ldzi'
})
//获取云端数据库的引用
const db = wx.cloud.database({
  env: 'dictionary'
})
//获取云端集合的引用
const dictionary = db.collection('dictionary')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    key: '',
    uhide: false,
    list: [
      {
        id: 0,
        key: 'VBS',
        english: 'Nuclear Island Nonradioactive               Ventilation System',
        chinese: '核岛非放射性通风系统',
        hidden: false
      },
      {
        id: 1,
        key: 'VBS2',
        english: 'Nuclear Island Nonradioactive               Ventilation System',
        chinese: '核岛非放射性通风系统',
        hidden: false
      },
      {
        id: 2,
        key: 'VBS3',
        english: 'Nuclear Island Nonradioactive               Ventilation System',
        chinese: '核岛非放射性通风系统',
        hidden: false
      }
    ]

  },
  list_fun: function () {
    this.setData({
      list: data.list2
    })
  },
  /**
   * 点击显示和隐藏列表项
   */
  toggleBtn: function (event) {
    var that = this;
    //获取事件绑定的当前组件
    var index = event.currentTarget.dataset.index;
    //获取list中hidden的值
    //隐藏或显示内容
    that.data.list[index].hidden = !that.data.list[index].hidden;
    that.setData({
      list: that.data.list
    })
  },
  /**
   * 数据库处理
   */
  add: function () {
    console.log("数据库调用")
    const db = wx.cloud.database()
    db.collection('dictionary').add({
      data: {
        key: 'VBS',
        english: 'Nuclear Island Nonradioactive               Ventilation System',
        chinese: '核岛非放射性通风系统'
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          count: 1
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
      }
    )
  },
  /**
   * 删除记录
   */
  onRemove: function () {
    const db = wx.cloud.database()
    const _ = db.command
    // if (this.data.key) {
    if (1) {
      db.collection('dictionary').doc('W6G2UDPMTZMHGaJP').remove({
        success: res => {
          wx.showToast({
            title: '删除成功',
          })
          this.setData({
            counterId: '',
            count: null,
          })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '删除失败',
          })
          console.error('[数据库] [删除记录] 失败：', err)
        }
      })
    } else {
      wx.showToast({
        title: '无记录可删，请见创建一个记录',
      })
    }
  },
  /**
   * 查询记录
   */
  onFind: function () {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('dictionary').where({
      // _openid: this.data.openid
      key: 'CVS'
    }).get({
      success: res => {
        this.setData({
          queryResult: JSON.stringify(res.data, null, 2)
        })
        console.log('[数据库] [查询记录] 成功: ', res)
        for(var i = 0,len = res.data.length;i<len;i++){
            that.data.items[i] = res.data[i];           
        that.setData({
          items:res
        })
        }
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
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

