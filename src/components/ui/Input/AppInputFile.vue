<template>
  <div class="app-input-file">
    <input type="text" class="app-input-file__inner" :placeholder="placeholderName" :value="fileName" />
    <el-button class="app-input-file__btn" @click="handleChoice"> {{ buttonName || '選択' }} </el-button>

    <!-- hidden -->
    <input
      ref="inputFile"
      :accept="accept"
      :capture="capture"
      :directory="directory"
      :disabled="disabled"
      hidden
      :multiple="multiple"
      type="file"
      :webkitdirectory="webkitdirectory"
      @change="handleValueChange"
    />
  </div>
</template>

<script>
import Emitter from 'element-ui/src/mixins/emitter'

export default {
  name: 'AppInputFile',
  mixins: [Emitter],
  inheritAttrs: false,

  /* eslint-disable vue/require-prop-types */
  props: ['value', 'multiple', 'accept', 'capture', 'webkitdirectory', 'directory', 'disabled', 'buttonName', 'placeholderName'],

  computed: {
    fileName () {
      return this.value && this.value[0] ? this.value[0].name : ''
    }
  },

  methods: {
    handleChoice () {
      this.$refs.inputFile.value = null
      this.$refs.inputFile.click()
    },
    handleValueChange (event) {
      if (event.target.files && event.target.files.length > 0) {
        this.$emit('input', event.target.files) // this.$emit("change", event);
      } else {
        this.$emit('input', '')
      }

      this.dispatch('ElFormItem', 'el.form.change', [event.target.files])
    }
  }
}
</script>
<style >

.app-input-file__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 4px;
  border: 1px solid #dcdfe6;
  border-right-width: 0;
  box-sizing: border-box;
  color: #222222;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  flex-grow: 1;
  overflow: hidden;
}

.app-input-file {
  display: flex;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
  border-radius: 4px;
}
.app-input-file__btn {
  border-top-left-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 0;
  background: #b3d9ff;
}
</style>
