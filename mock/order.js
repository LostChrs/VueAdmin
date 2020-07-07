const Mock = require('mockjs')

const data = Mock.mock({
  'list|30': [{
    'id|+1': 1,
    order_id: '@Id',
    username: '@cname',
    'pay_type|1': ['支付宝', '微信', '未支付'],
    'status|1': ['已关闭', '待发货', '已完成'],
    create_time: '@datetime',
    amount: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/order/list',
    type: 'get',
    response: config => {
      const list = data.list
      return {
        code: 20000,
        data: {
          total: list.length,
          list: list
        }
      }
    }
  }
]
