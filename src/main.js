import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersist))
app.use(router)
app.use(Antd)
app.mount('#app')
