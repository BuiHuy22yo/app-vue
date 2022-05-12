<template>
  <el-main >
    <div v-if="title" class="title-page mb-4 T20B_28" >{{ title }}</div>
    <div class="page-content">
      <slot></slot>
    </div>
  </el-main>
</template>
<script>
export default {
  name: 'Layout',

  components: {
  },

  props: {
    title: String
  },

  data () {
    return {
    }
  },
  computed: {
  },
  beforeDestroy () {
  },
  methods: {
  }
}

</script>
