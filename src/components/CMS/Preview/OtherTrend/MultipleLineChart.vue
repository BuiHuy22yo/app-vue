<template>
  <highcharts ref="chart" class="multiple-line-chart" :options="options"></highcharts>
</template>

<script>
export default {
  props: {
    dataLineChart: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    options () {
      return {
        chart: {
          style: {
            fontFamily: 'BIZ-UDGothic'
          },
          type: 'line',
          height: 400
        },
        title: {
          text: ''
        },

        series: [...this.dataLineChart.series],
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          // floating: true,
          itemStyle: {
            color: '#000000',
            fontSize: '10px',
            fontWeight: 'normal'
          }

        },
        tooltip: {
          backgroundColor: '#FCFFC5'
        },
        xAxis: {
          lineWidth: 1,
          tickWidth: 1,
          tickPixelInterval: 50,
          scrollbar: {
            enabled: false,
            margin: 30
          },
          categories: [...this.dataLineChart.lables],
          labels: {
            rotation: -90,
            step: 1
          },
          min: 0,
          max: 11
        },
        yAxis: {
          lineWidth: 1,
          tickWidth: 1
        },
        plotOptions: { series: { marker: { enabled: false } } }
      }
    }
  },
  created () {
    console.log('dataLineChart: ', this.dataLineChart)
  }
}
</script>

<style>
.multiple-line-chart {
  max-width: 100% !important;
}
</style>
