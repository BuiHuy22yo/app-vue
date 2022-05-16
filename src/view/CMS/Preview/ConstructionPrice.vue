<template>
  <div class="page page-search-request T14M_20">
    <Layout :title="title">
      <div class="grid grid-cols-5">
        <div class="col-span-4">
          <el-form ref="formMaterialSearch" label-position="left" label-width="150px" :model="params">
            <el-form-item class="T16B_24 custom-form-item" label="建設物価情報" prop="date">
              <el-col :lg="9" :md="12" :xs="24">
                <el-date-picker v-model="params.date" :disabled="disabled" type="month"> </el-date-picker>
              </el-col>
            </el-form-item>
          </el-form>
        </div>
        <div class="col-span-1 text-right">
          <div class="flex">
            <p class="flex-1 mr-10">作成</p>
            <p>2022/2/2 建設企画部</p>
          </div>
          <div class="flex w-100">
            <p class="flex-1 mr-10">更新</p>
            <p>2022/2/3 建設企画部</p>
          </div>
        </div>
      </div>

      <div v-loading="blockLoading" class="pb-2">
        <p class="T16B_24 mt-4 px-1 text-bg">外部環境の分析</p>
        <AnalysisConditions :data="externalEnvironmentAnalysisList" />
      </div>

      <div v-loading="blockLoading" class="pb-2">
        <p class="T16B_24 mt-4 px-1 text-bg">建設市況の動向分析</p>
        <AnalysisConditions :data="constructionMarketTrendAnalysisList" />
      </div>

      <div v-loading="blockLoading" class="py-2">
        <p class="T16B_24 mb-1 px-1 text-bg">建材の価格動向</p>
        <MaterialTrend :data="constructionMaterialPriceTrendList" />
      </div>

      <div v-loading="blockLoading" class="py-2 mb-5">
        <p class="T16B_24 mb-5 px-1 text-bg">個別価格動向</p>
        <OtherTrend />
      </div>
      <div class="flex flex-col justify-start">
        <div class="mt-5 mb-10"><el-button type="danger" @click="handleClodeTab">閉じる</el-button></div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/CMS/Layout/index.vue';
import AnalysisConditions from '@/components/CMS/Preview/AnalysisConditions/index.vue';
import MaterialTrend from '@/components/CMS/Preview/MaterialTrend/index.vue';
import OtherTrend from '@/components/CMS/Preview/OtherTrend/index.vue';
import dayjs from 'dayjs';
import { formatDateDefault } from '@/utils/format';
import PreviewMixin from '@/global/mixins/cms/preview.mixin';

export default {
  name: 'Preview',
  metaInfo() {
    return {
      title: `${this.title} - Construction Support System`,
      meta: [
        {
          property: 'og:title',
          content: `${this.title} - Construction Support System`,
        },
      ],
    };
  },
  components: { Layout, AnalysisConditions, MaterialTrend, OtherTrend },
  mixins: [PreviewMixin],
  data() {
    return {
      title: '建設物価情報照会',
      date: '',
      params: {
        date: formatDateDefault(new Date()),
      },
      disabled: false,
    };
  },
  computed: {
    getDateTimeChange() {
      return this.params.date;
    },
  },
  watch: {
    getDateTimeChange() {
      const dateRequest = dayjs(this.params.date).format('YYYY-MM').split('-');
      const params = {
        year: dateRequest[0],
        month: dateRequest[1],
        active: 0, // change to 0
      };
      this.disabled = true;
      this.getData(params);
      this.disabled = false;
    },
  },
  created() {
    const dateRequest = dayjs(this.params.date).format('YYYY-MM').split('-');
    const params = {
      year: dateRequest[0],
      month: dateRequest[1],
      active: 0,
    };
    this.disabled = true;
    this.getData(params);
    this.disabled = false;
  },
  methods: {
    handleClodeTab() {
      window.close();
    },
  },
};
</script>

<style></style>
