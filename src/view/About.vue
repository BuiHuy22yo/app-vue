<template>
  <div class="page-demo" style="text-align: center">
    <h1>About</h1>
    <div class="item-demo"
         style="display: flex; justify-content: space-around;background: #5a88ca;height: 100px;align-items: center">
      <Item1>Component 1</Item1>
      <Item2>Component 2</Item2>
    </div>
    <div class="item-demo"
         style="display: flex; justify-content: space-around;background: #5a88ca;height: 100px;align-items: center">
      <Datepicker></Datepicker>
    </div>
  </div>
</template>

<script>

import Item1 from '../components/About/Item1'
import Item2 from '../components/About/Item2'
import Datepicker from '../components/About/Datepicker'

export default {
  name: 'About',
  data () {
    return {
    }
  },
  // mixins: [mixin],
  components: { Item1, Item2, Datepicker },
  methods: {
  }
}
</script>
