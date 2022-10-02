import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

import "@/assets/css/normal.css"

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersist))
app.use(router)
app.use(Antd)
app.use(VueMarkdownEditor);
app.mount('#app')
