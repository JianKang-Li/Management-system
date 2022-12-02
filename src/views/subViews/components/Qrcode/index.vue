<template>
  <div class="container">
    <a-space>
      <a-input type="text" v-model:value="qrtext" />
      <a-button type="primary" @click="generate">生成二维码</a-button>
    </a-space>
    <div id="show"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2-fix";
import { ref } from "vue";
export default {
  setup() {
    const qrtext = ref("二维码");

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
      // qrcode.makeCode();
      // console.log(qrcode);
    };
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
