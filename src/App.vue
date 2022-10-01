<template>
  <a-layout class="page">
    <a-layout-header>
      <Header></Header>
    </a-layout-header>
    <a-layout class="main">
      <router-view></router-view>
    </a-layout>
    <a-layout-footer style="text-align: center; z-index: 1">
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
  height: calc(100vh - 134px);
}

:deep(.ant-layout-footer) {
  background: #304156;
  color: #ffff;
}

.page::-webkit-scrollbar {
  width: 0.3rem;
}

/* 滚动槽 */
.page::-webkit-scrollbar-track {
  border-radius: 1rem;
  background: #eee;
}

/* 滚动条滑块 */
.page::-webkit-scrollbar-thumb {
  width: 0.1rem;
  border-radius: 10px;
  background: rgba(136, 136, 136, 0.8);
}
</style>
