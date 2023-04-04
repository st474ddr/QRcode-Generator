import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

const app = createApp(App)
app.use(ArcoVue, {
  componentPrefix: 'arco'
})

app.use(ArcoVueIcon)
app.mount('#app')
