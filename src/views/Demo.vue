<template>
  <p>计算总和{{state.count}}</p>
  <a-button @click="state.count++"
            type="primary">Add</a-button>
  <a-button @click="state.count--"
            type="danger">Resume</a-button>
</template>

<script lang="ts">
import { reactive, watch, ref, watchEffect, inject } from 'vue'
export default {
  setup() {
    const state = reactive({ count: 0, q: 'qeqwe' })
    watch(state, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    const count = ref(0)

    // watchEffect(() => console.log(count.value))
    // // -> logs 0

    // setInterval(() => {
    //   count.value++
    //   // -> logs 1
    // }, 1000)
    return {
      state
    }
  }
}
</script>

<style>
</style>
