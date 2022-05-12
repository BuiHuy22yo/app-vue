<template>
  <div class="product-wrap">
    <div class="wrap-header">
      <h1>Danh Sách Sản Phẩm</h1>
      <Cart :data="getCount"></Cart>
    </div>

    <ListProduct :data="products"></ListProduct>
  </div>
</template>
<script>
import ListProduct from '../Product/ListProduct/ListProduct'
import Cart from '../Product/ListProduct/Cart'
import {mapGetters} from 'vuex'
export default {
  name: 'ProductInner',
  components: { ListProduct, Cart },
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Iphone 13 Pro',
          price: 36000000,
          description: 'siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11 - One UI 3.5. '
        },
        {
          id: 2,
          name: 'Galaxy S22 Ultra',
          price: 36000000,
          description: 'siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11 - One UI 3.5. '
        },
        {
          id: 3,
          name: 'iVertu 5G',
          price: 86000000,
          description: 'siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11 - One UI 3.5. '
        },
        {
          id: 4,
          name: 'Samsung Galaxy Z Flip3 5G',
          price: 126000000,
          description: 'siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11 - One UI 3.5. '
        },
        {
          id: 5,
          name: 'Samsung Galaxy Z Fold3 5G',
          price: 36000000,
          description: 'siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11 - One UI 3.5. '
        },
        {
          id: 6,
          name: 'Xiaomi 12',
          price: 16000000,
          description: 'siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11 - One UI 3.5. '
        },
        {
          id: 7,
          name: 'Samsung Galaxy Z Fold3 5G',
          price: 26000000,
          description: 'siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11 - One UI 3.5. '
        },
        {
          id: 8,
          name: 'Iphone 13 Pro Max',
          price: 46000000,
          description: 'siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11 - One UI 3.5. '
        }
      ]
    }
  },
  props: {
  },
  computed: {
    ...mapGetters('cart', ['getCount'])
  },
  methods: {
  }
}
</script>
