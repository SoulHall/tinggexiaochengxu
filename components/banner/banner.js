// components/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banners: {
      type:Array,
      value:[],
      observer(newVal,oldVal,changedPath){

      }
    }
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
    gotoPlayer(e) {
      wx.navigateTo({
        url: '/pages/player/player?songid=' + e.currentTarget.dataset.songid
      })
    },
  }
})
