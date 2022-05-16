<template>
  <div class="pl-5">
    <div>
      <div class="grid grid-cols-2 mb-5">
        <div v-for="item in data" :key="item.id" class="col-span-1" :class="item.id > 2 ? 'mt-5' : ''">
          <ConditionNo1 :comments="item.comment" :title="item.title" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ConditionNo1 from './ConditionNo1.vue'

export default {
  name: 'AnalysisConditions',
  components: { ConditionNo1 },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
