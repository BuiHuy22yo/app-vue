<template>
  <div class="order-review">
    <div class="order-head">
      <div class="order-item">
        <div class="order-name">Product</div>
        <div class="order-total">Subtotal</div>
      </div>
    </div>
    <div class="order-body">
      <div class="order-item" v-for="item in data " :key="item.id">
        <div class="order-name">{{item.name}} x {{item.quantity}}</div>
        <div class="order-total">{{item.price * item.quantity}}đ</div>
      </div>
    </div>
    <div class="order-foot">
      <div class="order-item">
        <div class="order-name">Subtotal</div>
        <div class="order-total">{{total}}đ</div>
      </div>
    </div>
  </div>
</template>

<script>

// import {mapGetters} from 'vuex'
export default {
  name: 'OrderReview',
  components: { },
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array
    }
  },
  computed: {
    // ...mapGetters('cart', ['getProducts']),
    total () {
      let item = this.$props.data
      return item.reduce((acc, item) => acc + parseInt(item.price) * parseInt(item.quantity), 0)
    }
  },
  methods: {
  }
}
</script>
