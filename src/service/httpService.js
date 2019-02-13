/**
 * @description ajax
 * @author flower.cheng
 */
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

function delEmpty(input) {
  let str = {}
  const parakeys = Object.keys(input)
  for (let i = 0; i < parakeys.length; i++) {
    if (
      (input[parakeys[i]] != '' && input[parakeys[i]] != undefined) ||
      input[parakeys[i]] === 0 ||
      input[parakeys[i]] === false
    ) {
      str[parakeys[i]] = input[parakeys[i]]
    }
  }
  return str
}

class HttpService {
  constructor() {
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  call(apiconfig, data = {}) {
    let pathParams = data.params || ''
    let initPar = {}
    let url = apiconfig.url || ''
    let method = apiconfig.method
    let isSelfHandler = false
    if (data.isSelf) {
      isSelfHandler = data.isSelf
      delete data.isSelf
    }
    if (!method) {
      console.error('请求缺少url 或者method,请求出错！！！！')
    }
    if (pathParams) {
      Object.keys(pathParams).forEach(key => {
        if (url.indexOf(':' + key) > -1) {
          url = url.replace(':' + key, pathParams[key])
          delete pathParams[key]
        }
      })
      // 将剩余参数拼接到url，防止get请求额外的参数无法通过body传递不到后端，通过url传递
      url = url + '?' + qs.stringify(pathParams)
      delete data.params
    }
    return new Promise((resolve, reject) => {
      let options = {
        // baseURL: 'https://some-domain.com/api/',
        headers: this.headers,
        withCredentials: false,
        timeout: 15000
      }
      let instance = axios.create(options)
      if (method === 'post') {
        instance.defaults.headers['Content-Type'] =
          'application/json;charset=UTF-8'
      } else {
        instance.defaults.headers['Content-Type'] =
          'application/x-www-form-urlencoded'
      }
      instance[method](`${url}`, data)
        .then(
          function(res) {
            console.log('--httpservice data----:', typeof data)
            resolve(res.data)
            // if (res.data.ResponseStatus !== 0) {
            //   if (isSelfHandler) {
            //     reject(res.data)
            //   } else {
            //     if (
            //       res.data.ResponseStatus == 422 ||
            //       res.data.ResponseStatus == 500 ||
            //       res.data.ResponseStatus === -1 ||
            //       res.data.ResponseStatus === 10001 ||
            //       res.data.ResponseStatus === 1000
            //     ) {
            //       console.log('---err----', err)
            //     }
            //     reject(res.data)
            //   }
            // } else {
            //   resolve(res.data)
            // }
          },
          function(err) {
            reject(err)
            if (err.response) {
              console.log('-----err.ResponseData----:', err.response.data)
            }
          }
        )
        .catch(function(err) {
          console.log('-------------ajax catch:', err)
        })
    })
  }
}

export default new HttpService()
