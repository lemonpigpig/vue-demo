import Vue from 'vue'
import devConfig from './config.js'
import Web from './web.vue'
import Mp from './mp.vue'
const WebConstructor = Vue.extend(Web)
const MpConstructor = Vue.extend(Mp)
console.log('----WebConstructor----:', WebConstructor)
let BoqiiPay = {}
let instance = null
let payWebPool = []
let payMpPool = []
// var apiConfig = {
//   hostName: 'http://pierup.asuscomm.com:8686', // 'http://192.168.1.51:8088',
//   regCode: '/sdk_register_cn/v1/register/activation_code',
//   regUser: '/sdk_register_cn/v1/register/register_user',
//   setPin: '/sdk_register_cn/v1/register/forget_payment_password_reset',
//   signIn: '/sdk_register_cn/v1/register/signin',
//   bindCard: '/payment_api/bind_card',
//   verifyCard: '/payment_api/verify_card?platform=1',
//   savePaymentOrder: '/payment_api/save_payment_order?platform=1',
//   applyCredit: '/sdk_register_cn/v1/credit/apply_promotion_credit'
// }
let defaultConfig = {
  platform: 'web',
  selector: '#bq_pay',
  from: 'magic', // 来源有：神奇卡 商城 服务（vet）
  env: 'dev'
}
let payConfig = null
let returnInstanceByPlatform = () => {
  const {platform, selector} = payConfig
  if (!selector || !document.querySelector(selector)) {
    throw new Error(`传入的selector${selector}元素不存在`)
  }
  if (platform === 'web') {
    if (payWebPool.length > 0) {
      let instance = payWebPool[0]
      payWebPool.splice(0, 1)
      return instance
    } else {
      return new WebConstructor({
        el: selector
      })
    }
  } else if (platform === 'mp') {
    if (payMpPool.length > 0) {
      let instance = payMpPool[0]
      payMpPool.splice(0, 1)
      return instance
    } else {
      return new MpConstructor({
        el: selector
      })
    }
  }
}

let getAnInstance = () => {
  return returnInstanceByPlatform()
}

// let returnAnInstance = instance => {
//   if (instance) {
//     payPool.push(instance)
//   }
// }
let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

MpConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
  this.closed = true
  // returnAnInstance(this)
}

BoqiiPay.init = function (config) {
  payConfig = Object.assign(defaultConfig, config)
  console.log('-----out config---:', payConfig)
  instance = getAnInstance()
  instance.closed = false
  // document.body.appendChild(instance.vm.$el)
  Vue.nextTick(function () {
    instance.visible = true
    // instance.$el.removeEventListener('transitionend', removeDom)
  })
  console.log('-----out instance---:', instance)
}

BoqiiPay.checkout = function (paydata, type) {
  console.log('----api------:', devConfig(payConfig.env))
  alert('---loading---发去支付' + payConfig.env)
}
export default BoqiiPay
