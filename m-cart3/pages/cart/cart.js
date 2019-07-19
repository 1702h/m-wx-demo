// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderedArr: [],
    totalCount: '',
    totalPrice: '',
    selectAll: true,
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
    console.log(app.globalData.ordered)
    let ordered = app.globalData.ordered
    let orderedArr = []
    for (let item in ordered) {
      if (ordered[item].count <= 1) {
        ordered[item].subBtnDistabled = true
      } else {
        ordered[item].subBtnDistabled = false
      }
      orderedArr.push(ordered[item])
    }
    console.log(orderedArr)
    this.setData({
      orderedArr
    })
    this.getPriceAndCount()
  },  

  getPriceAndCount() {
    let {orderedArr} = this.data
    let totalCount = 0
    let totalPrice = 0
    for (let i = 0; i < orderedArr.length; i++) {
      if (orderedArr[i].checked) {
        totalCount = totalCount + orderedArr[i].count
        totalPrice = totalPrice + orderedArr[i].count * orderedArr[i].currentPrice
      }
    }
    this.setData({
      totalCount,
      totalPrice
    })
  },

  handleChangeCheckbox(e) {
    console.log(e)
    let {value} = e.detail
    let {orderedArr} = this.data
    let checkedCount = 0
    for (let i = 0; i < orderedArr.length; i++) {
      if (value.indexOf(orderedArr[i].spuId + '') >= 0) {
        orderedArr[i].checked = true
        checkedCount = checkedCount + 1
      } else {
        orderedArr[i].checked = false
      }
    }
    this.setData({
      orderedArr,
      selectAll: orderedArr.length === checkedCount
    })
    this.getPriceAndCount()
  },

  handleSelectAll(e) {
    let { value } = e.detail
    let { orderedArr } = this.data
    if (value.length) {
      for (let i = 0; i < orderedArr.length; i++) {
        orderedArr[i].checked = true
      }      
    } else {
      for (let i = 0; i < orderedArr.length; i++) {
        orderedArr[i].checked = false
      }    
    }
    this.setData({
      orderedArr
    })
    this.getPriceAndCount()    
  },

  handleSub(e) {
    let { index } = e.currentTarget.dataset
    let { orderedArr } = this.data
    orderedArr[index].count = orderedArr[index].count - 1
    if (orderedArr[index].count <= 1) {
      orderedArr[index].subBtnDistabled = true
    } else {
      orderedArr[index].subBtnDistabled = false
    }
    this.setData({
      orderedArr
    })
    this.getPriceAndCount()
  },

  handleAdd(e) {
    let {index} = e.currentTarget.dataset
    let {orderedArr} = this.data
    orderedArr[index].count = orderedArr[index].count + 1
    orderedArr[index].subBtnDistabled = false
    this.setData({
      orderedArr
    })
    this.getPriceAndCount()
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