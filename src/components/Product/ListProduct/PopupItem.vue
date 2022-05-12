<template>
  <div class="wrap">
    <div class="button button-close" @click="removeItem">x</div>
    <div class="product-image"><img src="https://shopdunk.com/wp-content/uploads/2022/04/iPhone-13.png"></div>
    <div class="product-name">
      <h3>{{ data.name }}</h3></div>
    <div class="product-price">
    <span>
      {{ data.price }}đ
    </span></div>
    <div class="product-description">
      <p>{{ data.description }}</p>
    </div>

    <div class="button button-buy" @click="addCart(data)">Mua</div>
  </div>
</template>
<script>
export default {
  name: 'ProductItem',
  components: {},
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      count: 0
    }
  },

  methods: {
    removeItem () {
      this.$emit('removeItem')
    },
    addCart (data) {
      let count = this.count + 1
      let product = {...data}
      product.quantity = count
      this.$store
        .dispatch(`cart/add`, product)
        .then(() => {})
    }
  }
}
</script>
