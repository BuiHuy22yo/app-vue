<template>
  <el-table ref="multipleTable" border class="table-trend-price w-full" :data="dataTable">
    <el-table-column label="名称" prop="name" show-overflow-tooltip width="140" />
    <el-table-column align="center" label="単位" prop="unit" width="80" />
    <el-table-column align="right" label="価格" prop="price" width="50">
      <template slot-scope="{ row }">
        <p>{{ row.price  }}</p>
      </template>
    </el-table-column>
    <el-table-column align="right" label="前月比" prop="monthlyBasis" width="70" />
  </el-table>
</template>

<script>
export default {
  props: {
    dataTable: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.table-trend-price {
  font-family: 'BIZ-UDGothic';
  font-style: normal;
  font-weight: 500;
  font-size: 12px !important;
  line-height: 16px;
}
</style>
