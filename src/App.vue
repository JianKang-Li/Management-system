<template>
  <a-layout style="min-height: 100vh">
    <a-layout class="page">
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <a-layout class="main">
        <router-view></router-view>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import Header from "@/components/Header.vue";
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

.main {
  width: 100%;
  height: calc(100vh - 134px);
}
</style>
