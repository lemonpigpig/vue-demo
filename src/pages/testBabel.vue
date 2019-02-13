<template>
  <div class="babel">
    test babel dd
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  mounted () {
    debugger
    // var arr = [12, 23]
    // var ts = arr.includes(23)
    var as = 'stringddd'.includes(34)
    var aa = Array.from({
      a: 90
    })
    Object.assign({}, {a: 'p'})
    console.log(aa, as)
    alert(34)
  }
}
</script>
