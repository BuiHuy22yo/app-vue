<template>
  <div class="pl-5">
    <div v-for="(item, index) in data.data" :key="index" :class="!index ? 'mt-5' : ''">
      <ConditionItem :data="item.data" :index="index" :lastIndex="data.data.length - 1" :item="data.item"/>
    </div>
  </div>
</template>

<script>
import ConditionItem from './ConditionItem.vue'

export default {
  name: 'AnalysisConditions',
  components: { ConditionItem },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {}
  },

  created () {
    // console.log('keyValue', this.keyValue)
  },

  methods: {
    // addNewLine (index) {
    //   this.$emit('addNewLine', index, this.data[0].key)
    // },
    // removeLine (index) {
    //   this.$emit('removeLine', index, this.data[0].key)
    // }
  }
}
</script>

<style></style>
