<template>
  <el-date-picker v-bind="mergedProps" :picker-options="pickerOptions" v-on="listeners"> </el-date-picker>
</template>

<script>
import { Input } from 'element-ui'

export default {
  name: 'AppDatePicker',
  components: {
    [Input.name]: Input
  },
  inheritAttrs: false,

  /* eslint-disable vue/require-default-prop */
  props: {
    min: [Date, String],
    max: [Date, String]
  },

  computed: {
    listeners () {
      return {
        ...this.$listeners
      }
    },
    mergedProps () {
      return {
        ...this.$attrs,
        ...this.$props
      }
    },
    pickerOptions () {
      return {
        disabledDate: date => {
          if (!this.min && !this.max) return false // enable all

          const time = date.getTime()
          const minTime = this.min ? this.min.getTime() : null
          const maxTime = this.max ? this.max.getTime() : null

          // disable
          if (minTime && maxTime) return time < minTime || time > maxTime
          if (minTime) return time < minTime
          if (maxTime) return time > maxTime
        }
      }
    }
  }
}
</script>

<!--<style lang="scss" scoped></style>-->
