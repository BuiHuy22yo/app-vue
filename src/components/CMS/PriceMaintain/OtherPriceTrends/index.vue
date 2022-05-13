<template>
  <div class="pl-5">
    <div class="  inner" v-for="(item, index) in data.data" :key="index" :class="index ? 'mt-5 pt-5 border-t border-gray-400': ''">
      <OrtherTrend :data="item" ></OrtherTrend>
    </div>
  </div>
</template>

<script>
import OrtherTrend from './OrtherTrend.vue'

export default {
  name: 'PriceTrendItem',
  components: { OrtherTrend },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
  },

  methods: {
  }
}
</script>
