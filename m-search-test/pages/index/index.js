// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:'',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleInput(e) {
    console.log(e)
    let {value} = e.detail
    this.setData({
      searchValue: value
    })
  },

  handleSearch() {
    let {searchValue} = this.data
    wx.request({
      url: 'https://jbiz.share1diantong.com/fa053/topic/search/v1',
      method: 'POST',
      data: {
        "kw": searchValue,
      },
      success: (res) => {
        console.log(res)
        this.setData({
          list: res.data.data.list
        })
        console.log(res.data.data.list)
      }
    });
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