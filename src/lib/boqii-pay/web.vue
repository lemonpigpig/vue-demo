<template>
  <div class="paylists">
    <div v-for="(item, index) in paywayList" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      paywayList: [{
        id: 1,
        name: '微信',
        icon: 'xxxx'
      }]
    }
  },
  methods: {
    checkUserAgent () {
      if (/MicroMessenger/.test(window.navigator.userAgent)) {
        alert('微信客户端')
      } else if (/AlipayClient/.test(window.navigator.userAgent)) {
        alert('支付宝客户端')
      } else {
        alert('其他浏览器')
      }
    }
  },
  mounted () {
    this.checkUserAgent()
  }
}
</script>
