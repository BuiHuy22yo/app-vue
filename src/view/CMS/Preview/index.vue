<template>
  <div class="page page-search-request T14M_20">
    <Layout :title="title">
      <div class="content-item" style="display: flex;justify-content: space-between">
        <div class="item">
          <p class="T16B_24 mt-4">建設市況の動向報告（{{ date }}）</p>
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
        <h3 class="T16B_24 mt-4 px-1 text-bg" style="background: rgb(234 130 6)">■建設市況の分析概要</h3>
        <div class="wrap-item">
          <p class="" style="background: rgb(239 174 97);">＜外部環境分析＞</p>
          <AnalysisConditions :data="AnalysisListIten1"/>
        </div>
        <div class="wrap-item">
          <p class="" style="background: rgb(239 174 97);">＜建設市況の動向＞</p>
          <AnalysisConditions :data="AnalysisListIten2"/>
        </div>
      </div>

      <div class="content-item">
        <h3 class="T16B_24 mt-4 px-1 text-bg" style="background: rgb(234 130 6)">■建材の価格動向</h3>
        <div class="wrap-item">
          <MaterialTrend :data="PriceTrendMaterial" />
        </div>
      </div>

      <div class="content-item">
        <h3 class="T16B_24 mt-4 px-1 text-bg" style="background: rgb(234 130 6)">■その他価格動向</h3>
        <OtherTrend />
      </div>
      <div class="flex flex-col justify-start">
        <el-checkbox v-model="checkedSendMail" class="py-5"
          >：メール送信する場合はチェックを入れてください。</el-checkbox>
        <div><el-button type="primary" @click="handleDisplayAction">登録</el-button></div>
        <div class="mt-5 mb-10"><el-button type="primary" @click="handleCreatePriceMaintain">戻る</el-button></div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/CMS/Layout/index.vue'
