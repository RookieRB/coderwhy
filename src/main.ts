import { createApp } from 'vue'

import 'normalize.css'
import '@/assets/css/index.less'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import registerIcons from '@/components/global/register-icons'

// 引入 ELMessage和ELloading等组件样式
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(registerIcons)
// 全局注册
// app.use(ElementPlus)

app.mount('#app')
