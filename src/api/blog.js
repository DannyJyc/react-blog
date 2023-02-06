import request from '@/utils/request'

export function getAll() {
  return request({
    url: '/api/Blogs/getAll',
    method: 'get'
  })
}