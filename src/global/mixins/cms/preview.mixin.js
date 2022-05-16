import constructionPriceService from '@/services/cms/construction.service'

export default {
  data () {
    return {
      date: '',
      creatorInfo: '',
      editorInfo: '',
      blockLoading: false,

      externalEnvironmentAnalysisList: [],
      constructionMarketTrendAnalysisList: [],
      constructionMaterialPriceTrendList: [],
      individualPriceTrendsList: []
    }
  },
  methods: {
    async getData (params) {
      try {
        this.blockLoading = true
        const res = await constructionPriceService.getListConstructPrice(params)
        const {
          // eslint-disable-next-line camelcase
          analysis_construction_market_trends,
          // eslint-disable-next-line camelcase
          analysis_external_environment,
          // eslint-disable-next-line camelcase
          individual_price_trends,
          // eslint-disable-next-line camelcase
          price_trends_building_materials
        } = res
        if (
          analysis_external_environment.length &&
          analysis_construction_market_trends.length &&
          individual_price_trends.length &&
          price_trends_building_materials.length
        ) {
          this.externalEnvironmentAnalysisList = this.createDataAnalysisList(analysis_external_environment)
          this.constructionMarketTrendAnalysisList = this.createDataAnalysisList(analysis_construction_market_trends)
          this.constructionMaterialPriceTrendList = this.createDataPriceTrends(price_trends_building_materials)

          //   console.log('constructionMaterialPriceTrendList: ', price_trends_building_materials);
        } else {
          this.externalEnvironmentAnalysisList = []
          this.constructionMarketTrendAnalysisList = []
          this.constructionMaterialPriceTrendList = []
          this.individualPriceTrendsList = []
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.blockLoading = false
      }
    },
    createDataAnalysisList (data) {
      const dataMerge = data.reduce((newArray, item) => {
        return newArray.concat(item)
      }, [])
      return dataMerge.map(item => {
        return {
          id: item.id,
          title: item.title,
          data: item.comment.split('\r\n')
        }
      })
    },
    createDataPriceTrends (data) {
      return data.map(item => {
        return {
          id: item.id,
          filePath: item.file_path,
          source: item.source
        }
      })
    }
  }
}
