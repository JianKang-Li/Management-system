<template>
  <a-layout class="layout">
    <a-layout-header>
      <Header></Header>
    </a-layout-header>
    <div class="hr"></div>
    <a-layout class="main">
      <router-view></router-view>
    </a-layout>
    <a-back-top />
    <a-layout-footer style="text-align: center">
      极简后台 ©2022 Created by
      <a-anchor-link
        class="anchor"
        href="https://github.com/JianKang-Li"
        target="_blank"
        title="ljk"
      />
    </a-layout-footer>
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
  height: 81vh;
}

:deep(.ant-layout-footer) {
  background: #304156;
  color: #ffff;
}

.hr {
  height: 0.1rem;
  width: 100%;
  border: 1px solid #eee;
  background: #eee;
}
</style>
