<template>
  <div class="orther-trend-item">
    <div class="mb-3" v-if="data.layout">
      <p>レイアウト</p>
      <div class="pl-3">
        <el-select v-model="data.layoutName" size="small" style="width: 100%" @change="handleLayoutChange">
          <el-option
            v-for="(item, indexData) in data.listOption"
            :key="indexData"
            :label="item.constantName"
            :value="item"
          />
        </el-select>
      </div>
    </div>

    <div class="mb-3" v-if="data.title">
      <p>タイトル</p>
      <div class="pl-3">
        <el-input v-model="data.titleName" size="small" type="text" placeholder="タイトル"/>
      </div>
    </div>
    <div class="mb-3" v-if="data.time">
      <p>対象期間</p>
      <div class="pl-3">
        <el-select v-model="data.timeName" size="small" style="width: 100%" @change="handleLayoutChange" placeholder="">
          <el-option
            v-for="(item, indexData) in data.timeOption"
            :key="indexData"
            :label="item.constantName"
            :value="item"
          />
        </el-select>
      </div>
    </div>

    <div class="mb-3" v-if="data.file">
      <p>ファイル</p>
      <div class="pl-3">
        <app-input-file
          v-model="data.fileName"
          accept="image/jpg, image/jpeg, image/png"
          button-name="参照"
          class="el-button-file-custom"
          placeholderName="ファイル"
        />
      </div>
    </div>

    <div class="" v-if="data.source">
      <p>出典</p>
      <div class="pl-3">
        <el-input v-model="data.sourceName" size="small" type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemOrtherTrend',
  props: {
    data: {
      type: Object,
      default: () => []
    }
  },

  data () {
    return {
      // loadingTable: false,
      // lableResult: '価格'
    }
  },

  methods: {
    handleLayoutChange () {}
  }
}
</script>
