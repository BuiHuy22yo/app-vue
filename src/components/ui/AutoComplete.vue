<template>
  <div>
    <template v-if="version">
      <el-autocomplete
        v-model="model.contractorName"
        :fetch-suggestions="querySearch"
        :style="{ width: '100%' }"
        :trigger-on-focus="false"
        @blur="checkValidateAutoComplete"
        @input="changeStateShowMessage"
        @select="handleSelect"
      />
    </template>
    <template v-else>
      <el-autocomplete
        v-model="model.contractor_name"
        :fetch-suggestions="querySearch"
        :style="{ width: '100%' }"
        :trigger-on-focus="false"
        @blur="checkValidateAutoComplete"
        @input="changeStateShowMessage"
        @select="handleSelect"
      />
    </template>
  </div>
</template>

<script>
import InitialMixin from '@/global/mixins/initial.mixin'

export default {
  name: 'AutoComplete',

  mixins: [InitialMixin],

  /* eslint-disable vue/require-prop-types */
  props: ['model', 'version'],

  emits: ['handleSelect', 'checkValidateAutoComplete', 'changeStateShowMessage'],

  methods: {
    // suggestions option for auto complete
    querySearch (queryString, cb) {
      let results = queryString
        ? this.autoCompleteContractors.filter(v => v.value.includes(queryString))
        : this.autoCompleteContractors

      cb(results)
    },

    // handle select
    handleSelect (item) {
      this.$emit('handleSelect', item)
    },

    // check validate auto complete when blur
    checkValidateAutoComplete () {
      this.$emit('checkValidateAutoComplete')
    },

    // change state show message validate when input
    changeStateShowMessage () {
      this.$emit('changeStateShowMessage')
    }
  }
}
</script>

<style></style>
