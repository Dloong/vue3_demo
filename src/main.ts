import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/global.less'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Antd)
app.mount('#app')
