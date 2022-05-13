<template>
  <div class="grid grid-cols-11">
    <div class="col-span-10">
      <div class="grid grid-cols-12">
        <div v-for="(item, index) in data.data" :key="index"
             class="col-span-4 border-r border-gray-400 px-5 border-s">
          <ItemOrtherTrend :data="item"/>
        </div>
      </div>
    </div>
    <div class="col-span-1 flex align-end justify-space-between flex-column mt-5 px-5">
      <div class="item">
        <el-button
          v-if="!index"
          class="top-0 cms--button-add"
          size="small"
          @click="$router.push({ name: 'PreviewPriceMainatin' })"
        >
          表示
        </el-button>
      </div>
      <div class="item">
        <el-button
          v-if="(!index && lastIndex === 0) || index === lastIndex"
          class="absolute cms--button-add bottom-1 bottom-2"
          size="small"
          @click="addNewLine(index, data.item)"
        >
          行追加
        </el-button>
      </div>
      <div class="item">
        <el-button
          class="ml-0 absolute bottom-0 cms--button-remove"
          :disabled="lastIndex === 0"
          size="small"
          @click="removeLine(index, data.item)"
        >
          行削除
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import ItemOrtherTrend from './ItemOrtherTrend.vue'
import EventBus from '@/global/eventBus'
export default {
  name: 'OrtherTrend',
  components: { ItemOrtherTrend },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    lastIndex () {
      return this.$props.data.data.length - 1
    }
  },

  methods: {
    addNewLine (index, item) {
      EventBus.$emit('addNewLine', index + 1, item)
    },
    removeLine (index, item) {
      EventBus.$emit('removeLine', index, item)
    }
  }
}
</script>
