<template>
  <div class="page page-search-request T14M_20">
    <Layout :title="title"></Layout>
    <div class="" style="display: flex;justify-content: space-between;padding: 0 30px;">
      <div class="item" >
        <p class="T16B_24 mt-4">建設物価情報（{{ date }}）</p>
      </div>
      <div class="item text-right" >
        <div class="flex" style="display: flex">
          <p class="flex-1 mr-10" style="margin-right: 40px">作成</p>
          <p>{{ creatorInfo }}</p>
        </div>
        <div class="flex w-100" style="display: flex">
          <p class="flex-1 mr-10" style="margin-right: 40px">更新</p>
          <p>{{ editorInfo }}</p>
        </div>
      </div>
    </div>
    <div class="pb-2" style="padding: 0 30px;">
      <p class="T16B_24 mt-4 px-1 text-bg"><span style="margin-right: 20px;background: #b3d9ff">I</span>■建設市況の分析概要</p>
      <AnalysisConditions :data="AnalysisListIten1"/>
    </div>
  </div>
</template>

<script>
import Layout from '@/components/CMS/Layout/index.vue'
import dayjs from 'dayjs'
import { formatDateYMDChart } from '@/utils/format'
import AnalysisConditions from '@/components/CMS/PriceMaintain/AnalysisConditions/index.vue'
export default {
  name: 'CreatePriceMaintain',
  components: {
    Layout,
    AnalysisConditions
  },
  data () {
    return {
      title: '建設物価保守',
      date: '',
      creatorInfo: '',
      editorInfo: '',
      AnalysisListIten1: [
        {id: 1},
        {id: 2}
      ]
    }
  },
  created () {
    const date = localStorage.getItem('date_price_maintain')
    this.date = dayjs(date).format('YYYY年MM月版')

    this.creatorInfo = `${formatDateYMDChart(new Date())}   建設企画部`
    this.editorInfo = `${formatDateYMDChart(new Date())}   建設企画部`
  },
  computed: {
  },

  methods: {
  }
}
</script>
