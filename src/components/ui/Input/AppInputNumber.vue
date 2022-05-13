<template>
  <el-input-number v-bind="mergedProps" class="app-input-number" :controls="false" v-on="listeners"> </el-input-number>
</template>

<script>
import { Input } from 'element-ui'

export default {
  name: 'AppInputNumber',
  components: {
    [Input.name]: Input
  },
  inheritAttrs: false,

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
    }
  }
}
</script>

<style >
.app-input-number.el-input-number .el-input__inner {
    text-align: right;
}
</style>
