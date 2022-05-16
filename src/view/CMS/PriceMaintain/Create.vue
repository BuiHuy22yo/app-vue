<template>
  <div class="page page-search-request T14M_20">
    <Layout :title="title">
      <div class="content-item" style="display: flex;justify-content: space-between">
        <div class="item">
          <p class="T16B_24 mt-4">建設物価情報（{{ date }}）</p>
        </div>
        <div class="item text-right">
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
      <div class="content-item">
        <h3 class="T16B_24 mt-4 px-1 text-bg" style="background: rgb(234 130 6)"><span
          style="margin-right: 20px">I</span>■建設市況の分析概要</h3>
        <div class="wrap-item">
          <p class="" style="background: rgb(239 174 97);"><span style="margin-right: 20px">1</span>＜外部環境分析＞</p>
          <AnalysisConditions :data="AnalysisListIten1"/>
        </div>
        <div class="wrap-item">
          <p class="" style="background: rgb(239 174 97);"><span style="margin-right: 20px">2</span>＜建設市況の動向＞</p>
          <AnalysisConditions :data="AnalysisListIten2"/>
        </div>
      </div>
      <div class="content-item">
        <h3 class="T16B_24 mt-4 px-1 text-bg" style="background: rgb(234 130 6)">
          <span style="margin-right: 20px">II</span>
          ■建材の価格動向
        </h3>
        <div class="wrap-item">
          <MaterialTrend :data="PriceTrendMaterial"/>
        </div>
      </div>
      <div class="content-item">
        <h3 class="T16B_24 mt-4 px-1 text-bg" style="background: rgb(234 130 6)">
          <span style="margin-right: 20px">III</span>■その他価格動向
        </h3>
        <div class="wrap-item">
          <OtherTrend :data="OtherTrend"/>
        </div>
      </div>
      <div class="content-item">
        <div class="wrap-item">
          <div class="px-5 mt-5 pt-5 border-t border-gray-400">
            <div class="flex">
              <el-button class="w-24 cms--button-add" :loading="loadingSaveDraf" @click="handleSaveDraf">仮保管</el-button>
              <el-button
                class="w-24 cms--button-add ml-5"
                @click="handleDisplayPreview">
                表示
              </el-button>
              <el-button class="w-20 cms--button-remove ml-auto" @click="handleDeleteMaintain"> 削除</el-button>
            </div>
            <div class="mt-5">
              <el-button class="w-24 cms--button-add" @click="handleDisplayAction">戻る</el-button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/CMS/Layout/index.vue'
