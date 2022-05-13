<template>
  <div class="page-home">
    <div class="header__navigation ">
      <h1>Hello world</h1>
      <button type="button" @click="handleLogout">Logout</button>
      <div class="demo">{{message}}</div>
    </div>
  </div>
</template>

<script>
import mixin from '../global/mixins/mixin'
export default {
  name: 'Home',
  data () {
    return {
      eventbus: 'false'
    }
  },
  mixins: [mixin],
  methods: {
    handleLogout () {
      localStorage.removeItem('user_login')
      setTimeout(() => {
        this.$router.push('/login') // redirect
      })
    }
  }
}
</script>
