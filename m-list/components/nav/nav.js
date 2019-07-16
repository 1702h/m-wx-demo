// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndex: Number,
    navTitle: Array,
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
    handleNavClick(e) {
      console.log(e)
      let {tempIndex} = e.currentTarget.dataset
      this.triggerEvent('HandleNavClickFromComponent', {tempIndex})
    }
  }
})
