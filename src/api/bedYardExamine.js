import request from '@src/utils/request.js'

 // 获取一床一码审核和待审核列表
export function list(data){
  return request({
    url: "toExamine/list",
    method: 'post',
    data: data
  })
}

 // 更改审核状态
 export function update(params){
  return request({
    url: "toExamine/update",
    method: 'get',
    params: params
  })
}

