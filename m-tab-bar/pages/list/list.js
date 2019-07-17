// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    currentKey:'A',
    currentIndex: 0,
    listItemTops: []
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
    wx.request({
      url: "https://www.easy-mock.com/mock/5ceb8bac32cfe337f96fe748/example/car",
      success: (res) => {
        console.log(res)
        this.setData({
          list: res.data.data.items
        }, () => {
          const query = wx.createSelectorQuery();
          query.selectAll('.js-list-item').boundingClientRect((res) => {
            console.log(res)
            this.setData({
              listItemTops: res.map(item => item.top)
            })
          }).exec()
        })
      }
    })
  },
  handleScroll(e) {
    let scrollTop = e.detail.scrollTop
    let {listItemTops} = this.data
    for (let i = 0; i < listItemTops.length; i++) {
      if (scrollTop >= listItemTops[i]) {
        this.setData({
          currentIndex: i
        })
      }
    }

  },

  handleNav(e) {
    let {key} = e.currentTarget.dataset
    this.setData({
      currentKey: key
    })
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