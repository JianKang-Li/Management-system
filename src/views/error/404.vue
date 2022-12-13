<template>
  <div class="page">
    <img src="@/assets/404.svg" alt="404" id="img" />
    <a-button type="primary"
      ><router-link to="/home">回到首页</router-link></a-button
    >
    <Footers></Footers>
  </div>
</template>
<script>
import Footers from "@/components/Footers.vue";

export default {
  name: "404",
  components: { Footers },
};
</script>
<style scoped>
#img {
  width: 30rem;
}
</style>
