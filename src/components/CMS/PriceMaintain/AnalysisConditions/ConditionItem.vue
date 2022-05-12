<template>
  <div class="grid grid-cols-11 mb-5 cms-condition">
    <div class="col-span-5 pr-5">
      <div class="header border border-gray-400 px-2 py-1">
        <el-input class="el-input--custom"  placeholder="タイトル" />
      </div>
      <div class="header border-l border-r border-b border-gray-400 px-2 py-1 h-24">
        <el-input  class="el-textarea--custom" placeholder="コメント" resize="none" :rows="4" type="textarea" />
      </div>
    </div>
    <div class="col-span-5 pl-5">
      <div class="header border border-gray-400 px-2 py-1">
        <el-input class="el-input--custom" placeholder="タイトル" />
      </div>
      <div class="header border-l border-r border-b border-gray-400 px-2 py-1 h-24">
        <el-input class="el-textarea--custom" placeholder="コメント" resize="none" :rows="4" type="textarea" />
      </div>
    </div>
    <div class="col-span-1 grid text-center">
      <div class="h-10">
        <el-button
          class="top-0 cms--button-add"
          size="small"
          @click="$router.push({ name: 'PreviewPriceMainatin' })"
        >
          表示
        </el-button>
      </div>
      <div class="relative flex justify-center h-10">
        <el-button
          class="absolute top-3 cms--button-add"
          size="small"
        >
          行追加
        </el-button>
      </div>
      <div class="relative flex justify-center h-10">
        <el-button
          class="ml-0 absolute bottom-0 cms--button-remove"
          size="small"
        >
          行削除
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConditionNo2',
  // emits: ['addNewLine', 'removeLine'],
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data () {
    return {}
  },

  methods: {
    // addNewLine () {
    //   this.$emit('addNewLine', this.index + 1)
    // },
    // removeLine () {
    //   this.$emit('removeLine', this.index + 1)
    // }
  }
}
</script>
