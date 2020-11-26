<template>
  <div class="container">
    <!-- <Suspense>
      <template #default>
        <Home />
      </template>
      <template #fallback>
        <h1>Loading ...</h1>
      </template>
    </Suspense>
    <hr>
    <Demo /> -->
    <global-header :user="testuser"></global-header>
    <column-list :list="testData" />
  </div>

</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test Vue3 chaha',
    description: 'lsdfj lqwieur qweklrqwr qwieurqwioer wqrehqweir qwerh',
    avatar:
      'https://avatars2.githubusercontent.com/u/54270712?s=460&u=9eb340718fe1c7e1fc0f46006e3608f6197a9db9&v=4'
  },
  {
    id: 2,
    title: 'test Vue3 chaha',
    description: 'lsdfj lqwieur qweklrqwr qwieurqwioer wqrehqweir qwerh'
  },
  {
    id: 3,
    title: 'test Vue3 chaha',
    description: 'lsdfj lqwieur qweklrqwr qwieurqwioer wqrehqweir qwerh',
    avatar:
      'https://avatars2.githubusercontent.com/u/54270712?s=460&u=9eb340718fe1c7e1fc0f46006e3608f6197a9db9&v=4'
  },
  {
    id: 4,
    title: 'test Vue3 chaha',
    description: 'lsdfj lqwieur qweklrqwr qwieurqwioer wqrehqweir qwerh',
    avatar:
      'https://avatars2.githubusercontent.com/u/54270712?s=460&u=9eb340718fe1c7e1fc0f46006e3608f6197a9db9&v=4'
  }
]
const testuser: UserProps = {
  isLogin: false,
  name: 'Along',
  id: 123213
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      testuser,
      testData
    }
  }
})
</script>
<style lang="less" scoped>
.wrap {
  width: 60vw;
  margin: 0 auto;
}
</style>
