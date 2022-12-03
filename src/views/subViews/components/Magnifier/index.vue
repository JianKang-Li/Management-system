<template>
  <div class="container">
    <div id="main">
      <img class="img" src="../../../../assets/Ljk.png" alt="示例图片" />
      <div id="mirror">
        <img src="../../../../assets/Ljk.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  name: "Magnifier",
  setup() {
    onMounted(() => {
      let oMain = document.querySelector("#main");
      let oMirror = document.querySelector("#mirror");
      let oBigimg = document.querySelector("#mirror img");

      oMain.addEventListener("mousemove", (e) => {
        let x_left = e.clientX - oMain.offsetLeft;
        let y_top = e.clientY - oMain.offsetTop;

        oMirror.style.left = x_left - oMirror.offsetWidth / 2 + "px";
        oMirror.style.top = y_top - oMirror.offsetHeight / 2 + "px";

        let bigImgLeft =
          (oBigimg.offsetWidth / oMain.offsetWidth) * x_left -
          oMirror.offsetWidth / 2;
        let bigImgTop =
          (oBigimg.offsetHeight / oMain.offsetHeight) * y_top -
          oMirror.offsetHeight / 2;

        oBigimg.style.left = -bigImgLeft + "px";
        oBigimg.style.top = -bigImgTop + "px";
      });
    });
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.img {
  width: 100%;
}

#main {
  width: 30rem;
  position: relative;
  overflow: hidden;
  cursor: move;
}

img {
  display: block;
}

#mirror {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

#mirror img {
  position: absolute;
}
</style>
