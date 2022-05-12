export default {
  data () {
    return {
      message: 'mixin',
      foo: 'abc'
    }
  },
  created: function () {
    this.message = 'mixin mixin'
    console.log(this.$data)
  },
  methods: {
  }
}
