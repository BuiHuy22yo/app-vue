<template>
  <div class="page-home">
    <slot></slot>
    <div class="header__navigation flex-1 flex justify-end items-center">
      <div class="EventBus">{{eventbus}}</div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/global/eventBus'
export default {
  name: 'Home',
  data () {
    return {
      eventbus: 'false'
    }
  },
  mounted () {
    // EventBus.$on('EventBus', this.handler)
    EventBus.$on('EventBus', (eventbus) => {
      this.eventbus = eventbus
    })
  },
  methods: {
  }
}
</script>
