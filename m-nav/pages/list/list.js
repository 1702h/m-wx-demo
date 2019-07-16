// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: 0,
    navTitle: [],
    navData: [],
    currentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://192.168.2.196:8888/nav.json',
      success:(res) => {
        console.log(res)
        this.setData({
          navTitle: res.data.navtitle,
          navData: res.data.navdata,
          currentList: res.data.navdata[0].content
        })
      }
    })
  },
  handleNavClick(e) {
    console.log(e)
    let { tempindex } = e.currentTarget.dataset
    this.setData({
      currentId: tempindex,
      currentList: this.data.navData[tempindex].content
    })
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