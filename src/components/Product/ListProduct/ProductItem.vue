<template>
  <div class="wrap">
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
    <div class="button add-to-cart"  @click="handlePopup(data)">
      <span>Add to Cart</span> </div>
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

  methods: {
    handlePopup (data) {
      this.$emit('addItem', data)
    }
  }
}
</script>
