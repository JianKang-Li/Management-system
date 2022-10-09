<template>
  <div class="page">
    <h2 id="status">500 Error!</h2>
    <img src="@/assets/500.svg" alt="500" id="img" />
    <a-button type="primary"
      ><router-link to="/home">回到首页</router-link></a-button
    >
    <Footers></Footers>
  </div>
</template>
<script>
import Footers from "@/components/Footers.vue";

export default {
  name: "500",
  components: { Footers },
};
</script>
<style scoped>
#img {
  width: 30rem;
  height: 30rem;
}
#status {
  position: absolute;
  top: 5rem;
  font-size: 4rem;
  transform: rotateZ(10deg);
}
</style>
