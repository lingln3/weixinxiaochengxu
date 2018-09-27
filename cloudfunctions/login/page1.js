wx.cloud.init({
  env: 'test-x1ldzi'
})
//获取云端数据库的引用
const db = wx.cloud.database()
//获取云端集合的引用
const dictionary = db.collection('dictionary')
//向集合中插入一条记录
dictionary.add({
  //data字段表示需要新增的JSON数据
  data:{
    key:"VBS",
    english:"Nuclear Island Nonradioactive Ventilation System",
    chinese:"核岛非放射性通风系统"
  },
  success: function(res){
    //res是一个对象，其中有_id字段标记刚创建的记录的id
    console.log(res)
  }
})
Page({
  next: function(){
    
  }
})