import { request, config } from 'utils'

export async function checkRSA(data) {
	return request({
		url: 'http://172.16.8.2/checkRSA.php',
		method: 'post',
		data,
	})
}