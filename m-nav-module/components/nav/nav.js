// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentId: Number,
    navTitle: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleNavClick2(e) {
      let {tempindex} =  e.currentTarget.dataset
      console.log(tempindex)
      this.triggerEvent('HandleNavClickFromComponent', {tempindex})
    }
  }
})