import dayjs from 'dayjs'
import { formatDateYMDChart } from '@/utils/format'
import AnalysisConditions from '@/components/CMS/PriceMaintain/AnalysisConditions/index.vue'
import EventBus from '@/global/eventBus'
import MaterialTrend from '@/components/CMS/PriceMaintain/PriceTrendsMaterial/index.vue'
import OtherTrend from '@/components/CMS/PriceMaintain/OtherPriceTrends/index'
export default {
  name: 'CreatePriceMaintain',
  components: {
    Layout,
    AnalysisConditions,
    MaterialTrend,
    OtherTrend
  },
  data () {
    return {
      title: '建設物価保守',
      date: '',
      loadingSaveDraf: false,
      creatorInfo: '',
      editorInfo: '',
      AnalysisListIten1: {},
      dataDefaultRow: [],
      AnalysisListIten2: {},
      PriceTrendMaterial: [],
      OtherTrend: [],
      dataDefaultOtherTrend: []
    }
  },
  created () {
    const date = localStorage.getItem('date_price_maintain')
    this.date = dayjs(date).format('YYYY年MM月版')

    this.creatorInfo = `${formatDateYMDChart(new Date())}   建設企画部`
    this.editorInfo = `${formatDateYMDChart(new Date())}   建設企画部`
    this.dataDefaultRow = [
      {
        comment: '',
        col: 1,
        title: ''
      },
      {
        comment: '',
        col: 2,
        title: ''
      }
    ]
    this.AnalysisListIten1 = {
      item: 1,
      data: [
        {
          data: this.dataDefaultRow,
          row: 1
        },
        {
          data: this.dataDefaultRow,
          row: 2
        }
      ]
    }
    this.AnalysisListIten2 = {
      item: 2,
      data: [
        {
          data: this.dataDefaultRow,
          row: 1
        },
        {
          data: this.dataDefaultRow,
          row: 2
        }
      ]
    }
    this.PriceTrendMaterial = [
      {
        title: '＜主要建材動向グラフ＞'
      },
      {
        title: '＜主要建材直近の動き＞'
      }
    ]
    this.dataDefaultOtherTrend = [
      {
        listOption: [
          '鉄筋工事　鉄筋加工組立　ＲＣラーメン構造　階高3.5～4.0m程度　形状単純　【施工規模200ｔ】',
          'コンクリート工事（打設手間）　躯体コンクリート　ポンプ打ち　【施工規模100m3】',
          '型枠工事　普通合板型枠　ラーメン構造　地上軸部　階高3.5～4.0m程度　【施工規模10,000m2】',
          '防水工事　屋根アスファルト防水　A-2　密着工法　平部　【施工規模500m2】',
          '軽量鉄骨下地工事　軽量鉄骨壁下地　スタッド　65形　＠300　スタッド高さ Ｈ≦4m　直貼り用',
          '左官工事　床モルタル塗り　金ごて　厚28mm　　張物下地',
          'ガラス工事　フロート板ガラス　厚5mm　　特寸2.18m2以下',
          '塗装工事　仕上塗り　ＥＰ塗り　（素地ごしらえＢ種共）　せっこうボード面',
          '内装床工事　床 ビニル床タイル貼り　厚2.0mm　コンポジションビニル床タイル　半硬質　ＫＴ',
          '内装ボード工事　壁 せっこうボード張り　　厚12.5mm　不燃　突付け',
          '絶縁ケーブル工事　ケーブル　（平型）　（ＶＶＦ）　ころがし配線　２心　2.0mm',
          '電線管工事　ねじ無し電線管　隠ぺい・埋込配管　19mm',
          '保温工事　長方形ダクト　グラスウール保温材　屋内隠ぺい，ダクトシャフト内'
        ],
        timeOption: [],
        layout: true,
        title: true,
        time: false,
        file: false,
        source: true,
        titleName: '',
        layoutName: '',
        fileName: '',
        timeName: '',
        sourceName: ''
      },
      {
        listOption: [
          '鉄筋工事　鉄筋加工組立　ＲＣラーメン構造　階高3.5～4.0m程度　形状単純　【施工規模200ｔ】',
          'コンクリート工事（打設手間）　躯体コンクリート　ポンプ打ち　【施工規模100m3】',
          '型枠工事　普通合板型枠　ラーメン構造　地上軸部　階高3.5～4.0m程度　【施工規模10,000m2】',
          '防水工事　屋根アスファルト防水　A-2　密着工法　平部　【施工規模500m2】',
          '軽量鉄骨下地工事　軽量鉄骨壁下地　スタッド　65形　＠300　スタッド高さ Ｈ≦4m　直貼り用',
          '左官工事　床モルタル塗り　金ごて　厚28mm　　張物下地',
          'ガラス工事　フロート板ガラス　厚5mm　　特寸2.18m2以下',
          '塗装工事　仕上塗り　ＥＰ塗り　（素地ごしらえＢ種共）　せっこうボード面',
          '内装床工事　床 ビニル床タイル貼り　厚2.0mm　コンポジションビニル床タイル　半硬質　ＫＴ',
          '内装ボード工事　壁 せっこうボード張り　　厚12.5mm　不燃　突付け',
          '絶縁ケーブル工事　ケーブル　（平型）　（ＶＶＦ）　ころがし配線　２心　2.0mm',
          '電線管工事　ねじ無し電線管　隠ぺい・埋込配管　19mm',
          '保温工事　長方形ダクト　グラスウール保温材　屋内隠ぺい，ダクトシャフト内'
        ],
        layout: true,
        title: true,
        timeOption: ['１年', '2 年', '3 年', '5 年', '10 年'],
        time: true,
        file: false,
        source: true,
        titleName: '',
        layoutName: '',
        fileName: '',
        timeName: '',
        sourceName: ''
      },
      {
        listOption: [
          '鉄筋工事　鉄筋加工組立　ＲＣラーメン構造　階高3.5～4.0m程度　形状単純　【施工規模200ｔ】',
          'コンクリート工事（打設手間）　躯体コンクリート　ポンプ打ち　【施工規模100m3】',
          '型枠工事　普通合板型枠　ラーメン構造　地上軸部　階高3.5～4.0m程度　【施工規模10,000m2】',
          '防水工事　屋根アスファルト防水　A-2　密着工法　平部　【施工規模500m2】',
          '軽量鉄骨下地工事　軽量鉄骨壁下地　スタッド　65形　＠300　スタッド高さ Ｈ≦4m　直貼り用',
          '左官工事　床モルタル塗り　金ごて　厚28mm　　張物下地',
          'ガラス工事　フロート板ガラス　厚5mm　　特寸2.18m2以下',
          '塗装工事　仕上塗り　ＥＰ塗り　（素地ごしらえＢ種共）　せっこうボード面',
          '内装床工事　床 ビニル床タイル貼り　厚2.0mm　コンポジションビニル床タイル　半硬質　ＫＴ',
          '内装ボード工事　壁 せっこうボード張り　　厚12.5mm　不燃　突付け',
          '絶縁ケーブル工事　ケーブル　（平型）　（ＶＶＦ）　ころがし配線　２心　2.0mm',
          '電線管工事　ねじ無し電線管　隠ぺい・埋込配管　19mm',
          '保温工事　長方形ダクト　グラスウール保温材　屋内隠ぺい，ダクトシャフト内'
        ],
        layout: true,
        title: true,
        timeOption: [],
        time: false,
        file: true,
        source: true,
        titleName: '',
        layoutName: '',
        fileName: '',
        timeName: '',
        sourceName: ''
      }
    ]
    this.OtherTrend = {
      item: 3,
      data: [
        {
          data: this.dataDefaultOtherTrend
        }
      ]
    }
  },

  mounted () {
    EventBus.$on('addNewLine', (lenght, item) => {
      if (item === 1) {
        this.AnalysisListIten1.data.push({ data: this.dataDefaultRow,
          row: lenght + 1})
      } else if (item === 2) {
        this.AnalysisListIten2.data.push({
          data: this.dataDefaultRow,
          row: lenght + 1
        })
      } else if (item === 3) {
        this.OtherTrend.data.push({ data: this.dataDefaultOtherTrend })
      } else {
        return false
      }
    })
    EventBus.$on('removeLine', (index, item) => {
      if (item === 1) {
        this.AnalysisListIten1.data.splice(index, 1)
        this.AnalysisListIten1.data.map((item, index) => { item.row = index + 1 })
      } else if (item === 2) {
        this.AnalysisListIten2.data.splice(index, 1)
        this.AnalysisListIten2.data.map((item, index) => { item.row = index + 1 })
      } else if (item === 3) {
        this.OtherTrend.data.splice(index, 1)
      } else {
        return false
      }
    })
  },
  computed: {
  },

  methods: {
    handleSaveDraf () {
    },
    handleDisplayPreview () {
      this.$router.push({ name: 'PreviewPriceMainatin' })
    },
    handleDeleteMaintain () {
      this.$alert('選択データを削除します。よろしいでしょうか？', '見積総括表データ削除(確認)', {
        confirmButtonText: 'はい',
        callback: action => {
          if (action === 'confirm') {
            // delelte action
            // this.$emit('confirm-delete');
          }
        },
        showCancelButton: true,
        cancelButtonText: 'いいえ',
        showClose: false
      })
    },
    handleDisplayAction () {
      this.$router.push({ name: 'ActionPriceMaintain' })
    }
  }
}
</script>
