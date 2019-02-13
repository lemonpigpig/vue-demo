<template>
  <div class="testDebounce">
    <div>test click</div>
  </div>
</template>
<style scoped>
.testDebounce {
  height: 20000px;
  background: pink;
}
</style>

<script>
let debounce = function(func, wait, immediate) {
  let context, args, result
  let timeout = null
  //上次代码执行的时间戳 单位ms
  let timestamp
  let later = function() {
    debugger
    // 计算自上次代码执行后，现在的等待状态
    let now = new Date().getTime() - timestamp
    let last = wait - now
    if (last < wait && last >= 0) {
      // 代码执行后的wait等待时间内状态,那么在此时间内多次触发肯定不执行
      // 这样做的目的是保证代码最终会被执行
      timeout = setTimeout(later, wait - last)
    } else {
      // 触发时间是代码执行过了wait ms后 再触发
      // 判断是否初始化有 immediate立即执行选项 有的话就不需要执行了
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) {
          context = args = null
        }
      }
    }
  }
  return function() {
    args = arguments
    context = this
    debugger
    timestamp = new Date().getTime()
    let canNow = immediate && !timeout
    if (canNow) {
      result = func.apply(context, args)
      context = args = null
    }
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    return result
  }
}
let test = function() {
  console.log('---test 1------')
}
export default {
  methods: {
    ftest() {
      debounce(test,)
    }
  },
  mounted() {
    document.addEventListener('scroll', debounce(test, 8000, true))
  }
}
</script>
