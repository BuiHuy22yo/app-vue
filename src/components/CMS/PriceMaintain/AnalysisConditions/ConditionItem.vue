<template>
  <div class="grid grid-cols-11 mb-5 cms-condition">
    <div class="col-span-5 px-5">
      <div class="header border border-gray-400 px-2 py-1">
        <el-input class="el-input--custom"  placeholder="タイトル" />
      </div>
      <div class="header border-l border-r border-b border-gray-400 px-2 py-1 h-24">
        <el-input  class="el-textarea--custom" placeholder="コメント" resize="none" :rows="4" type="textarea" />
      </div>
    </div>
    <div class="col-span-5 px-5">
      <div class="header border border-gray-400 px-2 py-1">
        <el-input class="el-input--custom" placeholder="タイトル" />
      </div>
      <div class="header border-l border-r border-b border-gray-400 px-2 py-1 h-24">
        <el-input class="el-textarea--custom" placeholder="コメント" resize="none" :rows="4" type="textarea" />
      </div>
    </div>
    <div class="col-span-1 flex align-end justify-space-between flex-column mt-5 px-5">
      <div class="item">
        <el-button
          v-if="!index"
          class="top-0 cms--button-add"
          size="small"
          @click="$router.push({ name: 'Home' })"
        >
          表示
        </el-button>
      </div>
      <div class="item">
        <el-button
          v-if="(!index && lastIndex === 0) || index === lastIndex"
          class="absolute top-3 cms--button-add"
          size="small"
          @click="addNewLine">
          行追加
        </el-button>
      </div>
      <div class="item">
        <el-button
          class="ml-0 absolute bottom-0 cms--button-remove"
          size="small"
          :disabled="lastIndex === 0"
          @click="removeLine"
        >
          行削除
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/global/eventBus'
export default {
  name: 'ConditionNo2',
  // emits: ['addNewLine', 'removeLine'],
  props: {
    data: {
      type: Object,
      default: null
    },
    lastIndex: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: undefined
    },
    item: {
      type: Number,
      default: null
    }
  },
  data () {
    return {}
  },

  methods: {
    addNewLine () {
      EventBus.$emit('addNewLine', this.index + 1, this.item)
    },
    removeLine () {
      EventBus.$emit('removeLine', this.index, this.item)
    }
  }
}
</script>
