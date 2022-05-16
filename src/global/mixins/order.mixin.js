import orderService from '@/services/assessment/order.service';
export default {
  data() {
    return {
      searchPrev: {},
      pagination: {
        pageSize: 10, // default
        currentPage: 1, // default
        totalRecords: 0,
        from: 0,
        to: 0,
      },
      isRequestBusy: false,
      searchResult: [],
      selectResult: [],
    };
  },
  watch: {
    'pagination.currentPage'(page) {
      this.searchRequest({ ...this.searchPrev, page }, () => {});
    },
  },
  methods: {
    searchRequest(data, cb) {
      if (!this.isRequestBusy) {
        this.isRequestBusy = true;
        orderService
          .listAssessment(data)
          .then(result => {
            // update search result
            this.searchResult = result?.data || [];
            this.createNewRow();

            // update pagination
            this.pagination.pageSize = result?.per_page || 10;
            this.pagination.currentPage = result?.current_page || 1;
            this.pagination.totalRecords = result?.total || 0;
            this.pagination.from = result?.from || 0;
            this.pagination.to = result?.to || 0;

            this.searchPrev = data; // save search prev
          })
          .finally(() => {
            cb();
            this.isRequestBusy = false;
          });
      }
    },
    searchRequestFixedCondition(data, cb) {
      if (!this.isRequestBusy) {
        this.isRequestBusy = true;
        orderService
          .listAssessment(data)
          .then(result => {
            // update search result
            this.searchResult = result?.data || [];
            this.createNewRow();

            // update pagination
            this.pagination.pageSize = result?.per_page || 10;
            this.pagination.currentPage = result?.current_page || 1;
            this.pagination.totalRecords = result?.total || 0;
            this.pagination.from = result?.from || 0;
            this.pagination.to = result?.to || 0;
            this.searchPrev = data; // save search prev
          })
          .finally(() => {
            cb();
            this.isRequestBusy = false;
          });
      }
    },
    handleAddSelectResultItem(item) {
      if (item) {
        this.selectResult.push(item);
      }
    },

    handleRemoveSelectResultItem(_id) {
      this.selectResult = this.selectResult.filter(item => item.id !== _id);
    },

    handleResetSelectItem() {
      this.selectResult = [];
    },

    actionDownloadExcel(fileURL, fileName) {
      orderService.actionDownloadExcel(fileURL, fileName);
    },

    actionDownloadList(fileURL) {
      orderService.actionDownloadList(fileURL, this.searchResult);
    },

    getTotalColumn(field) {
      let total = 0;
      switch (field) {
        case 'estimated_amount':
          this.searchResult.forEach(element => {
            total = total + parseInt(element.estimated_amount);
          });
          break;
        case 'assessed_amount':
          this.searchResult.forEach(element => {
            total = total + parseInt(element.assessed_amount);
          });
          break;
        case 'difference_assessment_estimate':
          this.searchResult.forEach(element => {
            total = total + parseInt(element.difference_assessment_estimate);
          });
          break;
        case 'fluctuation_difference_assessment':
          this.searchResult.forEach(element => {
            total = total + (element.fluctuation_difference_assessment);
          });
          break;
        case 'order_amount':
          this.searchResult.forEach(element => {
            total = total + parseInt(element.order_amount);
          });
          break;
        case 'difference_order_estimate':
          this.searchResult.forEach(element => {
            total = total + parseInt(element.difference_order_estimate);
          });
          break;
        case 'discount_rate_difference_estimate':
          this.searchResult.forEach(element => {
            total = total + (element.discount_rate_difference_estimate);
          });
          break;

        default:
          break;
      }

      return total;
    },
    createNewRow() {
      if (this.searchResult.length) {
        const obj = this.searchResult[0];
        if (null == obj || 'object' != typeof obj) return obj;
        let rowTotal = obj.constructor();
        for (var attr in obj) {
          rowTotal[attr] = obj[attr];
        }
        Object.keys(rowTotal).forEach(v => (rowTotal[v] = null));

        rowTotal = {
          ...rowTotal,
          type: 'total',
          status: '合計',
          estimated_amount: this.getTotalColumn('estimated_amount'),
          assessed_amount: this.getTotalColumn('assessed_amount'),
          difference_assessment_estimate: this.getTotalColumn('difference_assessment_estimate'),
          fluctuation_difference_assessment: this.getTotalColumn('fluctuation_difference_assessment'),
          order_amount: this.getTotalColumn('order_amount'),
          difference_order_estimate: this.getTotalColumn('difference_order_estimate'),
          discount_rate_difference_estimate: this.getTotalColumn('discount_rate_difference_estimate'),
          relation_appraisal_detail: [],
          relation_approver: [],
          relation_assessor: [],
          relation_assessor_facility: [],
          relation_order_detail: [],
          relation_property_name: [],
          relation_quotation_segment_key_constant: [],
          relation_status_constant: [],
        };
        this.searchResult.push(rowTotal);
      }
    },
  },
};
