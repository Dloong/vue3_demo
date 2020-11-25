<template>
  <h1>Vue3.0</h1>
  <p>There is {{list.length}} thing(s) have to do</p>
  <AddItem @add="add" />
  <Suspense>
    <template #default>
      <ItemList @change="selected"
                :list="list" />
    </template>
    <template #fallback>
      <h1>Loading ...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import AddItem from '../components/AddItem.vue'
import ItemList from '../components/ItemList.vue'
import useItemList from '../hooks/useItemList'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    AddItem,
    ItemList
  },
  async setup() {
    const s = ref(0)
    const { list } = await useItemList()
    const color = ref('green')
    const location = {
      address: 'shagnhai',
      office: 'weWork'
    }
    const add = (item: any): void => {
      console.log(item)
      list.value.push({
        shopName: item,
        id: Math.round(Math.random() * 10)
      })
    }
    const selected = (id: string | number): void => {
      console.log(id)
    }
    return {
      add,
      list,
      color,
      selected
    }
  }
})
</script>
<style vars="{ color }" scoped >
h1 {
  color: var(--color);
}
.item-text {
  text-decoration: line-through;
}
</style>
