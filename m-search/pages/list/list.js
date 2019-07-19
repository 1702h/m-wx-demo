Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    searchValue: '',
    searchResult: [],
    list: [],
  },
  handleInputChange(e) {
    let {value} = e.detail
    this.setData({
      searchValue: value
    })
  },
  handleSearchBtn() {
    let {searchValue} = this.data
    // wx.request({
    //   url: 'https://jbiz.share1diantong.com/fa053/search/associateKw',
    //   method: 'post',
    //   data: {
    //     kw: searchValue
    //   },
    //   success: (res) => {
    //     this.setData({
    //       searchResult: res.data.data.output.kwRes
    //     });
    //     console.log(res)
    //   }
    // })    


    wx.request({
      url: 'https://jbiz.share1diantong.com/fa053/topic/search/v1',
      method: 'POST',
      data: {
        "pageNum": 1,
        "kw": searchValue,
        "pageSize": 10,
        "userId": 0
      },
      success: (res) => {
        console.log(res)
        this.setData({
          list: res.data.data.list
        })
        console.log(res.data.data.list)
      }
    })    
  }
})