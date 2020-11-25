import { ref } from 'vue'
import getRandomMenus from '../http/apis'
const useItemList = async () => {
  const list = ref<any[]>([])
  const result = await getRandomMenus({ pageNo: 1, rowNo: 4 })
  list.value = result.data.data
  return {
    list
  }
}
export default useItemList
