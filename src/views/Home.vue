<template>
  <keep-alive>
    <SideBar></SideBar>
  </keep-alive>
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
