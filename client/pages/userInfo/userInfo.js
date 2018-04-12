// pages/userInfo/userInfo.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo : {},
    p1_show : true,
    p2_show : false
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/demo`,
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          userInfo: result.data.data
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
    console.log(this.data)
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
  
  },

  //进入编辑模式 
  to_infochange : function() {
    this.setData({
      p1_show :false,p2_show :true
    })
  },
  //del info item
  to_infodelete : function(e) {
    var info_id = e.currentTarget.dataset.id
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/info_del?id=${info_id}`,
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          userInfo: result.data.data, p1_show: true, p2_show: false
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },

  //add info item 
  to_infoadd : function (e) {
    var info_name= e.detail.value.add_name
    var info_value= e.detail.value.add_value
    console.log(info_name)

    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/info_add`,
      login: false,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: "POST",
      data: {"info_name":info_name,"info_value":info_value},
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          userInfo: result.data.data, p1_show: true, p2_show: false
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
    console.log(this.data)
  }

})