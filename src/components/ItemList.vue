<template>
  <div class="form-check d-flex align-items-center pt-2"
       v-for="item in list"
       :key="item.id">
    <div>
      <input class="form-check-input"
             type="radio"
             name="item"
             :id="item.id"
             @change="selected($event)"
             :value="item.id">
      <label class="form-check-label"
             :for="item.id">
        {{item.shopName}}
      </label>
    </div>
    &nbsp;
    <a-button type="danger"
              @click="handleDelete(item.id)">Delete</a-button>
  </div>
  <Dialog :show="show"
          @confirm="confirmDialog"
          @close="closeDialog" />
</template>

<script lang="ts">
import { ref, SetupContext, onMounted } from 'vue'
import Dialog from '../components/Dialog.vue'
import getRandomMenus from '../http/apis'
// import useItemList from '../hooks/useItemList'
export default {
  components: {
    Dialog
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  emits: ['change'],
  async setup(props: any, context: SetupContext) {
    const show = ref(false)
    // const list = ref<any[]>([])
    const selectValue = ref<string | number>(0)
    const selected = (e: MouseEvent) => {
      selectValue.value = (e.target as HTMLInputElement).value
      context.emit('change', selectValue.value)
    }
    // get item list
    // const result = await getRandomMenus({ pageNo: 1, rowNo: 4 })
    // list.value = result.data.data

    // const { list } = await useItemList()

    const handleDelete = (id: number) => {
      show.value = true
    }
    const closeDialog = () => {
      show.value = false
    }
    const confirmDialog = () => {
      show.value = false
    }

    return {
      // list,
      selectValue,
      selected,
      show,
      handleDelete,
      closeDialog,
      confirmDialog
    }
  }
}
</script>

<style lang="less" scoped>
.form-check-label {
  width: 230px;
}
</style>
