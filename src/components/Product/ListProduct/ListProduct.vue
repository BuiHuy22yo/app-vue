<template>
  <div class="list-product" :class="state===true ? 'popup-relative' : ''">
    <div v-for="item in data" :key="item.id" class="product-item" >
      <ProductItem @addItem="popupItem" :data="item" ></ProductItem>
    </div>
    <div v-if="state===true" class="popup-item">
      <PopupItem @removeItem="removeItem" :data="popupitem" ></PopupItem>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem'
import PopupItem from './PopupItem'

export default {
  name: 'ListProduct',
  components: { ProductItem, PopupItem },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      popupitem: {
        type: Object,
        default: {}
      },
      state: {
        type: Boolean,
        default: false
      }
    }
  },
  methods: {
    popupItem (data) {
      this.popupitem = data
      this.state = true
    },
    removeItem () {
      this.popupitem = {}
      this.state = false
    }
  }
}
</script>