import AnalysisConditions from '@/components/CMS/Preview/AnalysisConditions/index.vue'
import MaterialTrend from '@/components/CMS/Preview/MaterialTrend/index.vue'
import OtherTrend from '@/components/CMS/Preview/OtherTrend/index.vue'
// import PreviewMixin from '@/global/mixins/cms/preview.mixin'
import dayjs from 'dayjs'
import { formatDateYMDChart } from '@/utils/format'
export default {
  name: 'Preview',
  components: { Layout, AnalysisConditions, MaterialTrend, OtherTrend },
  // mixins: [PreviewMixin],
  data () {
    return {
      title: '建設物価状況イメージ',
      checkedSendMail: false,
      creatorInfo: '',
      editorInfo: '',
      AnalysisListIten1: [],
      AnalysisListIten2: [],
      PriceTrendMaterial: []
    }
  },
  created () {
    const date = localStorage.getItem('date_price_maintain')
    this.date = dayjs(date).format('YYYY/MM')
    // const dateRequest = dayjs(date).format('YYYY-MM').split('-')
    // const params = {
    //   year: dateRequest[0],
    //   month: dateRequest[1],
    //   active: 1
    // }
    // this.getData(params)
    this.creatorInfo = `${formatDateYMDChart(new Date())}   建設企画部`
    this.editorInfo = `${formatDateYMDChart(new Date())}   建設企画部`
    this.AnalysisListIten1 = [
      {
        title: '＜原油・鉄鋼の動向＞',
        comment: [
          '足元では、新型コロナウィルス感染拡大一服での経済回復による需要持ち直しなどにより、原油価格は高値圏で推移。',
          '中⻑期的な⽯油需給バランスも、アジアを中⼼とした⽯油需要拡⼤を背景に、今後数年間は高止まりの見込み。',
          '鉄鋼類も原料価格高騰に伴い、足元の価格は上昇傾向。'
        ]
      },
      {
        title: '＜新型コロナウィルス感染拡大の影響＞',
        comment: [
          '世界各国の人流の抑制やロックダウン、数度にわたり発令された緊急事態宣言等の下で、経済は大きく停滞。その結果、海外工場の生産数減少や物流の停滞に影響。',
          '建設業界においてもその影響は顕著であり、表面には出てきてないが、感染防止対策による作業効率低下などの影響あり。'
        ]
      },
      {
        title: '＜電力需要の動向＞',
        comment: [
          '中国では、経済回復と同時に、石炭を主燃料とする火力発電での発電抑制、石炭価格の上昇などにより、電力不足問題が起こるなど電力需要は増加。',
          '今後も中国やアセアン地域などを中⼼とした経済成⻑に伴い、グローバルでの電力需要は増加の見込み。その中に再エネシフト必須。'
        ]
      },
      {
        title: '＜半導体需給の動向＞',
        comment: [
          'コロナ渦におけるテレワークや電子商取引の浸透などでデータセンターやＰＣ、家電などの需要が拡大し、関連製品の製造に欠かせない半導体需要が逼迫。',
          '半導体不足は徐々に回復していくことが見込まれるが、動向注視が必要。'
        ]
      },
      {
        title: '＜国内の建設土木市場＞',
        comment: [
          '首都圏大型再開発、大阪万博、原発復興等の建設及び土木需要が継続的に大きい。',
          '技能労働者不足の顕在化。'
        ]
      }
    ]
    this.AnalysisListIten2 = [
      {
        title: '総括（要旨）',
        comment: [
          '建築コストは依然として上昇する。鉄材の価格上昇だけでなく、仕上げ材や設備機器も',
          '上昇傾向である事に加え、機器の納期遅れも予想。勿論、労働者不足も顕在'
        ]
      },
      {
        title: '',
        comment: [
          '要因は国土強靭化への対応や現在進行中の首都圏大型再開発工事、各地で着工中の原発復興工事、建設労務の担い手不足によるもの。',
          '主要資材については、需給面の強含みを反映して鉄材が上昇を続けており、目先は上昇。',
          '需要家の先行手配が一巡した影響もあり､盛り上がりを欠く商況であるが、流通各社は仕入れ価格上昇を背景に値上げ交渉を継続。６ヵ月連続で上昇。',
          '原料の鉄スクラップ価格が上昇に転じたこともあり，メーカー各社は価格優先の販売姿勢を崩していない。',
          '設備機器は、半導体及びコロナの影響で部品の調達遅れの気配も出てきている。',
          '中国市場については、石炭火力の排除による電力需要がひっ迫しているので、今後建設資材･製品においても影響がでてくる。'
        ]
      },
      {
        title: '内容',
        comment: [
          'H形鋼、異形棒鋼等の資材が上昇傾向。',
          'ビニル絶縁電線、配管用炭素鋼鋼管（ガス管）は、高止まり状態。',
          '下落した主要資材はない。',
          '石こうボード等の内装材の価格上昇の傾向あり。',
          '銅・アルミ共に横ばいで推移。原材料が高価格推移ながらも、加工品や工事サイドでは現状からの変動気配はない。',
          '高力ボルトなど建築用鋼材は、さらなる品薄感があり、秋以降の需要増。',
          '設備機器は、半導体等の電子材料不足や中国の電力制限による工場停止、新型コロナによる東南アジアのロックダウン等の影響で部品の調達に遅れの気配が出てきそうである。設備機器とは、受変電、空調機等。ベトナムに工場がある衛生機器（TOTO)は、４ヵ月程度の遅延'
        ]
      },
      {
        title: '',
        comment: [
          {
            title: '＜労務費＞',
            comment: [
              '担い手不足解消へ向けた処遇改善により、公共工事で予定価格を積算する際に用いる設計労務単価は上昇。',
              '建設業の有効求人倍率は全産業と比べて極めて高く、担い手の確保が難航。'
            ],
            parent: true
          },
          {
            title: '＜建設工事費＞',
            comment: [
              '建設工事費は、担い手の処遇改善に向けた取り組みや工事量の増加により、上昇基調。',
              '建設工事費デフレーターによる前年比約2.5%上昇。',
              'S造からRC造・SRC造への設計変更の動きあり。→鉄筋の供給は比較的安定・割安がある為。'
            ],
            parent: true
          }
        ]
      }
    ]
    this.PriceTrendMaterial = [
      {
        filePath: 'http://localhost:8080/static/img/image1.a51fbaa.png',
        source: 'Web建設物価'
      },
      {
        filePath: 'http://localhost:8080/static/img/image2.fa5c028.png',
        source: 'Web建設物価'
      }
    ]
  },
  methods: {
    handleCreatePriceMaintain () {
      this.$router.push({ name: 'CreatePriceMaintain' })
    },
    handleDisplayAction () {
      this.$router.push({ name: 'ActionPriceMaintain' })
    }
  }
}
</script>

<style></style>
