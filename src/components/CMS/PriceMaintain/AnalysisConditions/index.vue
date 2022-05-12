<template>
  <div class="pl-5">
    <div v-for="(item, index) in data" :key="index" :class="!index ? 'mt-5' : ''">
      <ConditionItem :data="item"/>
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
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },

  created () {
    console.log('keyValue', this.keyValue)
  },

  methods: {
    addNewLine (index) {
      this.$emit('addNewLine', index, this.data[0].key)
    },
    removeLine (index) {
      this.$emit('removeLine', index, this.data[0].key)
    }
  }
}
</script>

<style></style>
