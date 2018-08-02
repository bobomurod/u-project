import request from '@/utils/request'

// export function getPrice(query) {
//     return request({
//         url: '/',
//         method: 'get',
//         params: query
//     })
// }
export function getPrice() {
  return request({
    url: 'http://localhost:3999/',
    method: 'get'
  })
}
