<template>
  <div class="app-input-search">
    <el-input
      :autocomplete="autocomplete"
      :autosize="autosize"
      :clearable="clearable"
      :placeholder="placeholder"
      :size="size"
      :type="type"
      :value="value"
      @input="handleSearch"
    ></el-input>

    <div class="app-input-search__result mt-3">
      <div v-if="searchResult.length > 0" class="result__wrap">
        <ul class="result__list">
          <li v-for="(item, index) in searchResult" :key="index" class="result__item">{{ item.name }}</li>
        </ul>
      </div>

      <div v-else class="result--empty text-center">データなし</div>
    </div>
  </div>
</template>

<script>
import Emitter from 'element-ui/src/mixins/emitter'
export default {
  name: 'AppInputSeacrh',
  mixins: [Emitter],
  inheritAttrs: false,

  /* eslint-disable vue/require-prop-types */
  /* eslint-disable vue/require-default-prop */
  props: {
    value: [String, Number],
    size: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'キーワード検索'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    remoteSearch: Function
  },

  data () {
    return {
      loading: false,
      searchResult: []
    }
  },

  methods: {
    handleSearch (value) {
      // events
      this.$emit('input', value)
      this.dispatch('ElFormItem', 'el.form.change', [value])

      if (typeof this.remoteSearch === 'function') {
        const $vm = this
        $vm.searchResult = []
        $vm.loading = true

        setTimeout(() => {
          this.remoteSearch(value, function (result) {
            $vm.searchResult = result
            $vm.loading = false
          })
        }, 100)
      }
    }
  }
}
</script>
