import request from '@/utils/request'

export function getOrderList() {
  return request({
    url: '/vue-admin-template/order/list',
    method: 'get'
  })
}
