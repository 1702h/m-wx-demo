// pages/order/order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    categoryList: [],
    currentFoodList: [],
    ordered: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:8888/wx/day5/food',
      success:(res) => {
        console.log(res)
        if (res.data.code === 200) {
          let spuList =  res.data.data.categoryList[0].spuList
          this.setData({
            categoryList: res.data.data.categoryList,
            currentFoodList: spuList
          })
        }
      }
    })
  },

  handleNav(e) {
    let {index} = e.currentTarget.dataset
    let {categoryList} = this.data
    this.setData({
      currentIndex: index,
      currentFoodList: categoryList[index].spuList
    })
  },

  handleListItemSub(e) {
    let { item } = e.currentTarget.dataset
    let { currentIndex, ordered } = this.data
    console.log(item)
    if (ordered[item.spuId] && ordered[item.spuId].count > 0) {
      ordered[item.spuId].count = ordered[item.spuId].count - 1
    } else {
      ordered[item.spuId] = item
      ordered[item.spuId].count = 0
    }
    app.globalData.ordered = ordered
    this.setData({
      ordered
    })
  },

  handleListItemAdd(e) {
    let { item } = e.currentTarget.dataset
    let { currentIndex, ordered, categoryList} = this.data
    if (ordered[item.spuId]) {
      ordered[item.spuId].count = ordered[item.spuId].count + 1
      ordered[item.spuId].checked = true
    } else {
      ordered[item.spuId] = item
      ordered[item.spuId].count = 1
      ordered[item.spuId].checked = true
      ordered[item.spuId].categoryName = categoryList[currentIndex].categoryName
    }
    app.globalData.ordered = ordered
    this.setData({
      ordered
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