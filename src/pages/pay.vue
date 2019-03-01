<template>
  <div>
    <div @click="fbuy">
      立即购买
    </div>
    <div id="bq_pay">

    </div>
    <div @click="fpay">
      立即支付
    </div>
  </div>
</template>

<script>
    // import BoqiiPay from 'boqii-pay';

    export default {
        data() {
            return {
                test: 12
            }
        },
        methods: {
            fbuy() {
                BoqiiPay.init({
                    env: 'production'
                })
            },
            fpay() {
                BoqiiPay.checkout()
            }
        },
        mounted() {
            this.fbuy()
        }
    }
</script>