<template>
  <div class="pl-5">
    <div>
      <div class="grid grid-cols-2 mb-5">
        <div class="col-span-1 pr-5 pt-5 pb-2">
          <span class="my-1 ml-2 T16B_24">＜主要建材動向グラフ＞</span>
        </div>
        <div class="col-span-1 pr-5 pt-5 pb-2">
          <span class="my-1 ml-2 T16B_24">＜主要建材直近の動き＞</span>
        </div>
        <div v-for="item in data" :key="item.id" class="col-span-1 pr-5">
          <ImageComp :image-url="item.filePath" :source="item.source" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageComp from './ImageComp.vue'

export default {
  components: {
    ImageComp
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
