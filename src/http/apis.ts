import axios from 'axios'

function getRandomMenus(params: any) {
  const { pageNo, rowNo } = params
  return axios.get(`/api/v1/merchant/randomMenus?pageNo=${pageNo}&rowNo=${rowNo}`)
}
export default getRandomMenus
