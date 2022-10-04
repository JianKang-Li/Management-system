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

import resize from "vue-element-resize-detector";



import "@/assets/css/normal.css"

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App)

app.directive('useresize', {
  mounted(el, binding) {
    // el为绑定的元素，binding为绑定给指令的对象
    let width = "",
      height = "";
    function isReize() {
      const style = document.defaultView.getComputedStyle(el);
      if (width !== style.width || height !== style.height) {
        binding.value(); // 关键
      }
      width = style.width;
      height = style.height;
    }
    el.__vueSetInterval__ = setInterval(isReize, 300);
  },
  beforeUnmount(el) {
    clearInterval(el.__vueSetInterval__);
  }
})

app.use(resize)
app.use(createPinia().use(piniaPluginPersist))
app.use(router)
app.use(Antd)
app.use(VueMarkdownEditor);
app.mount('#app')
