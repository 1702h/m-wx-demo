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
      url: 'http://192.168.2.196:8888/wx/list',
      method: 'get',
      success:(res) => {
        console.log(res)
        if (res.data.code === 200) {
          let data = res.data.data
          this.setData({
            navTitle: data.navtitle,
            navData: data.navdata,
            currentList: data.navdata[0].content
          })
        }
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
  handleNavClickFromComponent(data) {
    let { tempindex } = data.detail
    console.log(tempindex)
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