/**next下一页跳转函数 */
function next(address) {
  wx.navigateTo({
    url: address,
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
}
module.exports = {
  next: next
}