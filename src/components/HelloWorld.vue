<template>
  <div class="hello">
    <div class="testflex" @click="fmodal">
      <span class="flex">flex1 </span>
      <span class="flex">flex2 </span>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="vertical">
      你好呀
    </div>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import httpService from '../service/httpService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    fmodal () {
      this.$modal({
        template: {
          render (h) {
            return h('div', 'lalalal')
          }
        }
      })
    },
    fgetApi() {
      httpService.call({
        method: 'get',
        url: '/api/posts/:id'
      },{
        params: {
          id: 1
        }
      })
    }
  },
  mounted() {
    this.fgetApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vertical {
  background: url('/static/gift.png') no-repeat left center;
  text-align: left;
  padding-left: 40px;
}
.testflex {
  display: flex;
  align-content: center;
  justify-content: center;
  justify-content: space-around;
}
.flex {
  flex: 1;
  display: block;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
