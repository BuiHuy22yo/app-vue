<template>
  <div>
      <div class="pl-5">
        <img :src="imageUrl" />
        <p class="my-2 T16R_24">{{source}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    }
  }

}
</script>

<style></style>
