<template>
  <div class="wrap">
    <Suspense>
      <template #default>
        <Home />
      </template>
      <template #fallback>
        <h1>Loading ...</h1>
      </template>
    </Suspense>
    <hr>
    <Demo />
  </div>

</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Demo
  },
  setup() {
    const location = {
      address: 'shagnhai',
      office: 'weWork'
    }
    provide('location', location)
  }
})
</script>
<style lang="less" scoped>
.wrap {
  width: 60vw;
  margin: 0 auto;
}
</style>
