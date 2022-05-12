<template>
  <div class="page-thankyou">
    <div class="wrap-thankyou">
      <h3> Thank you for your purchase,<br> From {{formData.firstname}} {{formData.lastname}}!</h3>
      <div class="address">
        Address : {{formData.address}}
      </div>
      <span>You have ordered the following items:</span>
      <OrderReview :data="orderData"></OrderReview>
    </div>
  </div>
</template>

<script>

import OrderReview from './OrderReview'

export default {
  name: 'ThankYou',
  components: { OrderReview },
  data () {
    return {
    }
  },
  props: {
    formData: {
      type: Object,
      default: null
    },
    orderData: {
      type: Array,
      default: null
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
