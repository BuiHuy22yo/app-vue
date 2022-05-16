<template>
  <div>
    <div class="grid grid-cols-3">
      <div class="border-r border-gray-400 px-5 flex-1">
        <div class="my-1 pl-5">
          <div class="pb-2">
            <span class="my-1 ml-2 T16B_24">労務単価情報</span>
          </div>
          <Table :data-table="dataTable" />
          <p class="T16M_24 pt-3">出典：Web建設物価</p>
        </div>
      </div>
      <div class="border-r border-gray-400 px-5 flex-1">
        <div class="pb-2">
          <span class="my-1 ml-2 T16B_24">材工単価情報</span>
        </div>
        <ImageComp :image-url="imageUrl1" />
        <p class="T16M_24 pt-3">出典：Web建設物価</p>
      </div>
      <div class="border-l border-gray-400 px-5 flex-1">
        <div class="pb-2">
          <span class="my-1 ml-2 T16B_24">●●●情報</span>
        </div>
        <ImageComp :image-url="imageUrl" />
        <p class="T16M_24 pt-3">出典：Web建設物価</p>
      </div>
    </div>
  </div>
</template>

<script>
import Table from './Table.vue'
import MultipleLineChart from './MultipleLineChart.vue'
import ImageComp from '../MaterialTrend/ImageComp.vue'

export default {
  components: { Table, MultipleLineChart, ImageComp },
  data () {
    return {
      checkedSendMail: false,
      dataTable: [
        {
          name: '普通作業員 8時間当り',
          unit: '人日',
          price: 58,
          monthlyBasis: ''
        },
        {
          name: '鉄筋工 8時間当り',
          unit: '人日',
          price: 49,
          monthlyBasis: ''
        }
      ],
      imageUrl1: 'http://localhost:8080/static/img/image3.f64b285.png',
      imageUrl: 'http://localhost:8080/static/img/image4.aedc565.png',
      dataLineChart: {
        lables: [
          '2021/01',
          '2021/02',
          '2021/03',
          '2021/04',
          '2021/05',
          '2021/06',
          '2021/07',
          '2021/08',
          '2021/09',
          '2021/10',
          '2021/11',
          '2021/12'
        ],
        series: [
          {
            name: '鉄筋工事',
            data: [
              403.368, 390.975, 147.374, 88.624, 771.326, 654.849, 464.301, 205.689, 27.08, 829.217, 629.557, 307.556
            ]
          },
          {
            name: 'コンクリート工事',
            data: [
              567.778, 142.583, 216.208, 48.35, 815.132, 54.256, 921.9, 214.173, 851.847, 102.695, 209.493, 736.663
            ]
          },
          {
            name: 'ガラス工事',
            data: [
              564.141, 504.73, 63.715, 185.706, 28.825, 898.257, 892.83, 941.085, 749.288, 986.006, 753.263, 342.005
            ]
          },
          {
            name: '内装床工事',
            data: [
              980.967, 525.696, 249.207, 882.94, 962.731, 575.907, 508.755, 533.149, 138.033, 979.242, 414.524, 172.408
            ]
          },
          {
            name: '内装ボード工事',
            data: [
              770.344, 555.736, 76.27, 810.774, 909.911, 703.313, 395.902, 657.642, 898.719, 163.697, 713.869, 714.057
            ]
          },
          {
            name: 'ダクト工事',
            data: [
              539.493, 709.314, 669.882, 885.409, 985.485, 395.955, 825.538, 787.474, 695.447, 2.647, 816.989, 82.792
            ]
          },
          {
            name: '衛生器具取付',
            data: [
              651.249, 636.008, 93.612, 447.831, 712.397, 546.005, 171.673, 614.153, 600.756, 629.312, 45.159, 606.004
            ]
          }
        ]
      }
    }
  }
}
</script>

<style></style>
