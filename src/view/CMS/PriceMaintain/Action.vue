<template>
  <div class="page page-search-request">
    <Layout :title="title">
      <el-row justify="start" type="flex">
        <el-col :md="20" :xs="24">
          <div class="mt-4">
            <el-form ref="formMaterialSearch" label-position="left" label-width="120px" :model="params" :rules="rules">
              <el-form-item label="掲載年月" prop="date">
                <el-date-picker v-model="params.date" type="month" />
              </el-form-item>
              <div class="footer mt-8">
                <el-button :disabled="!checkDate" type="primary" @click="handleCreateNew">新規登録</el-button>
                <el-button disabled type="primary" @click="handleUsingOldData">流用</el-button>
                <el-button disabled type="primary" @click="handleUpdate">修正</el-button>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/CMS/Layout/index.vue'
import { formatDateDefault } from '@/utils/format'
import dayjs from 'dayjs'
export default {
  name: 'ActionPriceMaintain',

  components: {
    Layout
  },
  data () {
    const rules = {
      date: [{ type: 'date', required: true, message: this.$t('message.required'), trigger: 'change' }]
    }

    return {
      title: '建設物価保守',
      loading: false,
      rules,
      params: {
        date: formatDateDefault(new Date())
      }
    }
  },

  computed: {
    checkDate () {
      const newDate = dayjs()
      return newDate.diff(this.params.date) < 0
    }
  },

  methods: {
    handleCreateNew () {
      this.$refs.formMaterialSearch.validate(valid => {
        if (!valid) return
        localStorage.setItem('date_price_maintain', this.params.date)
        this.$router.push({ name: 'CreatePriceMaintain' })
      })
    },
    handleUsingOldData () {},
    handleUpdate () {}
  }
}
</script>
