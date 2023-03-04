<template>
  <div class="container">
    <video
      src=""
      ref="video"
      class="video_player"
      poster="@/assets/empty.png"
    ></video>
    <div class="controls">
      <div class="play center" ref="playbtn" v-show="!status">
        <img :src="playUrl" alt="" />
      </div>
      <div class="stop center" ref="stopbtn" v-show="status">
        <img :src="stopUrl" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onUpdated, onMounted } from "vue";
export default {
  props: {
    src: {
      type: String,
    },
  },
  setup(props) {
    const video = ref(null);
    const status = ref(false);
    const playUrl = new URL("@/assets/play.png", import.meta.url).href;
    const stopUrl = new URL("@/assets/stop.png", import.meta.url).href;
    const playbtn = ref(null);
    const stopbtn = ref(null);

    onMounted(() => {
      video.value.src = props.src;
      playbtn.value.addEventListener("click", function () {
        status.value = true;
        video.value.play();
      });
      stopbtn.value.addEventListener("click", function () {
        status.value = false;
        video.value.pause();
      });
      video.value.addEventListener("ended", () => {
        status.value = false;
      });
    });

    onUpdated(() => {
      video.value.src = props.src;
      playbtn.value.addEventListener("click", function () {
        status.value = true;
        video.value.play();
      });
      stopbtn.value.addEventListener("click", function () {
        status.value = false;
        video.value.pause();
      });
      video.value.addEventListener("ended", () => {
        status.value = false;
      });
    });

    return {
      video,
      status,
      playUrl,
      stopUrl,
      playbtn,
      stopbtn,
    };
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  margin-top: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video_player {
  width: fit-content;
  min-width: 80%;
  max-height: 80vh;
  object-fit: contain;
}

.container .center {
  border: none;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
