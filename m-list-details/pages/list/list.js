// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    limit: 10,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  getData() {
    let {page,limit} = this.data
    wx.request({
      url: 'http://localhost:8888/wx/day4/list',
      data: {
        page,
        limit
      },
      success: (res) => {
        console.log(res)
        let {list} = this.data
        list = list.concat(res.data.data)
        this.setData({
          list
        })
      }
    })
  },

  handleScrollToEnd(e) {
    console.log(e)
    let {page} = this.data
    page = page + 1
    this.setData({
      page
    }, () => {
      this.getData()
    })
    
  },

  handleDetail(e) {
    let { id } = e.currentTarget.dataset
    console.log(id)
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`
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