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
    formatOrderedArr: []
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
    let ordered = app.globalData.ordered
    let orderedArr = []
    for (let item in ordered) {
      if (ordered[item].count <= 1) {
        ordered[item].subBtnDisabled = true
      } else {
        ordered[item].subBtnDisabled = false
      }
      orderedArr.push(ordered[item])
    }    
    this.setData({
      orderedArr
    })
    console.log(orderedArr)
    this.formatData(orderedArr)
    this.priceAndCount()
  },

  formatData(orderedArr) {
    let formatOrderedArr = []
    for (let i = 0; i < orderedArr.length; i++) {
      let isAdded = false
      for (let j = 0; j < formatOrderedArr.length; j++) {
        if  (formatOrderedArr[j].categoryName === orderedArr[i].categoryName) {
          isAdded = true
        }
      }
      if (!isAdded) {
        let temp = {
          categoryName: orderedArr[i].categoryName,
          checked: true,
          list: []
        }
        for (let j = 0; j < orderedArr.length; j++) {
          if (orderedArr[j].categoryName === temp.categoryName) {
            temp.list.push(orderedArr[j])
          }
        }
        temp.index = formatOrderedArr.length
        formatOrderedArr.push(temp)
      }
    }
    this.setData({
      formatOrderedArr
    })
    console.log(formatOrderedArr)
  },

  handleSelectShop(e) {
    let { value } = e.detail
    let {index} = e.currentTarget.dataset
    let {formatOrderedArr} = this.data
    let checked = false
    if (value.length > 0) {
      checked = true
    }
    formatOrderedArr[index].checked = checked
    for (let i = 0; i < formatOrderedArr[index].list.length; i++) {
      formatOrderedArr[index].list[i].checked = checked
    }
    let shopCheckedCount = 0
    for (let i = 0; i < formatOrderedArr.length; i++) {
      if (formatOrderedArr[i].checked) {
        shopCheckedCount = shopCheckedCount + 1
      }
    }    
    this.setData({
      formatOrderedArr,
      selectAll: shopCheckedCount === formatOrderedArr.length
    })
    this.priceAndCount()
  },

  priceAndCount() {
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

  handleCheckboxChange(e) {
    let {value} = e.detail
    let { index } = e.currentTarget.dataset
    let {formatOrderedArr} = this.data
    for (let i = 0; i < formatOrderedArr[index].list.length; i++) {
      if (value.indexOf(formatOrderedArr[index].list[i].spuId + '') >= 0) {
        formatOrderedArr[index].list[i].checked = true
      } else {
        formatOrderedArr[index].list[i].checked = false
      }
    }
    formatOrderedArr[index].checked = value.length === formatOrderedArr[index].list.length
    let shopCheckedCount = 0
    for (let i = 0; i < formatOrderedArr.length; i++) {
      if (formatOrderedArr[i].checked) {
        shopCheckedCount = shopCheckedCount + 1
      }
    }
    this.setData({
      formatOrderedArr,
      selectAll: shopCheckedCount === formatOrderedArr.length
    })
    this.priceAndCount()
  },

  handleSelectAll(e) {
    let { value } = e.detail
    let { formatOrderedArr } = this.data
    let checkedCount = 0
    for (let i = 0; i < formatOrderedArr.length; i++) {
      if (value.length > 0) {
        formatOrderedArr[i].checked = true
        checkedCount = checkedCount + 1
        for (let j = 0; j < formatOrderedArr[i].list.length; j++) {
          formatOrderedArr[i].list[j].checked = true
        }
      } else {
        formatOrderedArr[i].checked = false
        for (let j = 0; j < formatOrderedArr[i].list.length; j++) {
          formatOrderedArr[i].list[j].checked = false
        }        
      }
    }
    this.setData({
      formatOrderedArr,
      selectAll: checkedCount === formatOrderedArr.length
    })    
    this.priceAndCount()
  },

  handleSub(e) {
    let { index, shopItemIndex } = e.currentTarget.dataset
    let { formatOrderedArr } = this.data

    formatOrderedArr[shopItemIndex].list[index].count = formatOrderedArr[shopItemIndex].list[index].count - 1
    if (formatOrderedArr[shopItemIndex].list[index].count <= 1) {
      formatOrderedArr[shopItemIndex].list[index].subBtnDisabled = true
    } else {
      formatOrderedArr[shopItemIndex].list[index].subBtnDisabled = false
    }    
    this.setData({
      formatOrderedArr
    })
    this.priceAndCount()
  },

  handleAdd(e) {
    let {index, shopItemIndex} = e.currentTarget.dataset
    let {formatOrderedArr} = this.data
    formatOrderedArr[shopItemIndex].list[index].count = formatOrderedArr[shopItemIndex].list[index].count + 1
    formatOrderedArr[shopItemIndex].list[index].subBtnDisabled = false
    this.setData({
      formatOrderedArr
    })
    this.priceAndCount()
  },

  handleBuy() {
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { 
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
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