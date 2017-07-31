import { request, config } from 'utils'
const { api } = config
const { menus } = api

export async function query (params) {
  return request({
    //url: menus,
    url: 'http://172.16.8.2/getMenu.php',
    method: 'get',
    data: params,
  })
}
