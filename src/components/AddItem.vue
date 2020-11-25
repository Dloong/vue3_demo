<template>
  <input v-model="todoItem"
         placeholder="write some thing todo"
         @keyup="e => { if(e.keyCode === 13) add() }">
  <a-button @click="add"
            type="primary">add</a-button>
</template>

<script lang="ts">
import { ref, reactive, SetupContext, inject } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits: ['add'],
  setup(props: any, context: SetupContext) {
    const todoList = reactive([])
    const todoItem = ref('')
    const add = () => {
      context.emit('add', todoItem.value)
      todoItem.value = ''
    }

    const location = inject('location')
    console.log(location, 'inject')

    return {
      todoItem,
      todoList,
      add
    }
  }
}
</script>
<style scoped>
.item-text {
  text-decoration: line-through;
}
</style>
