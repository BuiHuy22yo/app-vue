<template>
  <div class="page-about">
    <slot></slot>
    <div class="header__navigation flex-1 flex justify-end items-center">
      <button type="button" @click="handleEventBus">EventBus</button>
    </div>
  </div>
</template>

<script>
// import mixin from '../global/mixins/mixin'
import EventBus from '../../global/eventBus'
export default {
  name: 'Inner',
  // mixins: [mixin],

  methods: {
    handleEventBus () {
      EventBus.$emit('EventBus', 'EventBus')
      // this.$router.push('/') // redirect
    }
  }
}
</script>
