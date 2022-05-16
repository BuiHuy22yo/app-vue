// table mixins for tale detail (page 8, 9, 18, 19, 20)
import { round } from 'lodash';

export default {
  methods: {
    // get difference amont
    getDifferenceAmount(row) {
      // Handle refer data
      row.assessment_amount = row.assessment_amount !== 0 ? row.assessment_amount : row.estimate_amount
      if (row.assessment_amount) {
        const diff = row.difference_assessment_estimate;
        if (diff < 0) {
          return `▲${round(Number(Math.abs(diff)), 0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        }
        return round(Number(diff), 0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return '';
    },

    // get assessment rate
    getAssessmentRate(row) {
      // Handle refer data
      row.assessment_amount = row.assessment_amount !== 0 ? row.assessment_amount : row.estimate_amount
      if (row.assessment_amount) {
        const percent = ((row.assessment_amount - row.estimate_amount) * 100) / row.assessment_amount;
        if (percent < 0) {
          return `▲${Number(Math.abs(percent))
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}%`;
        }
        return (
          Number(percent)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
        );
      }
    },
  },
};
