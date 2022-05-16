<template>
  <div class="px-5">
    <div>
      <div class="pt-5" :class="title ? '' : 'height-24'">
                <span v-if="title" class="my-1 T10R_14">■</span>
        <span class="my-1 ml-2 T16B_24">{{ title }}</span>
      </div>
      <div class="ml-5" :class="title ? '' : 'mt-12'">
        <div v-for="(item, index) in comments" :key="index" class="my-1 T16R_24">
          <div v-if="!item.parent" class="inner">
            <span class="T10R_14"> </span>
            <span class="T16R_24">{{ item }}</span>
          </div>
          <div v-else class="inner">
            <p class="title">{{ item.title }}</p>
            <div v-for="(itemcmt, indexcmt) in item.comment" :key="indexcmt" class="my-1 T16R_24">
              <span class="T10R_14"> </span>
              <span class="T16R_24">{{ itemcmt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    comments: {
      type: Array,
      default: null
    }
  },
  computed: {}
}
</script>

<style></style>
