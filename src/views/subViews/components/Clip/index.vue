<template>
  <div class="container">
    <h1>一键复制</h1>
    <a-space>
      <a-input v-model:value="clipText" v-focus />
      <a-button type="primary" @click="copy1">exec复制</a-button>
      <a-button type="primary" v-copy="clipText">指令复制</a-button>
      <a-button type="primary" @click="copy2">剪切板API复制</a-button>
    </a-space>
  </div>
</template>
<script>
import { ref } from "vue";
import { message } from "ant-design-vue";
export default {
  name: "clip",
  setup() {
    const clipText = ref("这是复制内容");

    const copy1 = () => {
      let copyInput = document.createElement("input"); //创建input元素
      document.body.appendChild(copyInput); //向页面底部追加输入框
      copyInput.setAttribute("value", clipText.value); //添加属性，将url赋值给input元素的value属性
      copyInput.select(); //选择input元素
      document.execCommand("Copy"); //执行复制命令
      copyInput.remove(); //删除动态创建的节点
      message.success("复制成功");
    };

    const copy2 = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(clipText.value);
        message.success("复制成功");
      } else {
        message.error("浏览器不支持clipboard API");
      }
    };

    return {
      clipText,
      copy1,
      copy2,
    };
  },
};
</script>
<style scoped>
.container input {
  width: 240px;
}
</style>
