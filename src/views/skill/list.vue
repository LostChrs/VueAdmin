<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="Id" width="80" align="center">
        <template slot-scope="scope">
          {{ scope.row.pid }}
        </template>
      </el-table-column>
      <el-table-column label="触发对象" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ getTriggerObject(scope.row.chufadx) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="触发目标" width="110" align="center">
        <template slot-scope="scope">
          {{ getTriggerTarget(scope.row.chufamb) }}
        </template>
      </el-table-column>
      <el-table-column label="触发条件" width="160" align="center">
        <template slot-scope="scope">
          {{ getTriggerCondition(scope.row.tiaojian) }}
        </template>
      </el-table-column>
      <el-table-column label="条件数值" width="120" align="center">
        <template slot-scope="scope">
          {{ scope.row.tiaojisz }}
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>

import { TableSkillPassivity } from './data/TableSkillPassivity'
import { TypeHelper } from './data/TypeHelper'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = false
      this.list = TableSkillPassivity
    },
    getPayStatus(state) {
      if (state === '已完成') return 'success'
      if (state === '待发货') return 'warning'
      return 'info'
    },
    getTriggerObject(type) {
      return TypeHelper.triggerObject(type)
    },
    getTriggerTarget(type) {
      return TypeHelper.triggerTarget(type)
    },
    getTriggerCondition(type) {
      return TypeHelper.TriggerCondition(type)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
