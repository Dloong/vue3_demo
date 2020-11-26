<template>
  <nav class="navbar navbar-dark bg-primary  justify-content-between mb-4 px-4">
    <!-- Navbar content -->
    <a class="navbar-brand"
       href="#">Vue3 Demo</a>
    <ul class="list-inline"
        v-if="user.isLogin">
      <li class="list-inline-item"><a class="btn btn-primary"
           href="#"
           role="button">Login</a></li>
      <li class="list-inline-item"><a class="btn btn-inline-primary"
           href="#"
           role="button">Regist</a></li>
    </ul>
    <ul class="list-inline"
        v-else>
      <li class="list-inline-item">Hello, {{user.name}}</li>
    </ul>
  </nav>
</template>
<script lang='ts'>
import { defineComponent, PropType } from 'vue'
export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped>
</style>
