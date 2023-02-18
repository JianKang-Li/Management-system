<template>
  <div class="container">
    <video
      src=""
      ref="video"
      class="video_player"
      poster="@/assets/empty.png"
      controls
    ></video>
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

    onMounted(() => {
      video.value.src = props.src;
    }),
      onUpdated(() => {
        video.value.src = props.src;
      });

    return {
      video,
      status,
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

.control {
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
