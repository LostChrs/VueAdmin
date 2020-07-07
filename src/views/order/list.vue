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
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="订单号" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.order_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="金额" width="110" align="center">
        <template slot-scope="scope">
          $ {{ scope.row.amount }}
        </template>
      </el-table-column>
      <el-table-column label="用户账号" width="160" align="center">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="支付方式" width="120" align="center">
        <template slot-scope="scope">
          {{ scope.row.pay_type }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="订单状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="getPayStatus(scope.row.status)">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import { getOrderList } from '@/api/order'

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
      this.listLoading = true
      getOrderList().then(response => {
        this.list = response.data.list
        this.listLoading = false
      })
    },
    getPayStatus(state) {
      if (state === '已完成') return 'success'
      if (state === '待发货') return 'warning'
      return 'info'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
