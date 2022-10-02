<template>
  <SideBar></SideBar>
  <a-layout-content :style="{ padding: '0 0 0 1rem', overflow: 'auto' }">
    <router-view></router-view>
    <Footer bcolor="#f0f2f5" fcolor="#000000"></Footer>
  </a-layout-content>
</template>
<script setup>
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
