<template>
  <div class="pl-5">
    <div class="grid grid-cols-11 mb-5">
      <div v-for="(item, index) in data" :key="index" class="col-span-5 px-5">
        <p class="T16M_24">{{item.title}}</p>
        <p>ファイル</p>
        <div class="ml-5 mb-5">
          <app-input-file
            v-model="filePath"
            accept="image/jpg, image/jpeg, image/png"
            button-name="参照"
            class="el-button-file-custom"
            placeholderName="ファイル"
          />
          <span class="text-red-500">※新規登録または差し替えが必要な場合にのみ指定してください。</span>
        </div>
        <p>出典</p>
        <div class="ml-5">
          <el-input v-model="source" size="small" type="text" />
        </div>
      </div>

      <div class="col-span-1 text-end pt-5 px-5" style="padding-top: 44px;">
        <el-button class="cms--button-add" size="small" @click="$router.push({ name: 'PreviewPriceMainatin' })">
          表示
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceTrendsMaterials',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filePath: null,
      source: ''
    }
  },
  created () {
    this.data.filePath = this.filePath
    this.data.source = this.source
  }
}
</script>

<style></style>
