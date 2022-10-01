<template>
  <div class="header">
    <div class="logo">极简后台管理系统</div>
    <a-space>
      <a-avatar :size="40" v-if="isLogin">
        <template #icon>
          {{ state.username }}
        </template>
      </a-avatar>
      <a-button type="primary" danger v-if="isLogin" @click="loginOut"
        >退出</a-button
      >
    </a-space>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { userStateStore } from "@/stores/state";
const state = userStateStore();
const { isLogin } = storeToRefs(state);
const router = useRouter();
const loginOut = () => {
  state.$patch((state) => {
    state.isLogin = false;
    state.username = "";
  });
  router.push("/Login");
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: white;
  font-size: 1.5rem;
}
</style>
