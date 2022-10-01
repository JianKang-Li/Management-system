<template>
  <SideBar></SideBar>
  <a-layout-content
    :style="{ padding: '0 0 0 1rem', overflow: 'auto' }"
    class="home"
  >
    <router-view></router-view>
  </a-layout-content>
</template>
<script setup>
import SideBar from "@/components/SideBar.vue";
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home::-webkit-scrollbar {
  width: 0.3rem;
}

/* 滚动槽 */
.home::-webkit-scrollbar-track {
  border-radius: 1rem;
  background: #eee;
}

/* 滚动条滑块 */
.home::-webkit-scrollbar-thumb {
  width: 0.1rem;
  border-radius: 10px;
  background: rgba(136, 136, 136, 0.8);
}
</style>
