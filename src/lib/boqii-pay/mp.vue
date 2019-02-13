<template>
  <div class="paylists" v-show="visible">
    <div v-for="(item, index) in paywayList" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paywayList: [{
        id: 1,
        name: '微信',
        icon: 'xxxx'
      }]
    }
  }
}
</script>
