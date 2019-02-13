<template>
  <div class="promise-test">

  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    test1() {
      let p1 = function() {
        return Promise.resolve(234)
      }
      p1().then((result) => {
        console.log('---result------:', result)
      }).catch((err) => {
        
      });
    },
    test2() {},
    init(type) {
      if  (type == 1) {
        this.test1()
      } else if (type == 2) {
        this.test2()
      }
    }
  },
  mounted() {
    const { type } = this.$route.query|| 1
    this.init(type)

    
  }
}
</script>
