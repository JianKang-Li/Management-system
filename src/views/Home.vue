<template>
  <a-layout-header
    :style="{ position: 'fixed', width: '100%', zIndex: 10, padding: 0 }"
  >
    <Headers></Headers>
  </a-layout-header>
  <a-layout has-sider>
    <SideBar></SideBar>
  </a-layout>
</template>
<script>
import SideBar from "@/components/SideBar.vue";

import Headers from "@/components/Headers.vue";
export default {
  components: { SideBar, Headers },
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
