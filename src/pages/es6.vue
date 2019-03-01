<template>
  <div>
    <h1>1. Symbol.iterator</h1>
    <div class="bg">test mixin bg</div>
    <div v-if="isShow">isshow: {{isShow}}</div>
    <!--<div v-show="isShow">i am control by v-show: {{isShow}}</div>-->
    <button @click="change">change</button>
  </div>
</template>

<style lang="scss" scoped>
    /*@import '@/assets/variable.scss';*/
    
    .bg {
        background: $bg;
        @include test(red);
    }
</style>

<script>
    export default {
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            change() {
                this.isShow = !this.isShow
            },
            way1() {
                var students = {}
                students[Symbol.iterator] = function() {
                    let index = 1
                    return {
                        next() {
                            return {
                                done: index > 10,
                                value: index++
                            }
                        }
                    }
                }

                for (var i of students) {
                    // i取得是value的值
                    console.log(i)
                }
            },
            way2() {
                // 利用generator yield语法糖
                console.log('-----我是利用generator yield语法糖实现for循环---------')
                var students = {}
                students[Symbol.iterator] = function*() {
                    for (var i = 0; i < 11; i++) {
                        yield i
                    }
                }
                for (var i of students) {
                    // i取得是value的值
                    console.log(i)
                }
            },
            way3() {
                let students = {
                        [Symbol.iterator]: function*() {
                            for (var i = 0; i <= 10; i++) {
                                yield i
                            }
                        }
                    }
                    // 所以generator返回的就是一个迭代器
                var iterator = students[Symbol.iterator]()
                var s = iterator.next()
                while (!s.done) {
                    console.log(s.value)
                    s = iterator.next()
                }
            }
        },
        destroyed() {
            alert('----destroyed----')
        },
        beforeCreate() {
            alert('---beforeCreate----')
        },
        created() {
            alert('----created----')
        },
        beforeMount() {
            alert('----beforeMount')
        },
        beforeUpdate() {
            alert('---beforeUpdate----')
        },
        updated() {
            alert('----updated----')
        },
        mounted() {
            alert('---mounted---')
            this.way1()
            this.way2()
        }
    }
</script>