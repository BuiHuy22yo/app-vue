<template>
  <div class="cart">
    <div class="button-cart" @click="handleMiniCart()">
      <div class="buttton cart">cart
        <span class="product-count">{{ data }}</span>
      </div>
    </div>
    <div :class="state===true ? 'd-block' : ''" class="cart-main">
      <div class="cart-inner">
        <div class="button button-close" @click="handleClose">X</div>
        <div class="item-cart__empty" v-if="data===0">No products in the cart.</div>
        <div v-else class="cart-content">
          <div class="item-cart"  v-for="item in getProducts " :key="item.id">
            <div class="cart-product">
              <div class="button product-remove" @click="handleRemove(item.id)">X</div>
              <div class="product-image"><img src="https://shopdunk.com/wp-content/uploads/2022/04/iPhone-13.png"></div>
              <div>
                <div class="product-name">{{ item.name }}</div>
                <div class="price">{{ item.price }}đ x {{ item.quantity }}</div>
              </div>
            </div>
          </div>
          <div class="cart-total">
            <span>Subtotal</span>
            <div class="total-price"> {{total}}đ</div>
          </div>
          <div class="button button-checkout" @click="$router.push('/checkout')">Checkout</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'

export default {
  name: 'ProductInner',
  components: { },
  data () {
    return {
      state: {
        type: Boolean,
        default: false
      }
    }
  },
  props: {
    data: {
      type: Number
    }
  },
  computed: {
    ...mapGetters('cart', ['getProducts']),
    total () {
      let item = this.$store.getters['cart/getProducts']
      return item.reduce((acc, item) => acc + parseInt(item.price) * parseInt(item.quantity), 0)
    }
  },
  methods: {
    handleMiniCart () {
      this.state = true
    },
    handleClose () {
      this.state = false
    },
    handleRemove (id) {
      this.$store
        .dispatch(`cart/delete`, id)
        .then(() => {})
    }
  }
}
</script>
