Page({
  data: {
    imgUrls: [
      "/image/dish1.jpg",
      "/image/dish1.jpg",
      "/image/dish1.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detail: {
      name: '',
      price: '',
      intro: ''
    }
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '关闭成功',
      icon: 'success',
      duration: 2000
    });
  },
  immereset() {
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 2000
    });
  },
  immedelete() {
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000
    })
  },
  onLoad() {
    var self = this;

    wx.getStorage({
      key: 'detail',
      success: function (res) {
        self.setData({
          detail: res.data
        })
      }
    })
  },
  formSubmit() {
    var self = this;
    if (self.data.detail.name && self.data.detail.price && self.data.detail.intro) {
      wx.setStorage({
        key: 'detail',
        data: self.data.detail,
        success() {
          wx.navigateBack();
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整信息',
        showCancel: false
      })
    }
  },
  bindName(e) {
    this.setData({
      'detail.name': e.detail.value
    })
  },
  bindPhone(e) {
    this.setData({
      'detail.price': e.detail.value
    })
  },
  bindDetail(e) {
    this.setData({
      'detail.intro': e.detail.value
    })
  }
})