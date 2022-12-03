<template>
  <div class="container">
    <h1>生成二维码</h1>
    <a-space>
      <a-input type="text" v-model:value="qrtext" />
      <a-button type="primary" @click="generate">生成</a-button>
    </a-space>
    <div id="show"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2-fix";
import { ref, onMounted } from "vue";
export default {
  name: "Qrcode",
  setup() {
    const qrtext = ref("https://github.com/JianKang-Li/Management-system");

    const generate = () => {
      const show = document.querySelector("#show");
      show.innerHTML = "";
      new QRCode(show, {
        text: qrtext.value, // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    };

    onMounted(() => {
      generate();
    });
    return {
      qrtext,
      generate,
    };
  },
};
</script>

<style scoped>
#show {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
</style>
