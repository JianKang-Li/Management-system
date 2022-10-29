<template>
  <a-layout-header
    :style="{ position: 'fixed', width: '100%', zIndex: 10, padding: 0 }"
  >
    <Headers></Headers>
  </a-layout-header>

  <PageShow></PageShow>
</template>
<script>
import PageShow from "@/components/PageShow.vue";

import Headers from "@/components/Headers.vue";
export default {
  name: "Home",
  components: { PageShow, Headers },
  setup() {},
};
</script>
<style scoped>
:deep(.ant-layout-header) {
  padding: 0 0.9rem;
}

:deep(.ant-anchor-link-title) {
  color: white;
  display: inline;
}

:deep(.ant-anchor-link) {
  display: inline;
  padding: 0;
}
</style>
