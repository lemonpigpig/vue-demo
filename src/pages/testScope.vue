
<template>
  <div class="parent">
    <Son/>

    <h3 id="menu-location">地理位置接口</h3>
    <span class="desc">使用微信内置地图查看位置接口</span>
    <button class="btn btn_primary" id="openLocation">openLocation</button>
    <span class="desc">获取地理位置接口</span>
    <button class="btn btn_primary" id="getLocation">getLocation</button>
  </div>
</template>

<style scoped>
  .parent {
    color: yellow
  }

  /**这样自组建都是可以影响父组件的**/

  .parent .son {
    color: blue;
  }

  /**这个是是深度拷贝选择器**/

  .parent>>>.son {
    color: blue;
  }
</style>

<script>
import Son from '@/components/son.vue'
let wx = window.wx

wx.config({
  debug: false,
  appId: 'wx841edaddbf22259c',
  timestamp: new Date().getTime(),
  nonceStr: 'fqB9N0NiLyMMZWJi',
  signature: '331befcefe0dc5c211964dff398a8c7ba7e305a5',
  jsApiList: [
    'checkJsApi',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone',
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'translateVoice',
    'startRecord',
    'stopRecord',
    'onVoiceRecordEnd',
    'playVoice',
    'onVoicePlayEnd',
    'pauseVoice',
    'stopVoice',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideOptionMenu',
    'showOptionMenu',
    'closeWindow',
    'scanQRCode',
    'chooseWXPay',
    'openProductSpecificView',
    'addCard',
    'chooseCard',
    'openCard'
  ]
})
wx.ready(() => {
  // 7 地理位置接口
  // 7.1 查看地理位置
  alert('www')
  document.querySelector('#openLocation').onclick = function () {
    wx.openLocation({
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'TIT 创意园',
      address: '广州市海珠区新港中路 397 号',
      scale: 14,
      infoUrl: 'http://weixin.qq.com'
    })
  }

  // 7.2 获取当前地理位置
  document.querySelector('#getLocation').onclick = function () {
    wx.getLocation({
      success: function (res) {
        alert(JSON.stringify(res))
      },
      cancel: function (res) {
        alert('用户拒绝授权获取地理位置')
      }
    })
  }
})
export default {
  components: {
    Son
  }
}
</script>
