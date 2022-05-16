export default {
  methods: {
    constructionAreaPing(m2) {
      return m2 ? m2 * 0.3025 : '';
    },
    pingsUnitPrice(m2, amount) {
      return m2 && amount ? amount / (m2 * 0.3025) : '';
    },
  },
};
