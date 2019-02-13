<template>
  <div>
    <h1>
      利用node express lowdb mock get post delete put 真实的假数据 哈哈哈
    </h1>
    <h3>
      posts list show
    </h3>
    <ul>
      <li v-for="(item, index) in postsList" :key="index">
        <div>
          <span style="font-size:24px;color:red">title</span>: {{item.title}}
        </div>
        <div>
          <span style="font-size:24px;color:red">name</span>: {{item.name}}
        </div>
        <div>
          <input type="text" placeholder="点我修改名字" v-model="item.name">
          <input type="button" value="确定" @click="fupdatePostById(item.id, item.name)">
          <input type="button" value="删除" @click="fdelete(item.id)">
        </div>

      </li>
    </ul>
    <h3>
      get post item data by id: {{id}}
    </h3>
    <div>
      <input type="text" v-model="id" placeholder="请输入id的值">
      <input type="button" value="点击获取" @click="fgetPostById()">
      <div>
        the getted post item is {{postObj && JSON.stringify(postObj)}}
      </div>
    </div>
    <h3>
      随机添加post 项目
    </h3>
    <input type="button" value="add" @click="fadd">
  </div>
</template>
<style>
* {
  text-align: left;
}
</style>

<script>
  import httpService from '../service/httpService'
  import qs from 'qs';
  export default {
    data() {
      return {
        postsList: [],
        id: '',
        postObj: {}
      }
    },
    methods: {
      fgetPostList() {
        httpService.call({
          method: 'get',
          url: '/api/posts'
        }).then((result) => {
          this.postsList = result
        }).catch((err) => {
  
        });
      },
      fgetPostById() {
        httpService.call({
          method: 'get',
          url: '/api/posts/:id'
        }, {
          params: {
            id: this.id
          }
        }).then((result) => {
          this.postObj = result
          console.log('-----result----:', result)
        }).catch((err) => {
  
        });
      },
      fupdatePostById(id, name) {
        httpService.call({
          method: 'post',
          url: `/api/posts/update/${id}`
        }, {
          name: name
        }).then((result) => {
          this.postObj = result
          console.log('-----result----:', result)
        }).catch((err) => {
  
        });
        console.log('---id----', id)
      },
      fdelete(id) {
        httpService.call({
          method: 'delete',
          url: `/api/posts/:id`
        }, {
          params: {
            id
          }
        }).then((result) => {
          this.fgetPostList()
          console.log('-----fdelete----:', result)
        }).catch((err) => {
  
        });
      },
      fadd() {
        httpService.call({
          method: 'post',
          url: `/api/posts/add`
        }).then((result) => {
          this.fgetPostList()
          // this.postsList = result
          console.log('-----fadd----:', result, result.name)
        }).catch((err) => {
  
        });
        
      }
    },
    mounted() {
      this.fgetPostList()
    }
  }
</script>
