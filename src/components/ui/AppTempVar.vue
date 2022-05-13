<script>
export default {
  name: 'AppTempVar',
  functional: true,
  // eslint-disable-next-line vue/require-prop-types
  props: ['vars'],
  render (h, context) {
    return context.data.scopedSlots.default(context.props.vars)
  }
}
</script>
